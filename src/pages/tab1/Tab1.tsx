import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { RootState } from '../../reducers/index'
import {
    Divider,
    Grid, Typography,
} from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import _ from 'lodash'
import { fetchIpInfo } from '../../actions/tab1Action';
interface Props {
    children: JSX.Element | JSX.Element[];
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            display: 'flex',
            width: '100%',
            height: '100vh',
            backgroundColor: '#f5f5f5'
        },
        mainContainer: {
            borderRadius:10,
            padding: '40px 50px',
            height: '570px',
            width: '40%',
            backgroundColor: '#FFF',
            boxShadow: '0px 0px 20px rgba(0, 115, 250, 0.1)'
        }
    })
);


const Tab1 = (props:Props) :React.ReactElement<Props>  =>  {

    const classes = useStyles()

    //change route (history.push('/'))
    const history = useHistory()

    //get theme
    const theme: {[key: string]: {[key: string]:string}}  = useSelector((state: RootState) => state.theme)
    const themeSelected: string = useSelector((state: RootState) => state.themeSelected)
    
    //using redux 
    const dispatch = useDispatch()

    //using selector to retreive store 
    const ipInfo: any = useSelector((state: RootState) => state.ipInfo)
    
    //get ip info when first loading
    useEffect(() =>
    {
        dispatch(fetchIpInfo())
    },[])

    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.main}>
            <Grid container direction='column'  alignItems='flex-start' className={classes.mainContainer}>
                <Grid item >
                    <Typography> {'Request https://api.db-ip.com/v2/free/self to get self ip address.'} </Typography>   
                </Grid>
                <Divider style={{ width: '100%',marginTop:'20px' }}/>
                <Grid item style={{marginTop:'20px'}}>
                    <Typography> {'Response info: '} </Typography>   
                </Grid>
   
                <Grid item style={{ marginTop: '20px' }}>
                    {
                        _.isEmpty(ipInfo) === false ? <Typography> {`Ip addrss: ${ipInfo}`} </Typography> : <Typography> {`Loading...`} </Typography>
                    }  
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Tab1