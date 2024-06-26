  import { PublicKey , Connection , clusterApiUrl , Transaction ,  SystemProgram , sendAndConfirmTransaction} from "@solana/web3.js"
  import dotenv from "dotenv";
  dotenv.config();
  import { getKeypairFromEnvironment } from "@solana-developers/helpers";

  const suppliedToPubkey = process.argv[2] || null;
  
  if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
  }
  
  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
  
  console.log(`suppliedToPubkey: ${senderKeypair}`);

  const toPubkey = new PublicKey(suppliedToPubkey);

  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);
  
  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );