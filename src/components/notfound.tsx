import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import {
    Grid,
} from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import _ from 'lodash'

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
            width: '500px',
            backgroundColor: '#FFF',
            boxShadow: '0px 0px 20px rgba(0, 115, 250, 0.1)'
        }
    })
);


const Notfound = (props:Props) :React.ReactElement<Props>  =>  {

    const classes = useStyles()

    //change route (history.push('/'))
    const history = useHistory()
    
    //using redux 
    const dispatch = useDispatch()

    return (
    <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.main}>
        <Grid container direction='column' justifyContent='space-between' alignItems='center' className={classes.mainContainer}>
            {'This is 404 not found page'}
        </Grid>
    </Grid>

    )
}

export default Notfound