export const en = {
	app: {
		title: 'MineOS - Minecraft Server Manager',
		description: 'Open source Minecraft server management panel'
	},
	common: {
		ok: 'OK',
		cancel: 'Cancel',
		confirm: 'Confirm',
		save: 'Save',
		saving: 'Saving...',
		copy: 'Copy',
		copyFailed: 'Failed to copy to clipboard',
		delete: 'Delete',
		start: 'Start',
		stop: 'Stop',
		restart: 'Restart',
		kill: 'Kill',
		details: 'Details',
		close: 'Close'
	},
	modal: {
		notice: 'Notice',
		error: 'Error',
		success: 'Success',
		confirm: 'Confirm'
	},
	nav: {
		dashboard: 'Dashboard',
		servers: 'Servers',
		proxies: 'Proxies',
		profiles: 'Profiles',
		users: 'Users',
		settings: 'Settings',
		adminShell: 'Admin Shell',
		about: 'About',
		buyCoffee: 'Buy Me a Coffee',
		logout: 'Logout',
		tagline: 'Minecraft Control',
		beta: 'Beta',
		goToDashboard: 'Go to dashboard',
		logoAlt: 'MineOS logo'
	},
	login: {
		subtitle: 'Sign in to manage your servers',
		username: 'Username',
		password: 'Password',
		signIn: 'Sign in',
		signingIn: 'Signing in...',
		language: 'Language',
		errorRequired: 'Username and password are required',
		errorInvalid: 'Invalid username or password',
		errorFailed: 'Login failed. Please try again.',
		errorUnexpected: 'An unexpected error occurred'
	},
	topbar: {
		search: 'Search servers, profiles...',
		searchShort: 'Search...',
		toggleNav: 'Toggle navigation menu',
		results: 'Search results',
		filters: 'Search filters',
		all: 'All',
		servers: 'Servers',
		profiles: 'Profiles',
		recentSearches: 'Recent searches',
		startTyping: 'Start typing to search',
		noResults: 'No results found',
		recentServers: 'Recent servers',
		recentProfiles: 'Recent profiles',
		unknownUser: 'Unknown'
	},
	status: {
		running: 'Running',
		stopped: 'Stopped',
		online: 'Online',
		offline: 'Offline',
		creating: 'Creating',
		unknown: 'Unknown'
	},
	time: {
		justNow: 'Just now',
		minuteAgo: '1 minute ago',
		minutesAgo: '{n} minutes ago',
		hourAgo: '1 hour ago',
		hoursAgo: '{n} hours ago',
		yesterday: 'Yesterday',
		daysAgo: '{n} days ago'
	},
	dashboard: {
		title: 'Dashboard',
		subtitle: 'Overview of your Minecraft hosting environment',
		createServer: '+ Create Server',
		totalServers: 'Total Servers',
		running: 'Running',
		playersOnline: 'Players Online',
		serverMemory: 'Server Memory',
		diskFree: 'Disk Free',
		hostMetrics: 'Host Metrics',
		systemUptime: 'System Uptime',
		loadAverage: 'Load Average',
		freeMemory: 'Free Memory',
		diskUsage: 'Disk Usage',
		servers: 'Servers',
		viewAll: 'View all',
		loadFailed: 'Failed to load servers: {error}',
		restartRequired: 'Restart required',
		noServers: 'No servers yet',
		noServersHelp: 'Create your first Minecraft server to get started',
		createServerShort: 'Create Server',
		profiles: 'Profiles',
		profilesDesc: 'Download and manage server JARs',
		actionFailed: 'Failed to {action} the server: {error}'
	},
	servers: {
		title: 'Servers',
		subtitle: 'Manage your Minecraft servers',
		ports: 'Ports: {range}',
		create: 'Create Server',
		loadFailed: 'Failed to load servers: {error}',
		iconAlt: '{name} icon',
		profile: 'Profile: {name}',
		copyAddress: 'Copy server address',
		restartRequired: 'Restart required',
		updateAvailable: 'Update available',
		players: 'Players',
		status: 'Status',
		memory: 'Memory',
		noServers: 'No game servers yet',
		noServersHelp: 'Create your first Minecraft server to get started',
		importTitle: 'Import Servers',
		importSubtitle: 'Upload archives and unpack them in the background',
		dropTitle: 'Drag & drop an archive',
		dropHelp: '.zip, .tar.gz, or .tgz files supported',
		uploading: 'Uploading...',
		chooseFiles: 'Choose files',
		uploadingProgress: 'Uploading {current} of {total}',
		uploadCompleteTitle: 'Upload complete',
		uploadComplete: 'Uploaded {count} archive.',
		uploadCompletePlural: 'Uploaded {count} archives.',
		uploadFailed: 'Upload failed',
		importsFailed: 'Failed to load imports: {error}',
		filename: 'Filename',
		size: 'Size',
		uploaded: 'Uploaded',
		serverName: 'Server Name',
		unpack: 'Unpack',
		action: 'Action',
		importedAs: 'Imported as "{name}"',
		differentName: 'different-name',
		newServer: 'new-server',
		complete: 'Complete',
		queueing: 'Queueing...',
		reimport: 'Re-import',
		import: 'Import',
		deleteImport: 'Delete import',
		noImports: 'No imports found',
		noImportsHelp: 'Add archives to the import folder to create servers.',
		actionFailed: 'Failed to {action} the server: {error}',
		deleteConfirm: 'Are you sure you want to delete server "{name}"?',
		deleteTitle: 'Delete Server',
		deleteFailed: 'Failed to delete server: {error}',
		portConflict:
			'Import complete, but there are port conflicts:\n\n{conflicts}\n\nYou may need to change the server-port in server.properties.',
		portConflictTitle: 'Port Conflict Warning',
		importSuccess: 'Server "{name}" imported successfully from "{filename}".',
		importFinished: 'Import for "{filename}" finished.',
		importCompleteTitle: 'Import complete',
		importFailed: 'Import for "{filename}" failed.',
		importFailedTitle: 'Import failed',
		nameRequired: 'Server name is required',
		nameRequiredTitle: 'Required Field',
		importServerFailed: 'Failed to import server',
		importQueued: 'Import for "{filename}" queued. You can keep working while it unpacks.',
		importStartedTitle: 'Import started',
		deleteImportConfirm: 'Delete import file "{filename}"?',
		deleteImportTitle: 'Delete Import',
		deleteImportFailed: 'Failed to delete import',
		statusQueued: 'queued',
		statusRunning: 'running',
		statusCompleted: 'completed',
		statusFailed: 'failed'
	},
	proxies: {
		title: 'Proxies',
		pageTitle: 'Proxies | MineOS',
		subtitle:
			"Your proxies and the game servers behind them. Players join a proxy's address and hop between its servers — together, that's your network. Open one to reach its console, logs, files and plugins.",
		setup: '+ Set up a proxy'
	},
	profiles: {
		title: 'Profiles',
		subtitle: 'Manage Minecraft server jars and BuildTools builds.',
		total: 'Total',
		ready: 'Ready',
		missing: 'Missing',
		searchLabel: 'Search profiles',
		searchPlaceholder: 'Search profiles...'
	},
	settings: {
		title: 'Settings',
		subtitle: 'Configure system settings and integrations',
		uiPreferences: 'UI Preferences',
		local: 'local',
		language: 'Language',
		languageHelp: 'Choose the interface language. This choice is saved in this browser.',
		sheepTitle: 'Minecraft Sheep Pet',
		sheepHelp: 'Show the sheep companion on every page.',
		sheepToggle: 'Toggle sheep pet',
		comingSoon: 'Coming Soon',
		resetDefault: 'Reset to default',
		resetTitle: 'Clear database value and fall back to config',
		reset: 'Reset',
		clear: 'Clear',
		update: 'Update',
		configure: 'Configure',
		editing: 'Editing',
		select: 'Select...',
		notConfigured: 'Not configured',
		notSet: 'Not set',
		newSecret: 'New value (will be stored securely)',
		enterNewValue: 'Enter new value',
		newValue: 'New value',
		enterValue: 'Enter value',
		sec: 'sec',
		clearConfirm:
			'Are you sure you want to clear this setting? It will fall back to the configuration file value if one exists.',
		clearTitle: 'Clear Setting',
		saveFailed: 'Failed to save setting',
		clearFailed: 'Failed to clear setting',
		system: 'System',
		installationId: 'Installation ID',
		installationHelp:
			'Unique identifier for this MineOS installation. Used for telemetry and support.',
		copyClipboard: 'Copy to clipboard',
		sourcesTitle: 'Setting Sources',
		sourceDatabaseHelp: 'Value stored in the database (takes priority)',
		sourceConfigHelp: 'Value from environment variables or config file',
		sourceUnsetHelp: 'No value configured',
		curseforgeTitle: 'Getting a CurseForge API Key',
		curseforgeVisit: 'Visit',
		curseforgeSignIn: 'Sign in or create an account',
		curseforgeApiKeys: 'Go to "API Keys" in your account settings',
		curseforgeCreate: 'Create a new API key',
		curseforgeCopy: 'Copy the key and paste it above',
		curseforgeNote:
			'The CurseForge API key is required for searching and downloading mods and modpacks. The site works without it for vanilla server management.',
		group: {
			general: 'General',
			integrations: 'Integrations',
			notifications: 'Notifications',
			advanced: 'Advanced'
		},
		source: {
			database: 'database',
			configuration: 'configuration',
			unset: 'not set'
		}
	},
	profile: {
		title: 'User Profile',
		subtitle: 'Update your account details and password.',
		language: 'Language',
		languageHelp: 'Choose the interface language. This choice is saved in this browser.',
		account: 'Account Info',
		username: 'Username',
		role: 'Role',
		password: 'Password',
		newPassword: 'New Password',
		keepCurrent: 'Leave blank to keep current',
		confirmPassword: 'Confirm Password',
		repeatPassword: 'Repeat new password',
		save: 'Save Changes',
		updated: 'Profile updated.',
		loadFailed: 'Unable to load profile details.',
		usernameRequired: 'Username is required.',
		passwordMismatch: 'Passwords do not match.',
		updateFailed: 'Failed to update profile.'
	},
	about: {
		title: 'About MineOS',
		subtitle: 'Modern Minecraft Server Management'
	},
	shell: {
		backServers: 'Back to Servers',
		backProxies: 'Back to Proxies',
		rename: 'Rename server',
		backendName: 'Backend name:',
		players: 'Players',
		version: 'Version',
		proxy: 'Proxy',
		renameTitle: 'Rename server',
		renameHint: 'A friendly label shown in the UI. The backend name {name} never changes.',
		displayName: 'Display name',
		saving: 'Saving…'
	},
	tabs: {
		dashboard: 'Dashboard',
		overview: 'Overview',
		properties: 'Properties',
		config: 'Config',
		logs: 'Logs',
		backups: 'Backups',
		archives: 'Archives',
		files: 'Files',
		performance: 'Performance',
		worlds: 'Worlds',
		players: 'Players',
		mods: 'Mods',
		plugins: 'Plugins',
		cron: 'Cron Jobs',
		tooltip: {
			bedrockConfig: 'Bedrock servers do not use Java configuration',
			bedrockPlayers: 'Player management is not available for Bedrock servers',
			bedrockMods: 'Bedrock servers do not support Java mods',
			modsRequire: 'Mods require a modded server (Forge, Fabric, NeoForge, or Quilt)',
			bedrockPlugins: 'Bedrock servers do not support Java plugins',
			pluginsRequire: 'Plugins require a plugin server (Paper, Spigot, Purpur, or Bukkit)'
		}
	},
	notifications: {
		label: 'Notifications',
		activeTasks: 'Active Tasks',
		modpackInstall: 'Modpack Install',
		loaderInstall: '{name} Install',
		upload: 'Upload',
		uploading: 'Uploading',
		cancelUpload: 'Cancel upload',
		hideDismissed: 'Hide Dismissed',
		showDismissed: 'Show Dismissed',
		dismissAll: 'Dismiss All',
		empty: 'No notifications',
		dismiss: 'Dismiss',
		delete: 'Delete',
		dismissed: 'Dismissed',
		job: {
			import: 'Server Import',
			backup: 'Backup',
			restore: 'Restore',
			download: 'Download',
			buildtools: 'BuildTools'
		}
	},
	feedback: {
		send: 'Send Feedback',
		bug: 'Report a Bug',
		feature: 'Request Feature',
		question: 'Ask a Question'
	},
	errors: {
		eyebrow: 'ERROR {code}',
		goDashboard: 'Go to dashboard',
		goBack: 'Go back',
		serverTrouble: 'Server trouble',
		requestFailed: 'Request failed',
		serverTroubleDescription: 'Something went wrong on our side.',
		requestFailedDescription: 'We could not complete that request.',
		fallbackHint: 'Go back and try again.',
		failwhaleAlt: 'Minecraft failwhale resting on a tiny island.',
		'400': {
			title: 'Bad request',
			description: 'That request did not look right from here.',
			hint: 'Check the form values and try again.'
		},
		'401': {
			title: 'Sign in required',
			description: 'You need to authenticate before continuing.',
			hint: 'Sign in and retry the action.'
		},
		'403': {
			title: 'Access denied',
			description: 'You do not have permission to view this area.',
			hint: 'Ask an admin to grant access.'
		},
		'404': {
			title: 'Not found',
			description: 'We could not find that page or resource.',
			hint: 'Double-check the URL or go back to the dashboard.'
		},
		'409': {
			title: 'Conflict',
			description: 'Something already exists with that name.',
			hint: 'Pick a different name and try again.'
		},
		'429': {
			title: 'Too many requests',
			description: 'You are doing that a bit too quickly.',
			hint: 'Wait a moment and try again.'
		},
		'500': {
			title: 'Server error',
			description: 'The server hit an unexpected problem.',
			hint: 'Check logs or try again soon.'
		},
		'502': {
			title: 'Upstream error',
			description: 'The service upstream did not respond correctly.',
			hint: 'Try again in a moment.'
		},
		'503': {
			title: 'Service unavailable',
			description: 'The service is taking a break right now.',
			hint: 'Try again after a short wait.'
		},
		'504': {
			title: 'Gateway timeout',
			description: 'That request took too long to complete.',
			hint: 'Retry or check the server status.'
		}
	}
} as const;

type DeepString<T> = {
	[K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Messages = DeepString<typeof en>;

type Join<Prefix extends string, Key extends string> = Prefix extends '' ? Key : `${Prefix}.${Key}`;

type Leaves<T, Prefix extends string = ''> = {
	[K in keyof T & string]: T[K] extends string ? Join<Prefix, K> : Leaves<T[K], Join<Prefix, K>>;
}[keyof T & string];

export type MessageKey = Leaves<typeof en>;
