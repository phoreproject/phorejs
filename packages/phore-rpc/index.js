const request = require('request-promise')

const DEFAULT_URL = 'https://rpc.phore.io/rpc'
class PhoreRPC {
  constructor (url) {
    if (!url) {
      this.url = DEFAULT_URL
    } else {
      this.url = url
    }
    this.nonce = 0
  }

  /**
   * Sends a basic JSON RPC request to the server
   * @param {string} method
   * @param {Array<string>} params
   */
  async sendRequest (method, params) {
    const payload = {
      jsonrpc: '2.0',
      id: this.nonce++,
      method: method,
      params: params
    }
    let response = await request.post(this.url, {
      json: true,
      body: payload
    })
    return response.result
  }

  /**
   * Meta method to add methods to add new
   * functions to Phore RPC
   * @param {string} methodName
   */
  static addMethod (methodName) {
    PhoreRPC.prototype[methodName] = async function () {
      return this.sendRequest(methodName, Array.from(arguments))
    }
  }
}

PhoreRPC.addMethod('estimatefee')
PhoreRPC.addMethod('estimatepriority')
PhoreRPC.addMethod('getbestblockhash')
PhoreRPC.addMethod('getblock')
PhoreRPC.addMethod('getblockhash')
PhoreRPC.addMethod('getblockchaininfo')
PhoreRPC.addMethod('getblockcount')
PhoreRPC.addMethod('getblockheader')
PhoreRPC.addMethod('getchaintips')
PhoreRPC.addMethod('getdifficulty')
PhoreRPC.addMethod('getinfo')
PhoreRPC.addMethod('getmempoolinfo')
PhoreRPC.addMethod('getmininginfo')
PhoreRPC.addMethod('getnetworkhashps')
PhoreRPC.addMethod('getrawmempool')
PhoreRPC.addMethod('getrawtransaction')
PhoreRPC.addMethod('gettxout')
PhoreRPC.addMethod('gettxoutsetinfo')
PhoreRPC.addMethod('ping')
PhoreRPC.addMethod('masternode')
PhoreRPC.addMethod('submitblock')
PhoreRPC.addMethod('sendrawtransaction')

module.exports = PhoreRPC
