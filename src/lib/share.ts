import { getGuessStatuses } from './statuses'
import { solutionIndex, unicodeSplit } from './words'
import { GAME_TITLE } from '../constants/strings'
import { MAX_CHALLENGES } from '../constants/settings'
import { UAParser } from 'ua-parser-js'

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

const today = new Date()
today.setHours(0, 0, 0, 0)
const bulan = ["جانواري", "فيبرواري", "مچ", "اڤريل", "مي", "جون", "جولاي", "اوݢوس", "سيڤتيمبر", "اوکتوبر", "نوۏيمبر", "ديسيمبر"]

export const shareStatus = (
  solution: string,
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void
) => {
  const textToShare =
    `${GAME_TITLE} (${today.getDate()} ${bulan[today.getMonth()]} ${today.getFullYear()}): ${
       lost ? 'ݢاݢل' : guesses.length.toString() + ' ڤر ' + MAX_CHALLENGES.toString()
    } \n\n` +
    generateEmojiGrid(
      solution,
      guesses,
      getEmojiTiles(isDarkMode, isHighContrastMode)
    )

  const shareData = { text: textToShare }

  let shareSuccess = false

  try {
    if (attemptShare(shareData)) {
      navigator.share(shareData)
      shareSuccess = true
    }
  } catch (error) {
    shareSuccess = false
  }

  if (!shareSuccess) {
    navigator.clipboard.writeText(textToShare)
    handleShareToClipboard()
  }
}

export const generateEmojiGrid = (
  solution: string,
  guesses: string[],
  tiles: string[]
) => {
  return "\u202E" + guesses
    .map((guess) => {
      const status = getGuessStatuses(solution, guess)
      const splitGuess = unicodeSplit(guess)

      return splitGuess
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return tiles[0]
            case 'present':
              return tiles[1]
            default:
              return tiles[2]
          }
        })
        .join('')
    })
    .join('\u202C\n\u202E')
}

const attemptShare = (shareData: object) => {
  return (
    // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
    browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
    webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
    navigator.canShare &&
    navigator.canShare(shareData) &&
    navigator.share
  )
}

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean) => {
  let tiles: string[] = []
  tiles.push(isHighContrastMode ? '🟧' : '🟩')
  tiles.push(isHighContrastMode ? '🟦' : '🟨')
  tiles.push(isDarkMode ? '⬛' : '⬜')
  return tiles
}
