const phorew = require('./') // change to require('phorew') is installed from npm

var password = 'templatePhoreW' // for salting wallet seed further
var iteration = 0 // first child keypair of HDMaster, +1 for new keypairs

var mcode = phorew.generateMnemonic()
console.log(mcode)

console.log('Seed hex: ', phorew.generateSeedHex(mcode, password))

var seed = phorew.generateSeed(mcode, password)
console.log('Seed is: ' + seed)

var HDMaster = phorew.generateHDMaster(seed)
console.log('HDMaster is: ' + JSON.stringify(HDMaster))

var firstKeyPair = phorew.generateKeyPairFromMaster(HDMaster, iteration)
console.log(firstKeyPair)

var firstWIF = phorew.getWIFfromKeyPair(firstKeyPair)
console.log('WIF is: ' + firstWIF)

var xpub = phorew.getXPubFromSeed(seed)
console.log('Xpub is: ' + xpub)

var pubKey = phorew.getPubKeyFromKeyPair(firstKeyPair)
console.log('Public key is: ' + pubKey)

var address = phorew.getAddressFromKeyPair(firstKeyPair)
console.log('Receiving Address is: ' + address)

var xpriv = phorew.generateXPriv(seed)
console.log('Xpriv is :' + xpriv)
