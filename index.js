const request = require('request');


module.exports = {
	test: function () {
		console.log("This is a test.");
	},

	price: function (crypto_symbol, base_currency) {
		let promise = new Promise(function(res, rej){
			let options = {
				url: `https://api.binance.com/api/v3/ticker/price?symbol=${crypto_symbol.toUpperCase()}${base_currency.toUpperCase()}`,
				timeout: 5000
			};
			let data
			request(options, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					try {
						data = JSON.parse(body);
						res(data.price ? data.price : undefined)
					}
					catch (e) {
						rej("Error")
					}
				}
				else
					res("Invalid")
			})
		})
		return promise
	}
}
