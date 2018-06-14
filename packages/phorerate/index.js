const request = require('request');
const _ = require('underscore');

var requestAsync = function(url) {
	return new Promise((resolve, reject) => {
		var req = request(url, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body));
		});
	});
};

const urls = [
	'https://api.coinmarketcap.com/v1/ticker/phore/',
	'https://bitpay.com/rates'
	];


var getPhoreRate = async function(fc) {

	try {
		var data = await Promise.all(urls.map(requestAsync));
	} catch (err) {
		console.error(err);
	}
	var fc;
	var phorebtcbody = data[0][0].price_btc;
	
	var fiatrates = data[1].data;
	var fiatfiltered = _.where(fiatrates, {code: fc});
	
	var fiatrate = fiatfiltered[0].rate;
	
	var phore2fiatrate = phorebtcbody * fiatrate;
	
	return phore2fiatrate
	

}

var getAltRate = async function(fc, ac) {

	var ac;

	const urls1 = [
	`https://api.coinmarketcap.com/v1/ticker/${ac}/`,
	'https://bitpay.com/rates'
	];

	try {
		var data = await Promise.all(urls1.map(requestAsync));
	} catch (err) {
		console.error(err);
	}
	var fc;
	
	var altbtcbody = data[0][0].price_btc;
	
	var fiatrates = data[1].data;
	var fiatfiltered = _.where(fiatrates, {code: fc});
	
	var fiatrate = fiatfiltered[0].rate;
	
	var alt2fiatrate = altbtcbody * fiatrate;
	
	return alt2fiatrate


}

var getPhore2AltRate = async function(ac) {

	var ac;

	const urls2 = [
	`https://api.coinmarketcap.com/v1/ticker/${ac}/`,
	'https://api.coinmarketcap.com/v1/ticker/phore/'
	];

	try {
		var data = await Promise.all(urls2.map(requestAsync));
	} catch (err) {
		console.error(err);
	}
	
	var ac;
	var altbtcbody1 = data[0][0].price_btc;
	
	var phorebtcbody1 = data[1][0].price_btc;
	
	var phore2alt = phorebtcbody1 / altbtcbody1;
	
	return phore2alt
	

}

var getAlt2AltRate = async function(ac1, ac2) {

	var ac1, ac2;
	

	const urls3 = [
	`https://api.coinmarketcap.com/v1/ticker/${ac1}/`,
	`https://api.coinmarketcap.com/v1/ticker/${ac2}/`
	];

	try {
		var data = await Promise.all(urls3.map(requestAsync));
	} catch (err) {
		console.error(err);
	}
	
	
	var altbtcbody2 = data[0][0].price_btc;
	
	var altbtcbody3 = data[1][0].price_btc;
	
	var alt2alt = altbtcbody2 / altbtcbody3;
	
	return alt2alt
	

}

module.exports.getPhoreRate = getPhoreRate;
module.exports.getAltRate = getAltRate;
module.exports.getPhore2AltRate = getPhore2AltRate;
module.exports.getAlt2AltRate = getAlt2AltRate;

