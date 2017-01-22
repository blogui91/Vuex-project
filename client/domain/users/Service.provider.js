import Service from 'providers/Service.provider';
class User extends Service {
	constructor() {
		super();
		//this.service.config.prefix = '/admin/';
		this.service.config.origin = 'https://jsonplaceholder.typicode.com';
		// this.config.endpointUrl = 'store-requests/';
	}
}

export default User;