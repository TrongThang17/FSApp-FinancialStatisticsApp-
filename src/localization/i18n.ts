import {I18n} from 'i18n-js';
import en from './en.json';
import vi from './vi.json';

export const i18n = new I18n();
i18n.store({en, vi});

i18n.enableFallback = true;
i18n.locale = 'vi';

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not Viet Nam.
 */
type DefaultLocale = typeof vi;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
