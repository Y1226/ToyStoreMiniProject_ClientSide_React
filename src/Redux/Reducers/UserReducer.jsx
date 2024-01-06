import produce from 'immer'

const UserState = {
    UserList: []
}

const UserReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'ADD-USER':
                state.UserList = action.payload
                break;
        
            default:
                break;
        }
    }, UserState
)

export default UserReducer