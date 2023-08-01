import { ObjectId } from "mongodb";
import { database } from "../database";
import { getUser } from "./getUser";

export const getChats = async (chatId) => {
    const chats = database.getConnection().collection("chats").findOne({_id:new ObjectId(chatId)})
    const members = await Promise.all(chats.ids.map(id => getUser(id)))
    const usersForMessages = await Promise.all(chats.messages.map(m=>getUser(m.postedById)));
}
