import { Connection, PublicKey, clusterApiUrl , LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('J2aZ43z8dDBMZaMXyWiZUCLKoPgeNJHUyQSEJEML4WZe');
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balance} ${balanceInSol} SOL`); 
console.log(`✅ Finished!`)