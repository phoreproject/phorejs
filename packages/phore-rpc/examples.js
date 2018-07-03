const PhoreRPC = require('./') // change this to require('phore-rpc') if installed through npm

const phorerpc = new PhoreRPC()

phorerpc.estimatefee(5).then(console.log) // input a number (e.g. 5) of blocks within which the transaction needs to be included - returns an estimate of the fee per kilobyte for the transaction

phorerpc.estimatepriority(5).then(console.log) // input a number (e.g. 5) of blocks the transaction may wait before being included as a free high-priority transaction - returns an estimate of the priority that a transaction needs

phorerpc.getbestblockhash().then(console.log) // no parameter - returns a hash from the tip of the best block chain

phorerpc.getblock(phorerpc.getbestblockhash()).then(function (d) {
  console.log(d) // input the hash of a block - returns block details
})

phorerpc.getblockhash(100).then(console.log) // input a number that represents the block height index of the block to get back its hash - an index of 0 returns the genesis block, which has a hash of '2b1a0f66712aad59ad283662d5b919415a25921ce89511d73019107e380485bf'

phorerpc.getblockchaininfo().then(console.log) // no parameter - returns an object with network info such as blocks, headers, bestblockhash

phorerpc.getblockcount().then(console.log) // no parameter - returns current blocks height (i.e. # of blocks)

phorerpc.getblockheader(phorerpc.getbestblockhash()).then(console.log) // input a block hash - returns just the header info for that block

phorerpc.getchaintips().then(console.log) // no parameter - returns an array of blocks with their height, hash, branchlen and status

phorerpc.getdifficulty().then(console.log) // no parameter - returns a difficulty score as multiple of the minimum difficulty

phorerpc.getinfo().then(console.log) // no parameter - returns information about the node and the network

phorerpc.getmempoolinfo().then(console.log) // no parameter - returns information about the current state of the mempool

phorerpc.getmininginfo().then(console.log) // no parameter - returns info about the network

phorerpc.getnetworkhashps().then(console.log) // no parameter - returns the estimated current or historical network hashes per second based on the last n blocks

phorerpc.getrawmempool().then(console.log) // no parameter - returns an array of info about what is in the Mem Pool or an empty array if nothing is in the Mem Pool

phorerpc.getrawtransaction('bf03a117f6f61061bb5926111aba083f4a41fbaa3d140e030c2a65f938cc4173').then(console.log) // input a txId (transaction id) - returns details of that transaction

phorerpc.gettxout('bf03a117f6f61061bb5926111aba083f4a41fbaa3d140e030c2a65f938cc4173').then(console.log) // input a txId (transaction id) - returns the value of any unspent UTXO's

phorerpc.gettxoutsetinfo().then(console.log) // no parameter - returns statistics about the unspent transaction output (UTXO) set

phorerpc.ping().then(console.log) // no parameter - returns null

phorerpc.submitblock('D34DB33F').then(console.log) // input the new block in a serialized hex format and this submits it to the network and returns result

phorerpc.masternode('list').then(console.log) // no parameter - returns a list of master nodes

phorerpc.sendrawtransaction('D34DB33F').then(console.log) // input the txHex obtained from creating a transaction using bitcoinjs-phore - broadcasts the transaction to the network and returns result
