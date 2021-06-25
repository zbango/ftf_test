export interface ICommitInformation {
	message: string;
	author: string;
	avatarUrl: string;
}
export interface ICommitHistoryResponse {
	date: string;
	commits: ICommitInformation[];
}
