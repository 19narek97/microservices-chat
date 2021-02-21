import {request} from '../utils/request'

export async function SignIn(payload){
    return await request('post',`api/v1/login`,JSON.stringify(payload));
}