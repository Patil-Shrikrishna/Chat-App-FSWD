import {getUsers} from './../database';

export const getUsersRoute = {
    method: "get",
    path: "/users",
    requestProcessor: async (req, res) => {
        const users = await getUsers();
        res.status(200).json(users);
    }
}
