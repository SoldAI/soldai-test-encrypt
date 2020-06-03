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
