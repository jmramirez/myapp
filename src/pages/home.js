import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';

export default class Home extends React.Component {
    render() {
        let myVar = "my Var"
        return(
           <div>
               <Header title="Page js"></Header>
               <Grid dynamicTitle={"testing " + myVar}/>
           </div>
        )
    }
}