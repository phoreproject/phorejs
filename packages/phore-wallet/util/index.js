const bip39 = require('bip39') // for generating the seed words and turning them into the wallet seed
const phore = require('bitcoinjs-phore') // for generating keys from the wallet seed
const bitcoin = require('bitcoinjs-lib') // for HD Nodes
const bip32 = require('bip32') // for importing and exporting wallet keys

const Util = {}

Util.generateMnemonic = function () {
  return bip39.generateMnemonic() + bip39.generateMnemonic()
}

Util.generateSeedHex = function (mcode, password) {
  return bip39.mnemonicToSeedHex(mcode, password)
}

Util.generateSeed = function (mcode, password) {
  return bip39.mnemonicToSeed(mcode, password)
}

Util.generateHDMaster = function (seed) {
  return bitcoin.HDNode.fromSeedBuffer(seed, phore.networks.phore)
}

Util.generateKeyPairFromMaster = function (HDMaster, iteration) {
  return HDMaster.derivePath(`m/${iteration}`)
}

Util.getWIFfromKeyPair = function (keyPairIteration) {
  return keyPairIteration.keyPair.toWIF()
}

Util.getXPubFromSeed = function (seed) {
  return bip32.fromSeed(seed).neutered().toBase58()
}

Util.getPubKeyFromKeyPair = function (keyPairIteration) {
  return keyPairIteration.getPublicKeyBuffer().toString('hex')
}

Util.getAddressFromKeyPair = function (keyPairIteration) {
  return keyPairIteration.getAddress()
}

Util.generateXPriv = function (seed) {
  return bip32.fromSeed(seed).toBase58()
}

Util.validateXpriv = function (mnemonic, password, xpriv) {
  // generate an xpriv from the words and password provided and compare against the xpriv
  // if the same return true, if not return false
}

Util.encryptXpriv = function (xpriv, password) {
  // require bip38 and encrypt the xpriv with password
}

Util.decryptXpriv = function (xpriv, password) {
  // require bip38 and decrypt the xpriv for testing with validateXpriv
}

module.exports = Util
