<script lang="ts">
	import { page } from '$app/stores';
	import { t, type MessageKey } from '$lib/i18n';

	const statusCode = $derived($page.status || 500);
	const detail = $derived($page.error?.message ?? '');

	const knownCodes = [400, 401, 403, 404, 409, 429, 500, 502, 503, 504] as const;

	function errorKey(code: number, field: 'title' | 'description' | 'hint'): MessageKey | null {
		if (!knownCodes.includes(code as (typeof knownCodes)[number])) return null;
		return `errors.${code}.${field}` as MessageKey;
	}

	const title = $derived.by(() => {
		const key = errorKey(statusCode, 'title');
		if (key) return $t(key);
		return statusCode >= 500 ? $t('errors.serverTrouble') : $t('errors.requestFailed');
	});
	const description = $derived.by(() => {
		const key = errorKey(statusCode, 'description');
		if (key) return $t(key);
		return statusCode >= 500 ? $t('errors.serverTroubleDescription') : $t('errors.requestFailedDescription');
	});
	const hint = $derived.by(() => {
		const key = errorKey(statusCode, 'hint');
		return key ? $t(key) : $t('errors.fallbackHint');
	});
</script>

<svelte:head>
	<title>{statusCode} {title} | MineOS</title>
</svelte:head>

<div class="failwhale-page">
	<div class="copy">
		<div class="eyebrow">{$t('errors.eyebrow', { code: statusCode })}</div>
		<h1>{title}</h1>
		<p class="description">{description}</p>
		<p class="hint">{hint}</p>
		{#if detail}
			<p class="detail">{detail}</p>
		{/if}
		<div class="actions">
			<a class="btn-primary" href="/">{$t('errors.goDashboard')}</a>
			<button class="btn-secondary" type="button" onclick={() => history.back()}>
				{$t('errors.goBack')}
			</button>
		</div>
	</div>

	<div class="failwhale">
		<img src="/minecraft_failwhale.png" alt={$t('errors.failwhaleAlt')} />
		<div class="sign-code" aria-hidden="true">{statusCode}</div>
	</div>
</div>

<style>
	.failwhale-page {
		max-width: 1200px;
		min-height: 100vh;
		padding: 56px 24px 80px;
		display: grid;
		grid-template-columns: minmax(260px, 420px) minmax(320px, 1fr);
		gap: 40px;
		align-items: center;
		margin: 0 auto;
		color: var(--mc-text);
	}

	.copy {
		display: flex;
		flex-direction: column;
		gap: 12px;
		background: linear-gradient(160deg, rgba(26, 30, 47, 0.95), rgba(17, 20, 34, 0.95));
		border: 1px solid var(--border-color);
		border-radius: 20px;
		padding: 28px;
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 12px;
		color: var(--mc-text-muted);
	}

	h1 { margin: 0; font-size: 36px; font-weight: 600; }
	.description { margin: 0; font-size: 16px; color: var(--mc-text-secondary); }
	.hint { margin: 0; font-size: 14px; color: var(--mc-text-muted); }
	.detail { margin: 8px 0 0; font-size: 12px; color: var(--mc-text-dim); word-break: break-word; }

	.actions { margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap; }

	.btn-primary, .btn-secondary {
		border-radius: 10px;
		padding: 10px 18px;
		font-size: 14px;
		font-weight: 600;
		border: none;
		cursor: pointer;
		text-decoration: none;
		font-family: inherit;
	}

	.btn-primary { background: var(--mc-grass); color: white; }
	.btn-secondary { background: var(--mc-panel-light); color: var(--mc-text-secondary); }

	.failwhale { position: relative; width: 100%; max-width: 900px; justify-self: center; }
	.failwhale img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 24px;
		border: 1px solid rgba(42, 47, 71, 0.6);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
	}

	.sign-code {
		position: absolute;
		top: 34%;
		left: 24%;
		transform: rotate(-2deg);
		font-family: "JetBrains Mono", "Consolas", monospace;
		font-weight: 700;
		font-size: clamp(18px, 4vw, 40px);
		color: #8f0000;
		text-shadow: 0 2px 0 rgba(255, 255, 255, 0.35);
	}

	@media (max-width: 900px) {
		.failwhale-page { grid-template-columns: 1fr; padding: 32px 20px 48px; }
		.copy { text-align: center; }
		.actions { justify-content: center; }
		.sign-code { left: 20%; top: 26%; }
	}
</style>
