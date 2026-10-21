import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/auth/me');

	if (!response.ok) {
		return {
			user: null,
			error: 'load_failed'
		};
	}

	const user = await response.json();
	return {
		user,
		error: null
	};
};

export const actions = {
	default: async ({ request, fetch, cookies, url }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString().trim();
		const password = data.get('password')?.toString();
		const confirmPassword = data.get('confirmPassword')?.toString();

		if (!username) {
			return fail(400, { error: 'username_required' });
		}

		if (password && password !== confirmPassword) {
			return fail(400, { error: 'password_mismatch' });
		}

		const payload: { username?: string; password?: string } = { username };
		if (password) {
			payload.password = password;
		}

		const response = await fetch('/api/auth/me', {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			const error = await response.json().catch(() => ({ error: 'update_failed' }));
			return fail(response.status, { error: error.error || 'update_failed' });
		}

		const updated = await response.json();
		const secure = url.protocol === 'https:';
		cookies.set('auth_user', JSON.stringify({ username: updated.username, role: updated.role }), {
			httpOnly: false,
			secure,
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7,
			path: '/'
		});

		return { success: true };
	}
} satisfies Actions;
