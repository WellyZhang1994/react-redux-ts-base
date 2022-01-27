import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { RootState } from '../../reducers/index'
import {
    Grid,
    Button,
    TextField,
    InputAdornment,
    Typography
} from '@material-ui/core';

import { Checkbox } from '@mui/material';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import _ from 'lodash'
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';

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
        },
        loginWord: {
            fontSize:'30px',
            color:'#C17767',
            fontWeight: 800,
            fontFamily:'Lato, Noto Sans TC'
        },
        h1: {
            fontSize:'14px',
            color:'#9e9e9e',
            fontWeight: 800,
            fontFamily:'Lato, Noto Sans TC'
        },
        serachInput: {
            [`& fieldset`]: {
                borderRadius: 5,
            },
        },
        selectBorder:{
            borderColor: "transparent !important"
        },
        changeButton: {
            borderRadius:5,
            color:'#FFF',
            backgroundColor: '#5A91FF',
            width:'100%',
            height:'40px',
            boxShadow:'none',
            '&:hover': {
                backgroundColor:'#5A91FF',
                boxShadow:'none'
            },
        },
    })
);


const LoginPage = (props:Props) :React.ReactElement<Props>  =>  {

    const classes = useStyles()
    const history = useHistory()
    const theme: {[key: string]: {[key: string]:string}}  = useSelector((state: RootState) => state.theme)
    const themeSelected :string = useSelector((state: RootState) => state.themeSelected)
    const dispatch = useDispatch()

    const changePassword = (password:string, confirmPassword:string) =>
    {
        //dispatch()
        console.log(password, confirmPassword)
        
    }

    const [password, setPassword] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [passwordError, setPasswordError] = React.useState<boolean>(false);
    const [emailError, setEmailError] = React.useState<boolean>(false);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [needResetPassword, setNeedResetPassword] = React.useState<boolean>(false);

    //confirm page
    const [resetPassword, setResetPassword] = React.useState<string>('');
    const [resetConfirmPassword, setResetConfirmPassword] = React.useState<string>('');
    const [resetPasswordError, setResetPasswordError] = React.useState<boolean>(false);
    const [resetConfirmPasswordError, setResetConfirmPasswordError] = React.useState<boolean>(false);

    const emailEvent = (email: string) =>
    {
        if (email.length === 0)
        {
            setEmailError(false)
        }
        else if ( validateEmail(email) === null)
        {
            setEmailError(true)
        }
        else
        {
            setEmailError(false)
        }
        setEmail(email)
    }

    const passwordEvent = (password: string) =>
    {
        if (password.length === 0)
        {
            setPasswordError(false)
        }
        setPassword(password)
    }

    const validateEmail = (email:string) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const resetPasswordEvent = (password:string, confirmPassword: string) =>
    {
        if (password.length === 0)
        {
            setResetPasswordError(false)
        }
        else if (password.length < 8)
        {
            setResetPasswordError(true)
        }
        else
        {
            setResetPasswordError(false)
        }

        if(_.isEqual(password, confirmPassword) === false)
        {
            setResetConfirmPasswordError(true)
        }

            setResetPassword(password)
        }
    
    const comfirmPasswordEvent = (password:string, confirmPassword: string) =>
    {
        if (confirmPassword.length === 0)
        {
            setResetConfirmPasswordError(false)
        }
        else if (_.isEqual(password, confirmPassword) === false)
        {
            setResetConfirmPasswordError(true)
        }
        else
        {
            setResetConfirmPasswordError(false)
        }
        setResetConfirmPassword(confirmPassword)
    }
    

    return (
        <>
            {needResetPassword === false ? 
                <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.main}>
                    <Grid container direction='column' justifyContent='space-between' alignItems='center' className={classes.mainContainer}>
                        <Grid item style={{width:'100%'}}>
                            <Grid container direction='column' alignItems='center' >
                                <Grid item>
                                    <Typography style={{fontFamily:'Noto sans', fontSize:'28px',fontWeight:600}}>{'Sign in'}</Typography>
                                </Grid>
                                <Grid item style={{marginTop:'10px'}}>
                                    <Typography  style={{fontFamily:'Noto sans', fontSize:'16px',fontWeight:500,color:'#989898'}}>{'Enter your credentials to access your account.'}</Typography>
                                </Grid>
                                <Grid item container direction='column' style={{marginTop:'20px',width:'100%'}}>
                                    <Grid item>
                                        <Typography style={{fontFamily:'Noto sans', fontSize:'16px',fontWeight:600}}>{'Email address'}</Typography>
                                    </Grid>
                                    <Grid item style={{marginTop:'4px'}}>
                                        <TextField
                                            error={emailError}
                                            value={email}
                                            onChange={(event)=> emailEvent(event.target.value)}    
                                            placeholder='Enter your email'
                                            variant={'outlined'}
                                            className={classes.serachInput}
                                            InputProps={{
                                                type: 'input',
                                                style: {
                                                    height:'40px',
                                                    fontSize:'14px',
                                                    width:'400px',
                                                    padding:'0px 0px 0px 10px',
                                                    backgroundColor:'#F3F3F3',
                                                    marginRight: '20px',
                                                    fontFamily:'Noto sans'
                                                },
                                                classes: {
                                                    notchedOutline: classes.selectBorder
                                                },
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailIcon style={{fill:'#5A91FF'}}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                            size="small"
                                            />
                                    </Grid>
                                        {emailError ?
                                            <Typography  style={{marginTop:'4px',color:'#FE2D53', fontFamily:'Noto sans', fontSize:'14px'}}>{'Please enter the correct mail format.'}</Typography> : ''}
                                </Grid>    
                                <Grid item container direction='column' style={{marginTop:'10px'}}>
                                    <Grid item>
                                        <Typography  style={{fontFamily:'Noto sans', fontSize:'16px',fontWeight:600}}>{'Password'}</Typography>
                                    </Grid>
                                    <Grid item style={{marginTop:'4px'}}>
                                        <TextField
                                            error={passwordError}
                                            value={password}
                                            onChange={(event)=> passwordEvent(event.target.value)}    
                                            placeholder='Enter your password'
                                            variant={'outlined'}
                                            className={classes.serachInput}
                                            InputProps={{
                                                type: showPassword? 'input' : 'password',
                                                style: {
                                                    height:'40px',
                                                    fontSize:'14px',
                                                    width:'400px',
                                                    padding:'0px 0px 0px 10px',
                                                    backgroundColor:'#F3F3F3',
                                                    marginRight: '20px',
                                                    fontFamily:'Noto sans'
                                                },
                                                classes: {
                                                    notchedOutline: classes.selectBorder
                                                },
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockOpenIcon style={{fill:'#5A91FF'}}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                            size="small"
                                        />
                                    </Grid>    
                                        {passwordError ?
                                        <Typography style={{color:'#FE2D53', fontFamily:'Noto sans', fontSize:'14px'}}>{ "Wrong password."}</Typography> : ''}
                                </Grid>    
                                <Grid item container alignItems='center'>
                                    <Checkbox sx={{
                                            '&:hover': { bgcolor: 'transparent' },
                                            marginLeft:'-10px'
                                    }}
                                        onChange={()=> setShowPassword(!showPassword)}
                                        disableRipple/>
                                    <Typography style={{fontSize:'16px', fontFamily:'Noto sans'}}>{'Show password'}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{width:'100%'}}>
                                <Button onClick={()=> history.push('/tab1')}  className={classes.changeButton}>{'Sign in'}</Button>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.main}>
                    <Grid container direction='column' justifyContent='space-between' alignItems='center' className={classes.mainContainer}>
                        <Grid item style={{width:'100%'}}>
                            <Grid container direction='column' alignItems='center'>
                                <Grid item>
                                    <Typography style={{fontFamily:'Noto sans', fontSize:'28px',fontWeight:600}}>{'Resetting password'}</Typography>
                                </Grid>
                                <Grid item style={{marginTop:'10px'}}>
                                    <Typography  style={{fontFamily:'Noto sans', fontSize:'16px',fontWeight:500,color:'#989898'}}>{'Please reset your password.'}</Typography>
                                </Grid>
                                <Grid item container direction='column' style={{marginTop:'20px',width:'100%'}}>
                                    <Grid item>
                                        <Typography style={{fontFamily:'Noto sans', fontSize:'16px',fontWeight:600}}>{'New password'}</Typography>
                                    </Grid>
                                    <Grid item style={{marginTop:'4px'}}>
                                        <TextField
                                            error={resetPasswordError}
                                            value={resetPassword}
                                            onChange={(event)=> resetPasswordEvent(event.target.value, resetConfirmPassword)}    
                                            placeholder='Please enter a password'
                                            variant={'outlined'}
                                            className={classes.serachInput}
                                            InputProps={{
                                                type: 'password',
                                                style: {
                                                    height:'40px',
                                                    fontSize:'14px',
                                                    width:'400px',
                                                    padding:'0px 0px 0px 5px',
                                                    backgroundColor:'#F3F3F3',
                                                    marginRight: '20px',
                                                    fontFamily:'Noto sans'
                                                },
                                                classes: {
                                                    notchedOutline: classes.selectBorder
                                                }
                                            }}
                                            size="small"
                                            />
                                    </Grid>
                                        {passwordError ?
                                            <Typography  style={{marginTop:'4px',color:'#FE2D53', fontFamily:'Noto sans', fontSize:'14px'}}>{'The password must be at least 8 characters long.'}</Typography> : ''}
                                </Grid>    
                                <Grid item container direction='column' style={{marginTop:'10px'}}>
                                    <Grid item>
                                        <Typography  style={{fontFamily:'Noto sans', fontSize:'16px',fontWeight:600}}>{'Comfirm password'}</Typography>
                                    </Grid>
                                    <Grid item style={{marginTop:'4px'}}>
                                        <TextField
                                            error={resetConfirmPasswordError}
                                            value={resetConfirmPassword}
                                            onChange={(event)=> comfirmPasswordEvent(resetPassword, event.target.value)}    
                                            placeholder='Please re-type the password to confirm'
                                            variant={'outlined'}
                                            className={classes.serachInput}
                                            InputProps={{
                                                type: 'password',
                                                style: {
                                                    height:'40px',
                                                    fontSize:'14px',
                                                    width:'400px',
                                                    padding:'0px 0px 0px 5px',
                                                    backgroundColor:'#F3F3F3',
                                                    marginRight: '20px',
                                                    fontFamily:'Noto sans'
                                                },
                                                classes: {
                                                    notchedOutline: classes.selectBorder
                                                }
                                            }}
                                            size="small"
                                        />
                                    </Grid>    
                                        {resetConfirmPasswordError ?
                                        <Typography style={{color:'#FE2D53', fontFamily:'Noto sans', fontSize:'14px'}}>{ "New password and confirm password doesn't match."}</Typography> : ''}
                                </Grid>    
                            </Grid>
                        </Grid>
                        <Grid item style={{width:'100%'}}>
                            <Button disabled={resetPasswordError || resetConfirmPasswordError || resetPassword.length === 0 || resetConfirmPassword.length === 0 } onClick={()=> console.log('hi')} className={classes.changeButton}>{'Confirm'}</Button>
                        </Grid>
                    </Grid>
            </Grid>
            }

        </>

    )
}

export default LoginPage