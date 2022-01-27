import {
    FETCH_IP_INFO
} from './type'
import web from '../apis/httpRequest'

export const fetchIpInfo = () => async (dispatch: any) =>
{
    const payload = await web.get(`/`)
    dispatch({
        type: FETCH_IP_INFO,
        payload: payload.data
    })
    return payload
}