import { ICommitHistoryResponse } from "../infrastructure/ICommitHistoryResponse";

export interface IGitService {
	getCommitHistory(owner: string, repo: string): Promise<ICommitHistoryResponse[]>;
}
