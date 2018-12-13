const rp = require('request-promise');
const querystring = require('querystring');

class Rest {
	/** Constructs REST options with the API URL
	 * and credentials for that org
	 */
	constructor(apiEndpoint, endpoint, params) {
		const stringifiedParams = querystring.stringify(params);
		const newParams = params ? `?${stringifiedParams}` : '';
		this.url = `${apiEndpoint + endpoint}${newParams}`;
	}

	/**
	 * Request Header Options for endpoint
	 *
	 * @param {JSON} data
	 * @throws {error} .
	 * @returns {object}
	 */
	request(method, json, data) {
		const accepted = ['GET', 'POST', 'PUT', 'DELETE'];
		if (accepted.indexOf(method) < 0) throw new Error('Your request method is not an accepted request method');
		if (json === null) json = true; // eslint-disable-line no-param-reassign

		const options = {
			uri: this.url,
			json,
			method,
		/* auth: {
				user: process.env.SERVICE_USER,
				pass: process.env.SERVICE_PASS,
			}, */
		};
		if ((data !== null) && method !== 'GET') {
			options.body = data;
		}

		console.info(`Sending request to ${this.url}`);
		return rp(options)
			.then(body => ((typeof (body) === 'object') ? body : JSON.parse(body)))
			.catch((err) => {
				console.error(err);
				return err;
			});
	}

	/**
   * Response wrapper
   *
   * @param {int} status
   * @param {object} data
   * @throws {error} .
   * @returns {object} response
   */
	response(status, data) {
		if (typeof (status) !== 'number') status = parseInt(status, 10); // eslint-disable-line no-param-reassign
		const res = {
			statusCode: status,
			headers: {
				'Access-Control-Allow-Origin': '*', // Required for CORS support to work
				'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
			},
			body: JSON.stringify(data),
			isBase64Encoded: false,
		};
		return res;
	}
}

module.exports = Rest;
