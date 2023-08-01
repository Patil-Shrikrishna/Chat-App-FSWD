import {MongoClient} from "mongodb";

const databaseName = "chat-db";

export const database = {
    databaseClient: null,
    connect: async function (url) {
        const client = await MongoClient.connect(url);
        this._databaseClient = client;
    },
    getConnection: function () {
        if (!this._databaseClient) {
            console.log("First Initialize database");
        }
        return this._databaseClient.db(databaseName);
    }
}
