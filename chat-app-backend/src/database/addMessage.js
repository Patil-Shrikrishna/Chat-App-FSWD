import {database} from "../database";
import {ObjectId} from "mongodb";

export const addMessage = async (text, userId, chatId) => {
    const id = new ObjectId();
    const message = {
        _id:id,
        text,
        postedById:userId
    }

    await database.getConnection().collection("chats").updateOne({
        _id: new ObjectId(chatId)
    },
    {
        $push:{
            messages:message
        }

    })
}