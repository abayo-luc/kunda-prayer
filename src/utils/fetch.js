const { VUE_APP_API_BASE_URL } = process.env;
const defaultOptions = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		Accept: 'application/json'
	}
};

class Fetch {
	constructor() {
		this.config = defaultOptions;
		this.url = '';
	}

	async request() {
		const response = await fetch(
			`${VUE_APP_API_BASE_URL}${this.url}`,
			this.config
		);
		const json = await response.json();
		switch (response.status) {
			case 200:
				return json;
			case 201:
				return json;
			default:
				throw json;
		}
	}

	async post(url, data) {
		this.config.method = 'POST';
		this.url = url;
		this.config.body = JSON.stringify(data);
		return this.request();
	}

	async put(url, data) {
		this.config.method = 'PUT';
		this.url = url;
		this.config.body = JSON.stringify(data);
		return this.request();
	}

	async get(url) {
		this.config.method = 'GET';
		this.url = url;
		this.config.body = null;
		return this.request();
	}
}

export default new Fetch();
