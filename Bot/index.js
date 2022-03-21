const Web3 = require('web3')
let web3

const main = async () => {
    let account = '0x975CE1D285B334b415bc7FC4B676f229aA904c37'
    web3 = new Web3('http://127.0.0.1:7545')
    let balance = await web3.eth.getBalance(account)

    console.log(`Balance: ${balance}`)
}

main()