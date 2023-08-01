import {database} from "./database";

export const getUsers = async () => {
    const users = await database.getConnection().collection('users').find({}).toArray();
    return users;
}
