require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace seek surge trip film birth spice proof hunt brave equal gauge'; 
let testAccounts = [
"0x63c36d14d4d4faa07ae53363a1c031be5f0d28c362f38a841022daee80b6a4da",
"0x216b8b1aa462b22ab1946b1693d819d41130489edae6f266dcdee9c8fa2e95b2",
"0x887faa2e95500b57b4c1e0789cd7f05bfede48b8abb940419cc9b258cceaa030",
"0x48ce5765db19f9e5b4292765aee714b6db80a0c9792b2929520b064fc8881f46",
"0xf890a59fab977927956aa1edb63cd102baa5614ad4ed22eb7485e14b9aebd816",
"0x7dee80cd5b8097ff37e81fa438c2bd94efa92aa50bcfe98dd4a618673940f1ae",
"0x29a8bcf01cb356d5d0f6e773a03eb806fac232d084555b60acd4d01a4ac0d926",
"0xb4c6a5f7d74a5b2ede4594028a9437c33b5284f57e16e28a31bb8e64451b9e9a",
"0xe3ecf5fd2aced30b4425cabae8d747ee43805a3c38966733ea383d7e16b80597",
"0x21a6b55aeae34914fa3e11f568d774a45f1a598af3e9d8d85a589c4f7aa7d5a6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

