import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyle = makeStyles({
    root: {
        width: '100%',
        borderRight: '1px solid #e7e7e7',
        borderBottom: '1px solid #e7e7e7'
    }
});


function Drawer(){
    const classes = useStyle();
    const [openProduct, setOpenProduct] = useState(true);
    const [openOrder, setOpenOrder] = useState(true);
    const handleProductClick = () => {
        setOpenProduct(!openProduct);
    };
    const handleOrderClick = () => {
        setOpenOrder(!openOrder);
    };

    return(
        <div className={classes.root}>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <Divider/>
                <ListItem button onClick={handleProductClick}>
                    <ListItemIcon>
                        <GavelIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Products"/>
                    {openProduct ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openProduct}>
                    <List>
                        <ListItem >
                            <ListItemText secondary="Product management"/>
                        </ListItem>
                        <ListItem >
                            <ListItemText secondary="Category management"/>
                        </ListItem>
                    </List>
                </Collapse>
                <Divider/>
                <ListItem button onClick={handleOrderClick}>
                    <ListItemIcon>
                        <BookmarkBorderIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Orders"/>
                    {openOrder ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openOrder}>
                    <List>
                        <ListItem >
                            <ListItemText secondary="Order management"/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default Drawer;