/* global describe, it, before */

const assert = require('assert')
const RPCProvider = require('../providers/rpcprovider')
const phore = require('bitcoinjs-phore')

describe('RPCProvider', function () {
  const rpc = new RPCProvider()

  describe('#getTransaction()', (done) => {
    let transaction
    before((done) => {
      rpc.getTransaction('cad23528e86cbdf56475c0a7f93ecbfccfea106a8270e7e48733a3320bf411ce')
        .then((tx) => {
          transaction = tx
          done()
        })
    })
    it('should return a transaction object', function () {
      assert.ok(transaction instanceof phore.Transaction)
    })
    it('should deserialize the transaction version', function () {
      assert.ok(transaction.version > 0)
    })
    it('should deserialize the transaction inputs and ouputs', function () {
      assert.ok(transaction.ins.length > 0)
      assert.ok(transaction.outs.length > 0)
    })
  })

  describe('#getAllTransactionsForAddress()', (done) => {
    let transactions
    before((done) => {
      rpc.getAllTransactionsForAddress('P9EyXMHaBnfcFAYK3HdwzL51AEJeM2aD8G')
        .then((tx) => {
          transactions = tx
          done()
        })
    })
    it('should return transaction objects', function () {
      assert.ok(transactions[0] instanceof phore.Transaction)
    })
    it('should deserialize the transaction version', function () {
      assert.ok(transactions[0].version > 0)
    })
    it('should deserialize the transaction inputs and ouputs', function () {
      assert.ok(transactions[0].ins.length > 0)
      assert.ok(transactions[0].outs.length > 0)
    })
    it('should be able to process a large number of transactions', function () {
      assert.ok(transactions.length > 500)
    })
  })
})
