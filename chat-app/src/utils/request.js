import axios from 'axios'

export default function request(method,url,data ={}){

    return axios({
        url: url,
        method: method,
        headers: {},
        data
    }).then((response) => {
        return response;
    }, (error) => {
        console.error(error)
    });



}