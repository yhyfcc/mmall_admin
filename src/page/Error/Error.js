import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import Title from '../../component/Title/Title';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
        title: {
            paddingLeft: theme.spacing(10),
            paddingTop: theme.spacing(2)
        },
        content: {
            paddingLeft: theme.spacing(10),
            paddingTop: theme.spacing(1)
        }
    })
);
const LinkBehavior = React.forwardRef((props,ref) => (
    <RouterLink ref={ref} to='/index' {...props}/>
));
function Error() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.title}>
                <Title title='Error!'/>
            </div>
            <Grid container className={classes.content}>
                <Grid item md={6} >
                    <Typography>
                        Can't find the page you are looking for, go back to <Link component={LinkBehavior}>home</Link>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>


    )
}

export default Error;