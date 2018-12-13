const RestClass = require('../../rest/rest');

const apiEndpoint = 'https://blockchain.info/';


module.exports.getCryptoCurrency = (event, context, callback) => {
	const response = {};
	const cryptoCurrencyTickerRest = new RestClass(apiEndpoint, 'ticker', null, false);

	cryptoCurrencyTickerRest.request('GET', true, null)
		.then((data) => {
			response.bitcoinValues = data;
			callback(null, cryptoCurrencyTickerRest.response(200, response));
		})
		.catch((err) => {
			callback(null, cryptoCurrencyTickerRest.response(400, err));
		});
};

module.exports.getCryptoCurrencyBitcoinValue = (event, context, callback) => {
	const params = event.queryStringParameters;
	const response = {};
	const cryptoCurrencyTickerRest = new RestClass(apiEndpoint, 'tobtc', params, false);

	cryptoCurrencyTickerRest.request('GET', true, null)
		.then((data) => {
			response.bitcoinValue = data;
			callback(null, cryptoCurrencyTickerRest.response(200, response));
		})
		.catch((err) => {
			callback(null, cryptoCurrencyTickerRest.response(400, err));
		});
};
