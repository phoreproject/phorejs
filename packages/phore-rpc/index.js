const request = require('request');

const url = 'https://rpc.phore.io/rpc';



var headers = {
    'content-type': 'application/json;'
	};

var txHex;
var params; 




var estimateFee = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"estimateFee","method":"estimatefee","params":[${params}]}`;

	var options2 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options2, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var estimatePriority = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"estimatePriority","method":"estimatepriority","params":[${params}]}`;

	var options3 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options3, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getBestBlockHash = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getBestBlockHash","method":"getbestblockhash","params":[]}`;

	var options4 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options4, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getBlock = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"txhex","method":"getblock","params":["${params}"]}`;

	var options6 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
    	auth: {
        'user': '',
        'pass': ''
    }
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options6, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getBlockHash = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"getBlockHash","method":"getblockhash","params":["${params}"]}`;

	var options7 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options7, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getBlockChainInfo = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getBlockChainInfo","method":"getblockchaininfo","params":[]}`;

	var options8 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options8, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getBlockCount = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getBlockCount","method":"getblockcount","params":[]}`;

	var options9 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options9, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getBlockHeader = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"getBlockHeader","method":"getblockheader","params":["${params}"]}`;

	var options10 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options10, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body));
		});
	});
};

var getChainTips = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getChainTips","method":"getchaintips","params":[]}`;

	var options11 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options11, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body));
		});
	});
};

var getConnectionCount = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getConnectionCount","method":"getconnectioncount","params":[]}`;

	var options12 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options12, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getDifficulty = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getDifficulty","method":"getdifficulty","params":[]}`;

	var options13 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options13, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getInfo = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getInfo","method":"getinfo","params":[]}`;

	var options14 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options14, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getMemPoolInfo = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getMemPoolInfo","method":"getmempoolinfo","params":[]}`;

	var options15 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options15, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getMiningInfo = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getMininginfo","method":"getmininginfo","params":[]}`;

	var options16 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options16, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getNetworkHashPs = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getNetworkHashPs","method":"getnetworkhashps","params":[]}`;

	var options17 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options17, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getRawMemPool = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getRawMemPool","method":"getrawmempool","params":[]}`;

	var options18 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options18, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getRawTransaction = function(txId) {

	var dataString = `{"jsonrpc":"2.0","id":"getRawTransaction","method":"getrawtransaction","params":["${txId}"]}`;

	var options19 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options19, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getTxOut = function(txId) {

	var dataString = `{"jsonrpc":"2.0","id":"getTxOut","method":"gettxout","params":["${txId}"]}`;

	var options20 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options20, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var getTxOutsetInfo = function() {

	var dataString = `{"jsonrpc":"2.0","id":"getTxOutsetInfo","method":"gettxoutsetinfo","params":[]}`;

	var options21 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options21, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var ping = function() {

	var dataString = `{"jsonrpc":"2.0","id":"ping","method":"ping","params":[]}`;

	var options22 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options22, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var masterNodeList = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"masterNodeList","method":"masternodelist","params":[]}`;

	var options5 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options5, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body));
		});
	});
};

var submitBlock = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"submitBlock","method":"submitblock","params":["${params}"]}`;

	var options23 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options23, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};

var sendRawTransaction = function(params) {

	var dataString = `{"jsonrpc":"2.0","id":"sendrawtransaction","method":"sendrawtransaction","params":["${params}"]}`;

	var options1 = {
    	url: url,
    	method: 'POST',
    	headers: headers,
    	body: dataString,
   
	};

	return new Promise((resolve, reject) => {
		var req = request(options1, (err, response, body) => {
			if(err) return reject(err, response, body);
			resolve(JSON.parse(body).result);
		});
	});
};




module.exports.sendRawTransaction = sendRawTransaction;
module.exports.estimateFee = estimateFee;
module.exports.estimatePriority = estimatePriority;
module.exports.getBestBlockHash = getBestBlockHash;
module.exports.masterNodeList = masterNodeList;
module.exports.getBlock = getBlock;
module.exports.getBlockHash = getBlockHash;
module.exports.getBlockChainInfo = getBlockChainInfo;
module.exports.getBlockCount = getBlockCount;
module.exports.getBlockHeader = getBlockHeader;
module.exports.getChainTips = getChainTips;
module.exports.getConnectionCount = getConnectionCount;
module.exports.getDifficulty = getDifficulty;
module.exports.getInfo = getInfo;
module.exports.getMemPoolInfo = getMemPoolInfo;
module.exports.getMiningInfo = getMiningInfo;
module.exports.getNetworkHashPs = getNetworkHashPs;
module.exports.getRawMemPool = getRawMemPool;
module.exports.getRawTransaction = getRawTransaction;
module.exports.getTxOut = getTxOut;
module.exports.getTxOutsetInfo = getTxOutsetInfo;
module.exports.ping = ping;
module.exports.submitBlock = submitBlock;

