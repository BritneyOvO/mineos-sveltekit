import { en, type MessageKey } from './en';
import type { Locale } from './locale';
import { zhCN } from './zh-CN';

const catalogs = {
	en,
	'zh-CN': zhCN
} as const;

export function lookup(locale: Locale, key: string): string | undefined {
	const parts = key.split('.');
	let node: unknown = catalogs[locale];
	for (const part of parts) {
		if (!node || typeof node !== 'object' || !(part in node)) return undefined;
		node = (node as Record<string, unknown>)[part];
	}
	return typeof node === 'string' ? node : undefined;
}

export function interpolate(
	template: string,
	params?: Record<string, string | number>
): string {
	if (!params) return template;
	return template.replace(/\{(\w+)\}/g, (match, name: string) => {
		const value = params[name];
		return value === undefined ? match : String(value);
	});
}

export function translateFor(
	locale: Locale,
	key: MessageKey,
	params?: Record<string, string | number>
): string {
	const template = lookup(locale, key) ?? lookup('en', key) ?? key;
	return interpolate(template, params);
}

export function collectKeys(node: unknown, prefix = ''): string[] {
	if (typeof node === 'string') return [prefix];
	if (!node || typeof node !== 'object') return [];
	return Object.entries(node as Record<string, unknown>).flatMap(([key, value]) =>
		collectKeys(value, prefix ? `${prefix}.${key}` : key)
	);
}
