import { describe, expect, it } from 'vitest';
import { en } from './en';
import { localeFromAcceptLanguage, resolveLocale } from './locale';
import { collectKeys, interpolate, lookup, translateFor } from './translate';
import { zhCN } from './zh-CN';

describe('i18n catalogs', () => {
	it('gives zh-CN every English key', () => {
		const englishKeys = collectKeys(en);
		const chineseKeys = new Set(collectKeys(zhCN));
		const missing = englishKeys.filter((key) => !chineseKeys.has(key));
		expect(missing).toEqual([]);
	});

	it('keeps Chinese strings non-empty', () => {
		for (const key of collectKeys(zhCN)) {
			expect(lookup('zh-CN', key)?.length).toBeGreaterThan(0);
		}
	});

	it('interpolates named placeholders and falls back to English', () => {
		expect(interpolate('Ports: {range}', { range: '25565-25570' })).toBe('Ports: 25565-25570');
		expect(translateFor('zh-CN', 'servers.ports', { range: '25565' })).toBe('端口：25565');
		expect(translateFor('en', 'nav.dashboard')).toBe('Dashboard');
	});
});

describe('resolveLocale', () => {
	it('prefers a saved cookie over Accept-Language', () => {
		expect(resolveLocale('zh-CN', 'en-US,en;q=0.9')).toBe('zh-CN');
		expect(resolveLocale('en', 'zh-CN,zh;q=0.9')).toBe('en');
	});

	it('follows the browser language when no cookie is set', () => {
		expect(localeFromAcceptLanguage('zh-CN,zh;q=0.9,en;q=0.8')).toBe('zh-CN');
		expect(localeFromAcceptLanguage('fr-FR,fr;q=0.9')).toBe('en');
		expect(resolveLocale(undefined, 'zh-Hans')).toBe('zh-CN');
	});
});
