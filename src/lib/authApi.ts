import { getCookie } from "@/utils/cookie"
import { appJsonApi } from "./axios"
import memoizee from "memoizee"

const sendRefreshTokenRequest = async () => {
    try {
        const response = await appJsonApi.post('/auth/refresh-token')
        return true
    } catch (error) {
        // window.location.assign('/login')
    }
}

const refreshToken = memoizee(
    sendRefreshTokenRequest,
    {
        promise: true,
        maxAge: 5_000
    }
)

const authRequest = async (request:Function):Promise<{response?:any, error?:any}> => {
    const expireTime = getCookie('expireTime');
    const isExpired = (Number(expireTime) > Date.now()) ? false : true

    if (isExpired) {
        const isRefreshed = await refreshToken();
        if (isRefreshed) {
            const { response, error } = await request()
            return { response, error }
        }
    } else {
        const { response, error } = await request()()
        return { response, error }
    }

    return {error : 'Unable to refresh token'}
}

export {authRequest}