var bip39 = require('bip39') // for generating the seed words and turning them into the wallet seed
var phore = require('bitcoinjs-phore') // for generating keys from the wallet seed
var bitcoin = require('bitcoinjs-lib') // for HD Nodes
var bip32 = require('bip32') // for importing and exporting wallet keys

var phoreNetwork = phore.networks.phore;

const generateMnemonic = function() {
	
		var mcode = bip39.generateMnemonic() + bip39.generateMnemonic();
		return mcode

	
}

const generateSeedHex = function(mcode, password) {
	var seedHex = bip39.mnemonicToSeedHex(mcode, password);
	return seedHex
}



const generateSeed = function(mcode, password) {
	var seed = bip39.mnemonicToSeed(mcode, password);
	return seed
}


const generateHDMaster = function(seed) {
	var HDMaster = bitcoin.HDNode.fromSeedBuffer(seed, phoreNetwork);
	return HDMaster
}

const generateKeyPairFromMaster = function(HDMaster, iteration) {
	var key = HDMaster.derivePath(`m/${iteration}`)
	return key

}

const getWIFfromKeyPair = function(keyPairIteration) {
	var WIF = keyPairIteration.keyPair.toWIF();
	return WIF
}


const getXPubFromSeed = function(seed) {
	var node = bip32.fromSeed(seed)
	var xpub = node.neutered().toBase58()
	return xpub
}

const getPubKeyFromKeyPair = function(keyPairIteration) {
	var pubKey = keyPairIteration.getPublicKeyBuffer().toString('hex')
	return pubKey
}

const getAddressFromKeyPair = function(keyPairIteration) {
	var address = keyPairIteration.getAddress();
	return address
}

const generateXPriv = function(seed) {
	var node = bip32.fromSeed(seed)
	var xpriv = node.toBase58()
	return xpriv
}

const validateXpriv = function(mnemonic, password, xpriv) {
	//generate an xpriv from the words and password provided and compare against the xpriv 
	//if the same return true, if not return false
}

const encryptXpriv = function(xpriv, password) {
	//require bip38 and encrypt the xpriv with password
}

const decryptXpriv = function(xpriv, password) {
	//require bip38 and decrypt the xpriv for testing with validateXpriv
}



module.exports.generateMnemonic = generateMnemonic;
module.exports.generateSeedHex = generateSeedHex;
module.exports.generateSeed = generateSeed;
module.exports.generateHDMaster = generateHDMaster;
module.exports.generateKeyPairFromMaster = generateKeyPairFromMaster;
module.exports.getWIFfromKeyPair = getWIFfromKeyPair;
module.exports.getXPubFromSeed = getXPubFromSeed;
module.exports.getPubKeyFromKeyPair = getPubKeyFromKeyPair;
module.exports.getAddressFromKeyPair = getAddressFromKeyPair;
module.exports.generateXPriv = generateXPriv;