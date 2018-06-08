var qr = require('qr-encode')

var pubKey = "PF7wMvtSphVsP5noV6bHF6EtgZnxCnzbYo";

var dataURI = qr(pubKey, {type: 6, size: 6, level: 'Q'})
console.log(dataURI)

//If using in browsers:
// var img = new Image()
// img.src = dataURI
// document.body.appendChild(img)