import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom";
import { RootState } from '../reducers/index'
import {
    Grid,
    AppBar,
    Toolbar,
    Button,
    Typography,
} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import {
    Folder
} from '@material-ui/icons';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import _ from 'lodash'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            width: '100%',
            marginBottom:'100px'
        },
        bar: {
            backgroundColor:'#FFF',
            height:'100px',
            boxShadow: '0px 4px 10px rgba(0, 115, 250, 0.1)'
        },
        serachInput: {
            width:'480px',
            [`& fieldset`]: {
               
            },
        },
        button: {
            height: '40px',
            width: '110px',
        },
        selectBorder: {
            borderColor: "transparent !important"
        }
    })
);


const Header = () =>  {

    const history = useHistory()
    const classes = useStyles()
    const locationName = useLocation().pathname;
    const loginUser  = useSelector((state: RootState) => state.loginUser)

    return(
        <Grid container direction={'row'} className={classes.main} >
            <Grid item style={{width:'100%'}}>
                <AppBar position="fixed" className={classes.bar}>
                    <Toolbar>
                        <Grid container  alignItems='center' style={{height:'100px',width:'100%'}}>
                            <Grid item lg={3} md={3} >
                                <Typography style={{color:'#000'}}>{'Logo'}</Typography>
                            </Grid>
                          
                            <Grid item lg md>
                                <Grid container style={{width:'100%'}} justifyContent='space-between'>
                                    <Grid item >
                                        <Grid container>
                                            <Grid item style={{marginRight:'20px'}}>
                                                <Button disableRipple style={_.startsWith(locationName, '/tab1')? {backgroundColor:'#5A91FF',borderRadius:'25px',color:'#FFF'} : {backgroundColor:'#FFF',borderRadius:'25px',color:'#000'}} className={classes.button}  onClick={()=> history.push('/tab1')}>Tab1</Button>
                                            </Grid>
                                             <Grid item style={{marginRight:'20px'}}>
                                                <Button disableRipple style={_.startsWith(locationName, '/tab2') ? {backgroundColor:'#5A91FF',borderRadius:'25px',color:'#FFF'} : {backgroundColor:'#FFF',borderRadius:'25px',color:'#000'}} className={classes.button} onClick={()=> history.push('/tab2')}>Tab2</Button>
                                            </Grid>
                                            <Grid item style={{marginRight:'20px'}}>
                                                <Button disableRipple style={_.startsWith(locationName, '/tab3') ? {backgroundColor:'#5A91FF',borderRadius:'25px',color:'#FFF'} : {backgroundColor:'#FFF',borderRadius:'25px',color:'#000'}} className={classes.button}  onClick={()=> history.push('/tab3')}>Tab3</Button>
                                            </Grid> 
                                        </Grid>

                                    </Grid>
                                    <Grid item >
                                        <Grid container >
                                            <Grid item >
                                                {
                                                    _.keys(loginUser).length ===0 ? 
                                                    <Grid container alignItems='center'>
                                                        <Grid item style={{marginRight:'6px'}}>
                                                            <Avatar style={{width:'44px',height:'44px'}}>
                                                                <Folder />
                                                            </Avatar>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography style={{ color: '#000' }}>{'Hi user'}</Typography>
                                                        </Grid>
                                                        <Grid item >
                                                            <IconButton>
                                                                <ArrowDropDownIcon style={{width:'20px',height:'20px',color:'#000'}}/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    :
                                                    <Grid container alignItems='center'>
                                                        <Grid item style={{marginRight:'6px'}}>
                                                            <Avatar style={{width:'44px',height:'44px'}}>
                                                                <Folder />
                                                            </Avatar>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography style={{color:'#000'}}>{loginUser.displayName}</Typography>
                                                        </Grid>
                                                        <Grid item >
                                                            <IconButton>
                                                                <ArrowDropDownIcon style={{width:'20px',height:'20px',color:'#000'}}/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                }
                                            </Grid>
                                            <Grid item style={{marginRight:'20px'}}>
                                                <Button disableRipple className={classes.button}  onClick={()=> history.push('/')}>Logout</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                           
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    )
}


export default Header