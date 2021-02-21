import Cookies from 'js-cookie'

export default class AuthCookie {

    static Set(tokken){
        Cookies.set('tokken', tokken,{ expires: 7 }); // 1 day
    }

    static Get(name){
        Cookies.get(name); 
    }

    static remove(name){
        Cookies.remove(name); 
    }
}