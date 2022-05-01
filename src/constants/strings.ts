export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['!تهنيئه']
export const GAME_COPIED_MESSAGE = 'هاسيل ڤرماٴينن دسالين کڤاڤن کليڤ'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'تق چوکوڤ حروفڽ...'
export const WORD_NOT_FOUND_MESSAGE = 'ڤرکاتاٴن تيدق دتموکن'
export const HARD_MODE_ALERT_MESSAGE =
  'مود سوليت هاڽ بيسا دأکتيفکن ڤد ڤرمولاٴن ڤرماٴينن'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'باݢي يڠ کورڠ ڤڠليهتن ورنا'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `جواڤن اداله ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'ماسوق'
export const DELETE_TEXT = '⌦'
export const STATISTICS_TITLE = 'ستاتيستيک'
export const GUESS_DISTRIBUTION_TEXT = 'تابورن تکاٴن'
export const NEW_WORD_TEXT = 'کاتادل ستروسڽ'
export const SHARE_TEXT = 'کوڠسي'
export const TOTAL_TRIES_TEXT = 'کالي برماٴين'
export const SUCCESS_RATE_TEXT = 'ڤراتوسن کمنڠن'
export const CURRENT_STREAK_TEXT = 'ستريک‌س سماس'
export const BEST_STREAK_TEXT = 'ستريک‌س ترتيڠݢي'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
