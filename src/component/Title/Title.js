import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';


const Title = (props) => {
    useEffect(() =>{
        document.title = props.title;
    },[props.title]);
    return (
        <React.Fragment>
            <Typography variant="h4">
                {props.title}
            </Typography>
            {props.children}
        </React.Fragment>
    )
};

export default Title;