const initialState = {
    username: '',
    id: '',
    profile_pic: ''
}

//action constants
export const NAV = "NAV"


//action builders
export function nav(userObj) {

    console.log(userObj)
    // const {username, id, profile_pic} = this.state
    return {
        type: NAV,
        payload: {
            id: userObj.user.id,
            username: userObj.user.username,
            profile_pic: userObj.user.profile_pic
        }
    }
}


//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NAV: 
           return {...state, ...action.payload} 
        default: return state
    }
}