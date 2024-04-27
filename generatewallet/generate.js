const web3 = require("@solana/web3.js");

const keypair = web3.Keypair.generate()

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);