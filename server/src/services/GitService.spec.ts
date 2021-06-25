import { expect, use } from "chai";
import { IGitService } from "../repository/IGitService";
import CONTAINER from "../infrastructure/Container";
import IDENTIFIERS from "../constant/Identifiers";
import sinonChai = require("sinon-chai");
import { ICommitHistoryResponse } from "../infrastructure/ICommitHistoryResponse";
import { createSandbox, SinonSandbox, SinonStub } from "sinon";
import axios from "axios";

use(sinonChai);

describe("GitService", () => {
	let service: IGitService;
	let box: SinonSandbox;

	beforeEach(async () => {
		box = createSandbox();
		CONTAINER.snapshot();
		service = CONTAINER.get(IDENTIFIERS.IGitService);
	});

	afterEach(() => {
		box.restore();
		CONTAINER.restore();
	});

	it("getCommitHistory should request commit history and returns success response", async () => {
		const expectedResponse = [
			{
				sha: "dc016fc9f0ca3999bfbac369feefc7e6e5ac71bf",
				node_id:
					"MDY6Q29tbWl0Mzc5NzgyNTgzOmRjMDE2ZmM5ZjBjYTM5OTliZmJhYzM2OWZlZWZjN2U2ZTVhYzcxYmY=",
				commit: {
					author: {
						name: "zbango",
						email: "steven.tabango@gmail.com",
						date: "2021-06-24T22:15:36Z",
					},
					committer: {
						name: "zbango",
						email: "steven.tabango@gmail.com",
						date: "2021-06-24T22:15:36Z",
					},
					message: "Improve store handle",
					tree: {
						sha: "c364a5c4d2898b944ecb18340fd5e03f2b1af4e8",
						url: "https://api.github.com/repos/zbango/ftf_test/git/trees/c364a5c4d2898b944ecb18340fd5e03f2b1af4e8",
					},
					url: "https://api.github.com/repos/zbango/ftf_test/git/commits/dc016fc9f0ca3999bfbac369feefc7e6e5ac71bf",
					comment_count: 0,
					verification: {
						verified: false,
						reason: "unsigned",
						signature: null,
						payload: null,
					},
				},
				url: "https://api.github.com/repos/zbango/ftf_test/commits/dc016fc9f0ca3999bfbac369feefc7e6e5ac71bf",
				html_url:
					"https://github.com/zbango/ftf_test/commit/dc016fc9f0ca3999bfbac369feefc7e6e5ac71bf",
				comments_url:
					"https://api.github.com/repos/zbango/ftf_test/commits/dc016fc9f0ca3999bfbac369feefc7e6e5ac71bf/comments",
				author: {
					login: "zbango",
					id: 9682684,
					node_id: "MDQ6VXNlcjk2ODI2ODQ=",
					avatar_url:
						"https://avatars.githubusercontent.com/u/9682684?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/zbango",
					html_url: "https://github.com/zbango",
					followers_url:
						"https://api.github.com/users/zbango/followers",
					following_url:
						"https://api.github.com/users/zbango/following{/other_user}",
					gists_url:
						"https://api.github.com/users/zbango/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/zbango/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/zbango/subscriptions",
					organizations_url:
						"https://api.github.com/users/zbango/orgs",
					repos_url: "https://api.github.com/users/zbango/repos",
					events_url:
						"https://api.github.com/users/zbango/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/zbango/received_events",
					type: "User",
					site_admin: false,
				},
				committer: {
					login: "zbango",
					id: 9682684,
					node_id: "MDQ6VXNlcjk2ODI2ODQ=",
					avatar_url:
						"https://avatars.githubusercontent.com/u/9682684?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/zbango",
					html_url: "https://github.com/zbango",
					followers_url:
						"https://api.github.com/users/zbango/followers",
					following_url:
						"https://api.github.com/users/zbango/following{/other_user}",
					gists_url:
						"https://api.github.com/users/zbango/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/zbango/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/zbango/subscriptions",
					organizations_url:
						"https://api.github.com/users/zbango/orgs",
					repos_url: "https://api.github.com/users/zbango/repos",
					events_url:
						"https://api.github.com/users/zbango/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/zbango/received_events",
					type: "User",
					site_admin: false,
				},
				parents: [
					{
						sha: "1a434528ce1cf1758eb645d012c16074ac44be99",
						url: "https://api.github.com/repos/zbango/ftf_test/commits/1a434528ce1cf1758eb645d012c16074ac44be99",
						html_url:
							"https://github.com/zbango/ftf_test/commit/1a434528ce1cf1758eb645d012c16074ac44be99",
					},
				],
			},
		];
		box.stub(axios, "get").resolves(
			Promise.resolve({ data: expectedResponse })
		);

		const rs: ICommitHistoryResponse[] = await service.getCommitHistory(
			"owner",
			"repo"
		);

		expect(rs).to.be.eqls([
			{
				date: "Jun 24th 2021",
				commits: [
					{
						message: "Improve store handle",
						author: "zbango",
						avatarUrl:
							"https://avatars.githubusercontent.com/u/9682684?v=4",
					},
				],
			},
		]);
	});
});
