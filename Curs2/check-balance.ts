import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { airdropIfRequired, getKeypairFromEnvironment } from "@solana-developers/helpers";

import bs58 from "bs58";

// Ma conectez la clusterul devnet
const connection = new Connection(clusterApiUrl("devnet"));

const myKey = "GBiGhtVYwM6d7XNgoYxgh1uEeDitpKPsRtVcDEPJj43z";
const publicKey = new PublicKey(myKey);

//  !!!airdropIfRequired e async!!! (face un request, e obvious)
await airdropIfRequired(connection, publicKey, 2 * LAMPORTS_PER_SOL, 0.5 * LAMPORTS_PER_SOL);

// Same here legat de async, dar e mai evident
const blanceInLamports = await connection.getBalance(publicKey);

const privateKey = getKeypairFromEnvironment("SECRET_KEY");
console.log("Private key:", bs58.encode(privateKey.secretKey));


console.log("Connected to cluster:", clusterApiUrl("devnet"));
console.log("Balance in lamports:", blanceInLamports, "LAMPORTS");
console.log("Balance in SOL:", blanceInLamports / LAMPORTS_PER_SOL, "SOL");
