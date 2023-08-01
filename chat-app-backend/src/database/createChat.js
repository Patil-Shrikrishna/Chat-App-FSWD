import {database} from './database';

export const createChat = async (name, ids) => {
    const {insertedId} = await database.getConnection().collection("chats").insertOne({name: name, ids, messages: []});

    return insertedId;
}
