import {i18n, TxKeyPath} from './i18n';
import {TranslateOptions} from 'i18n-js';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: TxKeyPath, options?: TranslateOptions) {
  return key ? i18n.t(key, options) : '';
}
