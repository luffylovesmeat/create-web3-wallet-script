# Ethereum Wallet Generator

This TypeScript script generates Ethereum wallets using the Web3 library, saves the wallet addresses and private keys into an Excel file, and stores it locally.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- Ethereum Infura API key (Sign up at [Infura](https://infura.io/))

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/luffylovesmeat/create-web3-wallet-script.git
    cd ethereum-wallet-generator
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Create a `.env` file in the root directory and add your Infura API key:

    ```env
    INFURA_API_KEY=your_infura_api_key
    ACCOUNTS_LIMIT=10
    ```

    Adjust the `ACCOUNTS_LIMIT` based on the number of wallets you want to generate.

4. Create a directory for output files in the root of the project:

    ```bash
    mkdir files
    ```

    This is where the generated Excel file (`walletAddresses.xlsx`) will be saved.

## Usage

Run the script to generate and save Ethereum wallets:

```bash
pnpm start
```

The generated wallet addresses and private keys will be saved in the `files` directory.
