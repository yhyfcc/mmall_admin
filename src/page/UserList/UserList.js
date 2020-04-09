import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Title from "../../component/Title/Title";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import UserService from '../../service/user-service';

const useStyles = makeStyles(theme => ({
        title: {
            paddingLeft: theme.spacing(10),
            paddingTop: theme.spacing(2)
        },
        content: {
            paddingLeft: theme.spacing(10),
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(10)
        },
        table: {
            minWidth: 450
        }
    })
);



function UserList() {
    const classes = useStyles();
    const [list,changeList] = useState();
    const [loadingPara,changeLoadingPara] = useState({
        error: false,
        firstLoading: true,
        errorMsg: ''
    });
    const [listPara,changeListPara] = useState({
        total: 1,
    });
    const [pagePara,changePagePara] = useState({
        pageSize: 10,
        pageNum: 1
    });

    const handleChangePage = (pageNum) => {
        changePagePara((state) => {return{...state,pageNum: pageNum+1}})
    };

    const handleChangeRowsPerPage = (event) => {
        changePagePara((state) => {return{...state,pageSize: event.target.value}})
    };


    useEffect(()=> {
        UserService.getUserList(pagePara).then(
            (res) => {
                changeLoadingPara((state) => {return {...state,firstLoading: false}});
                changeList(res.list);
                changeListPara((state) => {return{...state,total: parseInt(res.total)}})
            },
            (rej) => changeLoadingPara((state) => {return {...state,firstLoading: false,error: true,errorMsg: rej}})
        );
    },[pagePara]);



    let loadingCell = <TableRow><TableCell align="center">Loading Information</TableCell></TableRow>;
    let emptyCell = <TableRow><TableCell align="left">Nothing found</TableCell></TableRow>;
    let dataCells = list ? list.map((row) => (
            <TableRow key={row.id}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.createTime}</TableCell>
            </TableRow>
        )) : '';
    return (
        <React.Fragment>
            <div className={classes.title}>
                <Title title='User list'/>
            </div>
            <Grid container className={classes.content}>
                <Grid item xs={12} md={10}>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">ID</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Mobile</TableCell>
                                    <TableCell align="right">Time of registration</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loadingPara.firstLoading? loadingCell : (list && list.length > 0 ? dataCells : emptyCell)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {list ?
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={listPara.total}
                        rowsPerPage={pagePara.pageSize}
                        page={pagePara.pageNum-1}
                        onChangePage={(event,pageNum) => handleChangePage(pageNum)}
                        onChangeRowsPerPage={(event) => handleChangeRowsPerPage(event)}
                    /> : ''}
                </Grid>
            </Grid>

        </React.Fragment>


    )
}

export default UserList;