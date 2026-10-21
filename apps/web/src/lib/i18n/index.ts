import { browser } from '$app/environment';
import { derived, get, writable } from 'svelte/store';
import { en, type MessageKey } from './en';
import {
	isLocale,
	LOCALE_COOKIE,
	LOCALE_STORAGE_KEY,
	type Locale,
	SUPPORTED_LOCALES
} from './locale';
import { translateFor } from './translate';

export { isLocale, LOCALE_COOKIE, LOCALE_STORAGE_KEY, SUPPORTED_LOCALES };
export type { Locale, MessageKey };
export { en };

export const locale = writable<Locale>('en');

export function initLocale(value: string | null | undefined) {
	locale.set(isLocale(value) ? value : 'en');
}

export function currentLocale(): Locale {
	return get(locale);
}

export function setLocale(value: Locale) {
	locale.set(value);
	if (!browser) return;
	localStorage.setItem(LOCALE_STORAGE_KEY, value);
	document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
	document.documentElement.lang = value;
}

export function translate(key: MessageKey, params?: Record<string, string | number>): string {
	return translateFor(get(locale), key, params);
}

/** Reactive translator. Use `{$t('nav.dashboard')}` in components. */
export const t = derived(locale, ($locale) => {
	return (key: MessageKey, params?: Record<string, string | number>) =>
		translateFor($locale, key, params);
});
