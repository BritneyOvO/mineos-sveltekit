<script lang="ts">
	import { isLocale, locale, setLocale, SUPPORTED_LOCALES, t } from '$lib/i18n';

	let { id = 'mineos-language' }: { id?: string } = $props();

	function onChange(event: Event) {
		const value = (event.currentTarget as HTMLSelectElement).value;
		if (isLocale(value)) setLocale(value);
	}
</script>

<select {id} class="language-select" aria-label={$t('settings.language')} value={$locale} onchange={onChange}>
	{#each SUPPORTED_LOCALES as item (item.id)}
		<option value={item.id}>{item.nativeName}</option>
	{/each}
</select>

<style>
	.language-select {
		min-width: 148px;
		background: var(--input-bg, #141827);
		border: 1px solid var(--border-color, #2a2f47);
		border-radius: 8px;
		padding: 8px 12px;
		color: var(--mc-text, #eef0f8);
		font-family: inherit;
		font-size: 14px;
	}
</style>
