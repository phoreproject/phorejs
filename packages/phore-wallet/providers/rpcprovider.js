import PhoreRPC from 'phore-rpc'
import phore from 'bitcoinjs-phore'

class RPCProvider {
  constructor (url) {
    this._rpc = new PhoreRPC(url)
  }

  async getTransaction (txid) {
    let tx = await this._rpc.getrawtransaction(txid)
    return phore.Transaction.fromHex(tx)
  }

  async getAllTransactionsForAddress (address) {
    let max = 10
    let currentOffset = 0
    let allTransactions = []
    let shouldContinue = true
    while (shouldContinue) {
      let txs = await this._rpc.searchrawtransactions(address, 0, currentOffset, max)
      if (txs.length === max) {
        currentOffset += max
        max = Math.min(max * 2, 100)
      } else {
        shouldContinue = false
      }
      allTransactions = allTransactions.concat(txs)
    }
    return allTransactions.map(phore.Transaction.fromHex)
  }
}

module.exports = RPCProvider
