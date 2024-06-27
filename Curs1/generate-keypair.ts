import "dotenv/config";
import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair_gen = Keypair.generate();
console.log(`✅ Generated keypair: ${keypair_gen.publicKey.toBase58()}`)

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our keypair securely, using an env file! Our public key is: ${keypair.publicKey.toBase58()}`
); 