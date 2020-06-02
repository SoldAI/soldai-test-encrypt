require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { JSEncrypt } = require('jsencrypt');

const decrypt = new JSEncrypt();
const encrypt = new JSEncrypt();

function getPrivKey() {
  return fs.readFileSync(path.resolve(process.env.PATH_PRIKEY, process.env.FILENAME_PRIKEY), 'utf8');
}
function getPubKey() {
  return fs.readFileSync(path.resolve(process.env.PATH_PUBKEY, process.env.FILENAME_PUBKEY), 'utf8');
}

const privkey = getPrivKey();
const pubkey = getPubKey();
decrypt.setPrivateKey(privkey);
encrypt.setPublicKey(pubkey);

const originalValue = 'Este dato será encriptado';
console.log(': ----------------------------');
console.log('originalValue', originalValue);
console.log(': ----------------------------');
const encryptedValue = encrypt.encrypt(originalValue);
const decryptedValue = decrypt.decrypt(encryptedValue);
console.log(': ------------------------------');
console.log('decryptedValue', decryptedValue);
console.log(': ------------------------------');