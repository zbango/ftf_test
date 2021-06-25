import "reflect-metadata";
import { IGitService } from "../repository/IGitService";
import { injectable } from "inversify";
import axios from "axios";
import { IGitHubCommitHistory } from "../infrastructure/IGitHubCommitHistory";
import { ICommitHistoryResponse } from "../infrastructure/ICommitHistoryResponse";
import moment from "moment";

@injectable()
export class GitService implements IGitService {
	getCommitHistory(
		owner: string,
		repo: string
	): Promise<ICommitHistoryResponse[]> {
		return new Promise<ICommitHistoryResponse[]>((resolve, reject) => {
			axios
				.get<IGitHubCommitHistory[]>(
					`https://api.github.com/repos/${owner}/${repo}/commits`
				)
				.then((response) => {
					const commits = response.data.reduce(
						(
							commits: { [name: string]: any },
							record: IGitHubCommitHistory
						) => {
							const date =
								record.commit.author.date.split("T")[0];
							commits[date] = [...(commits[date] || []), record];
							return commits;
						},
						{}
					);

					const commitsByDate: ICommitHistoryResponse[] = Object.keys(
						commits
					).map((date) => {
						return {
							date: moment(date).format("MMM Do YYYY"),
							commits: commits[date].map(
								(record: IGitHubCommitHistory) => ({
									message: record.commit.message,
									author: record.author.login,
									avatarUrl: record.author.avatar_url,
								})
							),
						};
					});
					resolve(commitsByDate);
				})
				.catch(reject);
		});
	}
}
