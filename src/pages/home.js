import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';
import Button from '../components/button';

export default class Home extends React.Component {
    render() {
        let myVar = "my Var"
        return(
           <div>
               <Button/>
               <Header title="Page js"></Header>
               <Grid data={["one","two","three"]}/>
           </div>
        )
    }
}