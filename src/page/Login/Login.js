import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import service from '../../service/user-service';
import util from '../../util/util';

const useStyles = makeStyles((theme) => ({
    Paper: {
        padding: '20px',
        marginTop: '50px'
    },
    Button: {
        marginTop: '10px'
    },
    textField: {
        width: '100%'
    }
}));

function validate(formData){
    return formData.username.trim().length >= 5 && formData.password.trim().length >= 5;
}


function Login(props) {

    const classes = useStyles();
    const [form,changeFormState] = useState({
        username: '',
        password: '',
        error: false,
        errorMsg: ''
    });
    const [redirect,] = useState(
        util.getUrlParam('redirect')? util.getUrlParam('redirect') :'');

    const handleValueChange = (name,value) => {
        changeFormState(state => {
            let newState = {
                ...state,
                [name]: value
            };
            let error = !validate(newState);
            newState = {
                ...newState,
                error
            };
            return newState;
        });

    };

    const handleSubmit = () => {
        service.login({
            username: form.username,
            password: form.password
        }).then(res => {
            util.setLocalStorage('userInfo',res);
            props.history.push(redirect);
        },rej => changeFormState(state => {return {...state,errorMsg: rej}}));
    };

    const handleKeyUp = (key) => {
        if(key === 'Enter'){
            handleSubmit();
        }
    };

    useEffect(() => {document.title = 'Login -- MMALL ADMIN'},[]);

    let AlertMsg = form.errorMsg?
        <Alert severity="error" >
            {form.errorMsg}
        </Alert> : "";

    return (
        <Container component='div' maxWidth='xs'>
            <Paper className={classes.Paper}>
                <Typography variant='h6' component='div'>
                    Login to MMALL admin system
                </Typography>
                {AlertMsg}
                <div>
                    <TextField
                        label="Username"
                        id="username"
                        name="username"
                        defaultValue=""
                        className={classes.textField}
                        helperText="Please input your username"
                        margin="normal"
                        variant='outlined'
                        error={form.error}
                        onChange={e => handleValueChange(e.target.name,e.target.value)}
                        onKeyUp={e => handleKeyUp(e.key)}
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        id="password"
                        name="password"
                        defaultValue=""
                        className={classes.textField}
                        helperText="Please input your password"
                        margin="normal"
                        type="password"
                        variant='outlined'
                        error={form.error}
                        onChange={e => handleValueChange(e.target.name,e.target.value)}
                    />
                </div>
                <Button variant='contained' color='primary' className={classes.Button} onClick={handleSubmit}>
                    Login
                </Button>
            </Paper>
        </Container>
    )
}

export default Login;