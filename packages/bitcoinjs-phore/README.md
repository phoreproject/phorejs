# Bitcoinjs-Phore
This is essentially a fork of bitcoinjs-lib with a change to the network.js file to add Phore network parameters. 

It provides base functionality in javascript for operations such as creating and receiving Phore transactions, and generating secure Phore keys.  



## Installation
``` bash
npm install bitcoinjs-phore
```

## Setup
### Node.js
``` javascript
var phore = require('bitcoinjs-phore')
```

### Creating a transaction

``` javascript

var phore = require('bitcoinjs-phore')

let phorenet = phore.networks.phore;

let txb = new phore.TransactionBuilder(phorenet);

let txId = ""; //insert the txId to use as Input to the Transaction

let outn = 1; //or whatever outn to be used as Input to the Transaciton

let rcv = ""; //insert the receiving address the output is being "sent" to

let amt = 100000000; //or whatever amount in phore-satoshis is being output in this transaction

//Input

txb.addInput(txId, outn);

//Output

txb.addOutput(rcv, amt);

//Sign the transaction

let WIF = ""; //insert the WIF of the private key being used to sign the transaction

let keypairSpend = phore.ECPair.fromWIF(WIF, phorenet);

txb.sign(0, keypairSpend);

let tx = txb.build();

let txHex = tx.toHex();

console.log(txHex) // logs out the hex of the transaction --> the hex (txHex) is what you need to broadcast the transaction to the Phore newtork using the Phore-RPC package


```








## LICENSE [MIT](LICENSE)
