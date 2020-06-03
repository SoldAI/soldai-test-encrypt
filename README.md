# soldai-test-encrypt

## Environment variables
        # Private key
        PATH_PRIKEY = // Private key path. Ex: './'
        FILENAME_PRIKEY = // Private key file name. Ex: 'rsa_1024_priv.pem'

        # Public key
        PATH_PUBKEY = // Public key path. Ex: './'
        FILENAME_PUBKEY = // Public key file name. Ex: 'rsa_1024_pub.pem'


## Configuration

1. Install packages
        npm install
2. Create the file '.env' and add the environmet variables


## How to use

1. Modify the 'originalValue' constant in the index.js file with the string that is going to be encrypted/decrypted
2. Run the file 'index.js'
        node index.js

## How to generate a private and public key

#### Private key
* Within your terminal (Unix based OS) type the following.
        openssl genrsa -out rsa_1024_priv.pem 1024

#### Public key
* You can then get the public key by executing the following command.
        openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
