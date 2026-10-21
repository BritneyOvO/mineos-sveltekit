import type { LayoutServerLoad } from './$types';
import { LOCALE_COOKIE, resolveLocale } from '$lib/i18n/locale';

export const load: LayoutServerLoad = async ({ cookies, request }) => {
	return {
		locale: resolveLocale(cookies.get(LOCALE_COOKIE), request.headers.get('accept-language'))
	};
};
