import {database} from './database';

export const getUserChats = async (id) => {
    const chats = await database.getConnection().collection("chats").find({ids: id}).toArray();

    return chats;
}