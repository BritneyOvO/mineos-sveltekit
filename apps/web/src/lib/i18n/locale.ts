export const LOCALES = ['en', 'zh-CN'] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_COOKIE = 'mineos_locale';
export const LOCALE_STORAGE_KEY = 'mineos_locale';

export const SUPPORTED_LOCALES: { id: Locale; nativeName: string }[] = [
	{ id: 'en', nativeName: 'English' },
	{ id: 'zh-CN', nativeName: '简体中文' }
];

export function isLocale(value: string | null | undefined): value is Locale {
	return value === 'en' || value === 'zh-CN';
}

/** First matching language tag in an Accept-Language header. Unknown tags stay English. */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
	if (!header) return 'en';

	const tags = header
		.split(',')
		.map((part) => part.trim().split(';')[0]?.toLowerCase() ?? '')
		.filter(Boolean);

	for (const tag of tags) {
		if (tag.startsWith('zh')) return 'zh-CN';
		if (tag.startsWith('en')) return 'en';
	}

	return 'en';
}

/** Cookie wins. Otherwise follow the browser language. */
export function resolveLocale(
	cookieValue: string | null | undefined,
	acceptLanguage: string | null | undefined
): Locale {
	if (isLocale(cookieValue)) return cookieValue;
	return localeFromAcceptLanguage(acceptLanguage);
}

export function intlLocale(locale: Locale): string {
	return locale === 'zh-CN' ? 'zh-CN' : 'en-US';
}
