export const RECEIVE_USERS = 'RECEIVE_USERS'

// action creator to receive the users 
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}