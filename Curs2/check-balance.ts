import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const my_key = "GBiGhtVYwM6d7XNgoYxgh1uEeDitpKPsRtVcDEPJj43z";
const publicKey = new PublicKey(my_key);


const blanceInLamports = await connection.getBalance(publicKey);

console.log("Connected to cluster:", clusterApiUrl("devnet"));
console.log("Balance in lamports:", blanceInLamports / LAMPORTS_PER_SOL, "LAMPORTS");
