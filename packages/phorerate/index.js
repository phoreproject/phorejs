const request = require('request-promise')
const _ = require('underscore')

async function getAltcoinRate (altcoin, fiatCurrency) {
  const cmcData = JSON.parse(await request(`https://api.coinmarketcap.com/v1/ticker/${altcoin}/`))
  const bitpayData = JSON.parse(await request('https://bitpay.com/rates'))

  const btcPrice = cmcData[0].price_btc

  var fiatrate = _.where(bitpayData.data, {code: fiatCurrency.toUpperCase()})[0].rate

  var fiatPrice = btcPrice * fiatrate

  return fiatPrice
}

async function getPhoreRate (fiatCurrency) {
  return getAltcoinRate('phore', fiatCurrency)
}

async function getExchangeRate (altcoin, inTermsOf) {
  let altcoinRate = await getAltcoinRate(altcoin, 'BTC')
  let inTermsOfRate = await getAltcoinRate(inTermsOf, 'BTC')
  return altcoinRate / inTermsOfRate
}

module.exports = {
  getAltcoinRate,
  getPhoreRate,
  getExchangeRate
}
