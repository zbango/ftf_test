import { Container } from "inversify";
import { IGitService } from "../repository/IGitService";
import { GitService } from "../services/GitService";
import IDENTIFIERS from "../constant/Identifiers";

const CONTAINER: Container = new Container();

CONTAINER.bind<IGitService>(IDENTIFIERS.IGitService).to(GitService);

export default CONTAINER;
