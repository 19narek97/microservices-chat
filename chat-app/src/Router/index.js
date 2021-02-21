import React from "react";
import {Route} from "react-router-dom"
import { useSelector} from 'react-redux'


/* Languages */
import lang_en from '../lang/en/en.json'
import lang_am from '../lang/am/am.json'

export const Router = ({layout, component, ...res}) => {

    const [Layout, Component] = [layout, component];
    const language = useSelector(state => state.language)
    const lang = language ? language === 'EN' ? lang_en : lang_am : lang_en
   
    return (
        <Route
            {...res}
            render={props => {
                const combineProps = {...props,lang}

                return (
                    <Layout>
                        <Component {...combineProps}/>
                    </Layout>
                )
            }}
        />
    )
}
