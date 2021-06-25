export interface IGitHubCommitHistory {
	author: {
		login: string;
		avatar_url: string;
	};
	commit: {
		author: {
			date: string;
		};
		message: string;
	};
}
