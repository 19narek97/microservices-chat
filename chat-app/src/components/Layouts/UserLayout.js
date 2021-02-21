import React from "react";
import Header from "./elements/header"
import Footer from "./elements/footer"
import withAuthentification from "../../hoc/withAuthentification"

const condition = authUser => authUser

const UserLayout = (props) => {
    console.log(props,"UserLayout")

    return (
        <>
            <Header/>
            {props.children}
        </>
       
    )
}



export default withAuthentification(condition)(UserLayout)