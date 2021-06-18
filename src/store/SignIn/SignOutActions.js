import * as loginConstants from './SignInConstant'

const logout = () => {
    return {
        type: loginConstants.LOGOUT
    }
}

export default logout