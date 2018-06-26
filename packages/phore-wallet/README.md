# Phore-Wallet

Simplified wallet commands for Phore. 

## Installation

Using npm: 

```
npm install phore-wallet --save

```

In Node.js:

``` javascript
const phorew = require('phore-wallet');

var password = ""; // optional password for wallet seed
var iteration = 0; //first child keypair of HDMaster, +1 for new keypairs

var mcode = phorew.generateMnemonic(); // 24 words instead of 12
console.log(mcode);

var seed = phorew.generateSeed(mcode, password);
console.log('Seed is: ' + seed)

var HDMaster = phorew.generateHDMaster(seed);
console.log('HDMaster is: ' + JSON.stringify(HDMaster))

var firstKeyPair = phorew.generateKeyPairFromMaster(HDMaster, iteration);

var firstWIF = phorew.getWIFfromKeyPair(firstKeyPair);
console.log('WIF is: ' + firstWIF)

var address = phorew.getAddressFromKeyPair(firstKeyPair);
console.log('Receiving Address is: ' + address);

var xpub = phorew.getXPubFromSeed(seed);
console.log('Xpub is: ' + xpub);


```