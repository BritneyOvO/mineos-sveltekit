<script lang="ts">
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import { t, type MessageKey } from '$lib/i18n';
	import type { PageData } from './$types';

	let { data, form }: { data: PageData; form: { error?: string; success?: boolean } | null } =
		$props();

	let username = $state(data.user?.username ?? '');
	let password = $state('');
	let confirmPassword = $state('');

	const profileErrors: Record<string, MessageKey> = {
		load_failed: 'profile.loadFailed',
		username_required: 'profile.usernameRequired',
		password_mismatch: 'profile.passwordMismatch',
		update_failed: 'profile.updateFailed'
	};

	function profileMessage(code: string): string {
		const key = profileErrors[code];
		return key ? $t(key) : code;
	}

	const statusMessage = $derived.by(() => {
		if (form?.error) {
			return { type: 'error', message: profileMessage(form.error) };
		}
		if (form?.success) {
			return { type: 'success', message: $t('profile.updated') };
		}
		return null;
	});

	$effect(() => {
		if (form?.success) {
			password = '';
			confirmPassword = '';
		}
	});
</script>

<div class="page-header">
	<div>
		<h1>{$t('profile.title')}</h1>
		<p class="subtitle">{$t('profile.subtitle')}</p>
	</div>
</div>

<section class="panel language-panel">
	<h2>{$t('profile.language')}</h2>
	<p class="language-help">{$t('profile.languageHelp')}</p>
	<LanguageSelect id="profile-language" />
</section>

{#if data.error}
	<div class="alert error">{profileMessage(data.error)}</div>
{:else}
	<form method="post" class="profile-form">
		<section class="panel">
			<h2>{$t('profile.account')}</h2>
			<label>
				<span class="label-text">{$t('profile.username')}</span>
				<input type="text" name="username" bind:value={username} required />
			</label>
			<label>
				<span class="label-text">{$t('profile.role')}</span>
				<input type="text" value={data.user?.role ?? 'user'} readonly />
			</label>
		</section>

		<section class="panel">
			<h2>{$t('profile.password')}</h2>
			<label>
				<span class="label-text">{$t('profile.newPassword')}</span>
				<input type="password" name="password" bind:value={password} placeholder={$t('profile.keepCurrent')} />
			</label>
			<label>
				<span class="label-text">{$t('profile.confirmPassword')}</span>
				<input type="password" name="confirmPassword" bind:value={confirmPassword} placeholder={$t('profile.repeatPassword')} />
			</label>
		</section>

		<button class="btn-primary" type="submit">{$t('profile.save')}</button>

		{#if statusMessage}
			<div class="alert" class:success={statusMessage.type === 'success'} class:error={statusMessage.type === 'error'}>
				{statusMessage.message}
			</div>
		{/if}
	</form>
{/if}

<style>
	.page-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 32px;
	}

	h1 {
		margin: 0 0 8px;
		font-size: 32px;
		font-weight: 600;
	}

	.subtitle {
		margin: 0;
		color: #aab2d3;
		font-size: 15px;
	}

	.profile-form {
		display: grid;
		gap: 20px;
		max-width: 520px;
	}

	.language-panel {
		max-width: 520px;
		margin-bottom: 20px;
	}

	.language-help {
		margin: -8px 0 0;
		color: #9aa2c5;
		font-size: 13px;
	}

	.panel {
		background: linear-gradient(135deg, #1a1e2f 0%, #141827 100%);
		border-radius: 16px;
		padding: 24px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
		border: 1px solid #2a2f47;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.panel h2 {
		margin: 0;
		font-size: 18px;
		color: #eef0f8;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.label-text {
		font-size: 13px;
		color: #9aa2c5;
		font-weight: 500;
	}

	input[readonly] {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.btn-primary {
		background: var(--mc-grass);
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 12px 20px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.2s;
		width: fit-content;
	}

	.btn-primary:hover {
		background: var(--mc-grass-dark);
	}

	.alert {
		padding: 12px 16px;
		border-radius: 10px;
		font-size: 14px;
	}

	.alert.error {
		background: rgba(255, 92, 92, 0.12);
		border: 1px solid rgba(255, 92, 92, 0.3);
		color: #ffb0ad;
	}

	.alert.success {
		background: rgba(106, 176, 76, 0.18);
		border: 1px solid rgba(106, 176, 76, 0.35);
		color: #b7f5a2;
	}
	@media (max-width: 768px) {
		.page-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}
	}
</style>
