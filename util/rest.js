/**
 * Response wrapper
 *
 * @param {int} status
 * @param {object} data
 * @throws {error} .
 * @returns {object} response
 */
module.exports.response = (status, data) => {
	if (typeof (status) !== 'number') status = parseInt(status, 10); // eslint-disable-line no-param-reassign
	return {
		statusCode: status,
		headers: {
			'Access-Control-Allow-Origin': '*', // Required for CORS support to work
			'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
		},
		body: JSON.stringify({ data }),
		isBase64Encoded: false,
	};
};
