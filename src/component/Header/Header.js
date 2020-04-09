import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import makeStyles from "@material-ui/core/styles/makeStyles";
import util from '../../util/util';
import userService from '../../service/user-service';

const useStyle = makeStyles({
    root: {
        height: '60px',
        padding: '10px 20px 10px 20px',
        border: '1px solid #e7e7e7'
    },
    grow: {
        flexGrow: '1'
    },
    navBar: {
        display: 'flex',
        alignItems: 'center'
    },
    logoutIcon: {
        marginLeft: '5px'
    },
    iconFlip: {
        transform: 'rotateZ(180deg)'
    },
    Link: {

    }
});


function Header(props) {
    const classes = useStyle();
    const [userInfo,] = useState(util.getLocalStorage('userInfo') || '');
    const onLogout = () => {
        userService.logout().then(res => props.history.push('/login'))
    };
    const onLogin = () => {
        userService.logout().then(res => props.history.push('/login'));
    };
    return(
                <Grid container alignContent='center' className={classes.root}>
                    <Grid item component='div'>
                        <Link component={RouterLink} to="/index" variant='h6' underline='none' color='inherit'>
                            MMAll ADMIN
                        </Link>
                    </Grid>
                    <Grid item component='div' className={classes.grow}/>
                    <Grid item component='div' className={classes.navBar}>
                        <Typography component='div' variant='subtitle2'>
                            {userInfo.username? 'Welcome '+ userInfo.username : 'Welcome'}
                        </Typography>
                        {userInfo? <ExitToAppIcon className={`${classes.logoutIcon} ${classes.iconFlip}`} onClick={onLogout}/>
                        : <ExitToAppIcon className={classes.logoutIcon} onClick={onLogin}/>}

                    </Grid>
                </Grid>


    );
}

export default withRouter(Header);