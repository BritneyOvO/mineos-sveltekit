import { writable, get } from 'svelte/store';
import { translate } from '$lib/i18n';

export type ModalType = 'alert' | 'confirm' | 'error' | 'success';

export interface ModalState {
	isOpen: boolean;
	type: ModalType;
	title: string;
	message: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
}

const defaultState: ModalState = {
	isOpen: false,
	type: 'alert',
	title: '',
	message: '',
	confirmText: 'OK',
	cancelText: 'Cancel'
};

export const modalStore = writable<ModalState>(defaultState);

function createModalActions() {
	function close() {
		modalStore.set(defaultState);
	}

	function alert(message: string, title = translate('modal.notice')): Promise<void> {
		return new Promise((resolve) => {
			modalStore.set({
				isOpen: true,
				type: 'alert',
				title,
				message,
				confirmText: translate('common.ok'),
				onConfirm: () => {
					close();
					resolve();
				}
			});
		});
	}

	function error(message: string, title = translate('modal.error')): Promise<void> {
		return new Promise((resolve) => {
			modalStore.set({
				isOpen: true,
				type: 'error',
				title,
				message,
				confirmText: translate('common.ok'),
				onConfirm: () => {
					close();
					resolve();
				}
			});
		});
	}

	function success(message: string, title = translate('modal.success')): Promise<void> {
		return new Promise((resolve) => {
			modalStore.set({
				isOpen: true,
				type: 'success',
				title,
				message,
				confirmText: translate('common.ok'),
				onConfirm: () => {
					close();
					resolve();
				}
			});
		});
	}

	function confirm(message: string, title = translate('modal.confirm')): Promise<boolean> {
		return new Promise((resolve) => {
			modalStore.set({
				isOpen: true,
				type: 'confirm',
				title,
				message,
				confirmText: translate('common.confirm'),
				cancelText: translate('common.cancel'),
				onConfirm: () => {
					close();
					resolve(true);
				},
				onCancel: () => {
					close();
					resolve(false);
				}
			});
		});
	}

	return { alert, error, success, confirm, close };
}

export const modal = createModalActions();
