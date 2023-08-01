import {createChatRoute} from './createChatRoute';
import {getUsersRoute} from './getUsersRoute';
import {getUserChatsRoute} from './getUserChatsRoute';

export const routes = [getUsersRoute, createChatRoute, getUserChatsRoute];

export {
    protectRoute
}
from './protectRoute';
