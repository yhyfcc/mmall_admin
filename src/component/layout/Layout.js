import React from 'react';
import Grid from '@material-ui/core/Grid'
import {CssBaseline} from "@material-ui/core";
import Header from "../Header/Header";
import Drawer from "../Drawer/Drawer";



function Layout(props) {
    return(
            <React.Fragment>
                <CssBaseline/>
                <div>
                    <Header/>
                </div>
                <Grid container direction='row' component='div'>
                    <Grid item xs={12} sm={4} md={2} lg={2} component='div'>
                        <Drawer/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={10} lg={10}component='div'>
                        {props.children}
                    </Grid>

                </Grid>
            </React.Fragment>

        );
}

export default Layout;

