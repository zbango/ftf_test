import * as express from "express";
import {
	interfaces,
	controller,
	httpGet,
	request,
	response,
	requestParam,
} from "inversify-express-utils";
import { IGitService } from "../repository/IGitService";
import { inject } from "inversify";
import IDENTIFIERS from "../constant/Identifiers";
import { get } from "lodash";

@controller("/commits")
export class GitController implements interfaces.Controller {
	private readonly _gitService: IGitService;

	constructor(@inject(IDENTIFIERS.IGitService) gitService: IGitService) {
		this._gitService = gitService;
	}

	@httpGet("/:owner/:repo")
	public async index(
		@requestParam("owner") owner: string,
		@requestParam("repo") repo: string,
		@request() req: express.Request,
		@response() res: express.Response
	) {
		try {
			const commitHistory = await this._gitService.getCommitHistory(
				owner,
				repo
			);
 
			res.status(200).json(commitHistory);
		} catch (err) {
			res.status(400).json({
				msg: get(err, "response.data.message", "Not found"),
			});
		}
	}
}
