import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(solution, guess)
  const splitGuess = unicodeSplit(guess)
  const RODA = "٢ﻻرزوۏدذأإاٴءة";

  let newSplitGuess = [...splitGuess]

  /* Manual arabic reshaping with ZWNJ and ZWJ */
  for (let i=0; i<solution.length; i++) {

    if (splitGuess[i] === 'ﻻ') {newSplitGuess[i] = 'لا'}

    // arabic loanwords ending with hamzah becomes hamzah setara
    if (splitGuess[i] === 'ٴ' && i===solution.length-1) {
        newSplitGuess[i] = 'ء';
    }

    if (splitGuess[i] !== undefined) {
        if (i === 0 && splitGuess.length === 1) {
            newSplitGuess[i] = newSplitGuess[i] + '\u200c';
        }
        else if (i === 0 && splitGuess.length > 1) {
            newSplitGuess[i] = newSplitGuess[i] + '\u200d';
        }
        else if (i === splitGuess.length-1) {
            if (RODA.includes(splitGuess[i-1])) {
                newSplitGuess[i] = '\u200c' + newSplitGuess[i] + '\u200c';
            } else {
                newSplitGuess[i] = '\u200d' + newSplitGuess[i] + '\u200c';
            }
        }
        else if (splitGuess.length > i) {
            if (RODA.includes(splitGuess[i-1])) {
                newSplitGuess[i] = '\u200c' + newSplitGuess[i];
            } else {
                newSplitGuess[i] = '\u200d' + newSplitGuess[i];
            }
        }
        if (!('ٴء٢'.includes(splitGuess[i+1]))) {
            newSplitGuess[i] = newSplitGuess[i] + '\u200d';
        }
    }
  }

  return (
    <div className="flex justify-center mb-1">
      {newSplitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
