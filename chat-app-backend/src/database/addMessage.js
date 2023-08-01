import {database} from "../database";
import {objectId} from "mongodb";

export const addMessage = async (message, userId, chatId) => {
    const id = new objectId();
    const message = {
        _id:id,
        text:message,
        postedById:userId
    }

    await database.getConnection().collection("chats").updateOne({
        _id:objectId(chatId)
    },
    {
        $push:{
            messages:message
        }

    })
}