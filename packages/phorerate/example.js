const phorerate = require('./') // change to require('phorerate') if you installed via npm

phorerate.getPhoreRate('USD').then(console.log) // returns the current rate of Phore to USD --> replace with another currency code from bitpay.com/rates to get that rate

phorerate.getAltcoinRate('lisk', 'USD').then(console.log) // returns the current rate of Lisk to USD --> replace lisk with any other Altcoin listed on Coinmarket and replace USD with any other currency code from bitpay.com/rates to get those rates

phorerate.getExchangeRate('lisk', 'qtum').then(console.log) // returns the rate of Lisk to Qtum --> replace either of those Altcoins with any Altcoin listed on Coinmarket to get different rate combinations
