import React from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { useState } from 'react';


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    const useStyles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            marginLeft: '-2.5rem'
        },
        form: {
            width: '100%',
            maxWidth: '30rem',
            padding: '3vh',
            boxShadow: '0rem 1rem 5rem rgba(0, 0, 0, 0.1)',
            backgroundColor:'white',
            borderRadius: '6vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        textField: {
            marginBottom: '1rem',
        },
        link:{
            textDecoration:'none',
        },
        button: {
            marginTop: '1rem',
            backgroundColor:'#C238B8'
        },
    };
    


    return (
        <Container style={useStyles.container}>
            <form onSubmit={handleSubmit} style={useStyles.form}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Email or Phone Number"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    style={useStyles.textField}
                />

                <TextField
                    type="password"
                    label="Password"
                    variant="standard"
                    fullWidth
                    style={useStyles.textField}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                    type='submit'
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={useStyles.button}
                >
                    Sign In
                </Button>
                <Typography marginTop={'1rem'} variant="h7" gutterBottom>
                    forgot <a style={useStyles.link} href="#">password?</a>
                </Typography>
                <Typography marginTop={'1rem'} variant="h8" gutterBottom>
                    Don't have account? <a href="#" style={useStyles.link} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>sign up.</a>
                </Typography>
                {/* <Button
          variant="text"
          color="primary"
          fullWidth
          style={useStyles.button}
        >
          Sign Up
        </Button> */}
            </form>
        </Container>
    );
};

export default LoginForm;