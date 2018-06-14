# Installation

Using npm: 

```
npm install phorerate --save

```

In Node.js:

```
const phorerate = require('phorerate');

phorerate.getPhoreRate('USD').then(console.log) // returns the current rate of Phore to USD --> replace with another currency code from bitpay.com/rates to get that rate

phorerate.getPhoreRate('EUR').then(function(d){
	console.log('The Phore to Euro rate is: ' + d)
}) //same thing as above, this time with EUR and written more expressively

phorerate.getAltRate('USD', 'lisk').then(console.log) //returns the current rate of Lisk to USD --> replace lisk with any other Altcoin listed on Coinmarket and replace USD with any other currency code from bitpay.com/rates to get those rates

phorerate.getPhore2AltRate('lisk').then(console.log) //returns the rate of Phore to Lisk --> replace list with any Altcoln listed on Coinmarket to get that rate

phorerate.getAlt2AltRate('lisk', 'qtum').then(console.log) // returns the rate of Lisk to Qtum --> replace either of those Altcoins with any Altcoin listed on Coinmarket to get different rate combinations

```

