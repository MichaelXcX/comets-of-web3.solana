import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));

const my_key = "GBiGhtVYwM6d7XNgoYxgh1uEeDitpKPsRtVcDEPJj43z";
const publicKey = new PublicKey(my_key);

airdropIfRequired(connection, publicKey);

const blanceInLamports = await connection.getBalance(publicKey);

console.log("Connected to cluster:", clusterApiUrl("devnet"));
console.log("Balance in lamports:", blanceInLamports, "LAMPORTS");
console.log("Balance in SOL:", blanceInLamports / LAMPORTS_PER_SOL, "SOL");
