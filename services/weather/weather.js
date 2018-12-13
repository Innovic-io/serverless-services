const RestClass = require('../../rest/rest');

const apiEndpoint = 'https://api.openweathermap.org/data/2.5/';


module.exports.getWeather = (event, context, callback) => {
	const params = event.queryStringParameters;
	const response = {};
	const weatherRest = new RestClass(apiEndpoint, 'weather', params, false);

	weatherRest.request('GET', true, null)
		.then((data) => {
			response.weather = data;
			callback(null, weatherRest.response(200, response));
		})
		.catch((err) => {
			callback(null, weatherRest.response(400, err));
		});
};

module.exports.getWeatherForecast = (event, context, callback) => {
	const params = event.queryStringParameters;
	const response = {};
	const weatherForecastRest = new RestClass(apiEndpoint, 'forecast', params, false);

	weatherForecastRest.request('GET', true, null)
		.then((data) => {
			response.forecast = data;
			callback(null, weatherForecastRest.response(200, response));
		})
		.catch((err) => {
			callback(null, weatherForecastRest.response(400, err));
		});
};

module.exports.getWeatherForecastDaily = (event, context, callback) => {
	const params = event.queryStringParameters;
	const weatherForecastDailyRest = new RestClass(apiEndpoint, 'forecast/daily', params, false);

	weatherForecastDailyRest.request('GET', true, null)
		.then((data) => {
			callback(null, weatherForecastDailyRest.response(200, data));
		})
		.catch((err) => {
			callback(null, weatherForecastDailyRest.response(400, err));
		});
};
