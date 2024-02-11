import {Web3} from "web3";
import "dotenv/config"
import { Readable } from "stream"
import * as XLSX from "xlsx"
import {promises as fsPromises} from "fs";
import path from "path";

XLSX.stream.set_readable(Readable)

const web3 = new Web3(`https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`)

interface IWallet {
    walletAddress: string
    privateKey: string
}

function createWallet(): IWallet {
    const wallet = web3.eth.accounts.create();
    return {
        walletAddress: wallet.address,
        privateKey: wallet.privateKey
    }
}

async function saveFile(dataArr:IWallet[]){
    const sheetFinal = XLSX.utils.json_to_sheet(dataArr)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, sheetFinal, "Sheet1")
    const newFileName = `walletAddresses.xlsx`
    try {
        await fsPromises.writeFile(
            path.join(
                __dirname,
                "..",
                `files/${newFileName}`
            ),
            XLSX.write(workbook, { bookType: "xlsx", type: "buffer" })
        )
        console.log(`File saved successfully! ${newFileName}`)
    } catch (error) {
        console.log(`Error!:`, error)
    }
}

async function createAndSaveWallets(limit: number){
    const walletList: IWallet[] = []
    for (let i = 0; i < limit; i++){
        const wallet = createWallet()
        walletList.push(wallet)
    }
    return saveFile(walletList)
}

createAndSaveWallets(Number(process.env.ACCOUNTS_LIMIT))
