var CoinKey = require('coinkey')    //1.0.0
var coinInfo = require('coininfo')  //0.1.0

var phoreInfo = coinInfo('PHR').versions

var ck = new CoinKey.createRandom(phoreInfo)

console.log("Private Key (Wallet Import Format): " + ck.privateWif)
console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
console.log("Address: " + ck.publicAddress)