import { ui } from '../data/i18n'

export const getUi = (language = 'es') => ui[language] || ui.es