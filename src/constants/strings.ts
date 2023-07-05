export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Kazi nzuri!', 'Ajab!', 'Umefanya vizuri!']
export const GAME_COPIED_MESSAGE = 'Mchezo umenakiliwa kwenye ubao wa kunakili'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Hakuna herufi za kutosha'
export const WORD_NOT_FOUND_MESSAGE = 'Neno halijapatikana'
export const HARD_MODE_ALERT_MESSAGE =
  'Hali Ngumu inaweza kuwezeshwa tu mwanzoni!'
export const HARD_MODE_DESCRIPTION =
  'Vidokezo vyovyote vilivyofichuliwa lazima vitumike katika ubashiri unaofuata'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Ili kuboresha maono ya rangi'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Neno lilikuwa ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Lazima utumie ${guess} katika nafasi ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Nadhani lazima iwe na ${letter}`
export const ENTER_TEXT = 'Ingia'
export const DELETE_TEXT = 'Futa'
export const STATISTICS_TITLE = 'Takwimu'
export const GUESS_DISTRIBUTION_TEXT = 'Nadhani Usambazaji'
export const NEW_WORD_TEXT = 'Neno jipya'
export const SHARE_TEXT = 'Sambaza'
export const SHARE_FAILURE_TEXT =
  'Imeshindwa kusambaza matokeo. Kipengele hiki kinapatikana tu katika muktadha salama (HTTPS), katika baadhi au vivinjari vyote vinavyotumika.'
export const MIGRATE_BUTTON_TEXT = 'Hamisha'
export const MIGRATE_DESCRIPTION_TEXT =
  'Bofya hapa ili kuhamisha takwimu zako kwenye kifaa kipya.'
export const TOTAL_TRIES_TEXT = 'Jumla ya majaribio'
export const SUCCESS_RATE_TEXT = 'Kiwango cha mafanikio'
export const CURRENT_STREAK_TEXT = 'Mfululizo wa sasa'
export const BEST_STREAK_TEXT = 'Mfululizo bora'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Unatumia kivinjari kilichopachikwa na unaweza kupata matatizo kushiriki au kuhifadhi matokeo yako. Tunakuhimiza utumie kivinjari chaguomsingi cha kifaa chako."

export const DATEPICKER_TITLE = 'Chagua tarehe iliyopita'
export const DATEPICKER_CHOOSE_TEXT = 'Chagua'
export const DATEPICKER_TODAY_TEXT = 'leo'
export const ARCHIVE_GAMEDATE_TEXT = 'Tarehe ya mchezo'
