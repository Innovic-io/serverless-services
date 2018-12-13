const RestClass = require('../../rest/rest');

module.exports.getIP = (event, context, callback) => {
	const apiEndpoint = 'https://api.ipify.org?format=json';
	const ipRest = new RestClass(apiEndpoint, '', null, false);

	ipRest.request('GET', true, null)
		.then((data) => {
			callback(null, ipRest.response(200, data));
		})
		.catch((err) => {
			callback(null, ipRest.response(400, err));
		});
};
