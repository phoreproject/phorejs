# phorejs
Phore Javascript Library. This is a work in progress. 

## Install

```
git clone https://github.com/phoreproject/phorejs.git
cd phorejs
npm install
```

## Create a Phore Private Key (WIF and Hex) and Public Key Address

```
node app.js
```
This will log out the following to the console: 
```
console.log("Private Key (Wallet Import Format): " + ck.privateWif)
console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
console.log("Address: " + ck.publicAddress) // This is your pubKey for below
```

## Generate a QR Code for a Phore Public Key Address

```
node qr.js
```
This will log out a QR Code in data format to the console. Or replace the value of pubKey in the file qr.js with the one you just generated to get a QR code for that address.

```
var qr = require('qr-encode')

var pubKey = "PF7wMvtSphVsP5noV6bHF6EtgZnxCnzbYo"; // Replace This with your pubKey

var dataURI = qr(pubKey, {type: 6, size: 6, level: 'Q'})
console.log(dataURI)

//If using in browsers:
var img = new Image()
img.src = dataURI
document.body.appendChild(img)

```





