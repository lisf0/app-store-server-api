import { AppStoreServerAPI, decodeTransactions, Environment, OrderLookupStatus } from "../src/index"

const KEY =
    `-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
pruqZXNsK1wAR/dpSQsJO6m0AJ+gCgYIKoZIzj0DAQehRANCAAR6pNw09W9wf8Z4
MCQ+khEmf4IkSQQmu4nUWCJCcxIweeCU1VP3+j/yJ03GY9O7uxMDcb8NPDa/02Px
HjXbRF+H
-----END PRIVATE KEY-----`

const KEY_ID = "XXXXXXXXXX"
const ISSUER_ID = "91fa5999-7b54-4363-a2a8-265363fa6cbe"
const APP_BUNDLE_ID = "com.test.demo"

const api = new AppStoreServerAPI(
    KEY, KEY_ID, ISSUER_ID, APP_BUNDLE_ID, Environment.Production
)

async function queryOrder(orderId: string) {
    const response = await api.lookupOrder(orderId)

    if (response.orderLookupStatus === OrderLookupStatus.Valid) {
        const transactions = await decodeTransactions(response.signedTransactions)
        /// ...
        console.log(transactions)
    }
}

queryOrder("MSM4BBS925");