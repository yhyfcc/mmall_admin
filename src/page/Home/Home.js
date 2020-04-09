import React, {useEffect, useState} from 'react';
import Title from "../../component/Title/Title";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import statisticsService from '../../service/statistics-service';

const useStyles = makeStyles(theme => ({
        title: {
            paddingLeft: theme.spacing(10),
            paddingTop: theme.spacing(2)
        },
        paperContainer: {
            padding: theme.spacing(6)
        },
        paper: {
            padding: theme.spacing(2),
            height: '240px'
        },
        paperContent: {
            width: '100%',
            height: '100%'
        },
        iconAlign: {
            display: 'flex',
            alignItems: 'center',
            verticalAlign: 'center'
        }
    })
);

const Home = (props) => {
    const classes = useStyles();
    const [stat,changeStat] = useState({
        userCount: '-',
        orderCount: '-',
        productCount: '-'
    });
    useEffect(() => {
        statisticsService.getIndexStatistics().then(
            res => changeStat(res),
            rej => {}
        )
    },[]);
    return (
        <React.Fragment>
            <div className={classes.title}>
                <Title title="Dashboard" />
            </div>
            <Grid container>
                <Grid item xs={12} md={4} className={classes.paperContainer}>
                    <Paper className={classes.paper} >
                        <Grid container alignItems='center' justify='center' direction='column' spacing={2} className={classes.paperContent}>
                            <Grid item>
                                <Typography component="h2" variant="h6" color="primary" gutterBottom align='center'>
                                    Total users
                                </Typography>
                            </Grid>
                            <Grid item>
                                <div className={classes.iconAlign} >
                                    <PersonIcon fontSize='large' />
                                    <Typography component="span" variant="h4" align='center'>
                                        {stat.userCount}
                                    </Typography>
                                    </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} className={classes.paperContainer}>
                    <Paper className={classes.paper} >
                        <Grid container alignItems='center' justify='center' direction='column' spacing={2} className={classes.paperContent}>
                            <Grid item>
                                <Typography component="h2" variant="h6" color="primary" gutterBottom align='center'>
                                    Total products
                                </Typography>
                            </Grid>
                            <Grid item>
                                <div className={classes.iconAlign} >
                                    <ListIcon fontSize='large'/>
                                    <Typography component="span" variant="h4" align='center'>
                                        {stat.productCount}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} className={classes.paperContainer}>
                    <Paper className={classes.paper} >
                        <Grid container alignItems='center' justify='center' direction='column' spacing={2} className={classes.paperContent}>
                            <Grid item>
                                <Typography component="h2" variant="h6" color="primary" gutterBottom align='center'>
                                    Total orders
                                </Typography>
                            </Grid>
                            <Grid item >
                                <div className={classes.iconAlign} >
                                    <CheckBoxIcon fontSize='large' />
                                    <Typography component="span" variant="h4" align='center'>
                                        {stat.orderCount}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default Home;