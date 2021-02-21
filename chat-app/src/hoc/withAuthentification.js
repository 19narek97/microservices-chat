import React, { useEffect } from 'react'
import AuthCookie from "../utils/cookie"
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

const withAuthentification = (condition) => Component => (props) => {
    const dispatch = useDispatch();
    const userToken = AuthCookie.Get("tokken")
    console.log(dispatch,"dispatch");

    useEffect(() => {
        dispatch()
    },[])



    return condition(userToken) ? <Component {...props}/> :  <Redirect to={'/login'}/>;
}

export default withAuthentification