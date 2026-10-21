<script lang="ts">
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import favicon from '$lib/assets/favicon.svg';
	import Modal from '$lib/components/Modal.svelte';
	import {
		initLocale,
		isLocale,
		locale,
		LOCALE_COOKIE,
		LOCALE_STORAGE_KEY,
		setLocale,
		t
	} from '$lib/i18n';

	let { data, children } = $props();

	// Same value the server rendered, so hydration matches the cookie / Accept-Language.
	initLocale(data.locale);
	let synced = data.locale;

	$effect(() => {
		if (data.locale !== synced) {
			synced = data.locale;
			initLocale(data.locale);
		}
	});

	$effect(() => {
		if (browser) document.documentElement.lang = $locale;
	});

	// A previous visit may have saved a language before the cookie existed.
	$effect(() => {
		if (!browser) return;
		const hasCookie = document.cookie.split('; ').some((part) => part.startsWith(`${LOCALE_COOKIE}=`));
		if (hasCookie) return;
		const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (isLocale(stored) && stored !== get(locale)) setLocale(stored);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{$t('app.title')}</title>
	<meta name="description" content={$t('app.description')} />
</svelte:head>

{@render children()}
<Modal />
