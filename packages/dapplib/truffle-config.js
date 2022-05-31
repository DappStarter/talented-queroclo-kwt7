require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind concert grace nature sugar suffer'; 
let testAccounts = [
"0xc2862f5c1dc26d38f9499e6a7b91777663c6c55769c692c805c20faf82b07e65",
"0x655edd17c36499431719b482cfccba9f71a46b179bde79d58d8d5da60ab19357",
"0xf68c91cb4f914b68ef6ebcd77b27e64564986553d6bca9d04cf8ed32509fe592",
"0x05f652682d6810af3da25d9b25153394ecc1e5266120947ec875739a2f011380",
"0xdc9012b27176bfcfd4231f6e9e05db39f2d71d7684f0b3a914e58b322119833c",
"0x8cbbf1933b3318d548cccfdf5fe397af43a371c3932509965b37766b876bff18",
"0x8b30ab6ce1d6ed5d0695516108886daf7156e9e162d8f08bc899bd6e15b9d187",
"0x334803836ed161334da57417598328788859eb6abbb3b473b9025a4729e79b68",
"0xa0278ac2b63f55e22a03aa7f8f68906d36c363d592a6f1571448ceb97c9df79f",
"0x4060413edb218e1ca6ca6f66ecc4295ee9184e0192043d7fea2a0ed7984d2a3b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


