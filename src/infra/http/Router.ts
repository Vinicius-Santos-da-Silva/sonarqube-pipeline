import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import Http from "./Http";

export default class Router {

	constructor (readonly http: Http, readonly repositoryFactory: RepositoryFactory) {
	}

	init () {
		this.http.route("get", "/", async (params: any, body: any) => {
			return {message: "Ok"};
		});
	}
}
