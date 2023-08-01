import {createChat} from './../database';


export const createChatRoute = {
    method: 'post',
    path: '/new-chat',
    requestProcessor: async (req, res) => {
        const {name, memberIds} = req.body;

        const insertedId = await createChat(name, memberIds);

        res.status(201).json(insertedId);
    }
}
