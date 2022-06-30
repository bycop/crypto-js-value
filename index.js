const axios = require('axios');

module.exports = {
	price: function (crypto_symbol, base_currency) {
		return new Promise(function (res, rej) {
			axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${crypto_symbol.toUpperCase()}${base_currency.toUpperCase()}`, {
				timeout: 5000
			}).then(function (response) {
				data = response.data;
				res(data.price ?? undefined)
			}).catch(function (error) {
				rej(error);
			});
		});
	}
}
