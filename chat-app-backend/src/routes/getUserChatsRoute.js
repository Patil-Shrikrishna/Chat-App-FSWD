import {getUserChats} from "../database/getUserChats"

export const getUserChatsRoute = {
    method: 'get',
    path: '/users/:id/chats',
    requestProcessor: async (req, res) => {
        const id = req.params.id;
        const chats = await getUserChats(id);
        res.status(200).json(chats);
    }
}
