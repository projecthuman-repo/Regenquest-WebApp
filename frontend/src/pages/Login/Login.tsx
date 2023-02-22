import { useState, Fragment, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

import {
    RiGoogleFill,
    RiTwitterFill,
    RiInstagramLine,
    RiFacebookFill,
} from 'react-icons/ri';
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import Card from '@mui/material/Card';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FacebookLogin from '@greatsumini/react-facebook-login';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import link from '@mui/material/Link';

const BallStyle1 = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 1000,
    width: 120,
    height: 120,
    backgroundColor: 'rgb(217, 217, 217)',
    float: 'right',
    marginRight: 100,
    marginTop: -40,
});
const BallStyle2 = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 1000,
    width: 168,
    height: 169,
    backgroundColor: 'rgb(217, 217, 217)',
    float: 'right',
    marginTop: 60,
    marginRight: -30,
});
const BallStyle3 = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 1000,
    width: 268,
    height: 268,
    backgroundColor: 'rgb(217, 217, 217)',
    float: 'right',
    marginTop: 60,
    marginRight: 20,
});
const SideArrow = styled.div({
    borderTop: '250px solid transparent',
    borderRight: '400px solid rgb(217, 217, 217)',
    borderBottom: '250px solid transparent',
    position: 'absolute',
    bottom: 0,
    right: 0,
});
const UpArrow = styled.div({
    borderLeft: '90px solid transparent',
    borderRight: '350px solid transparent',
    borderBottom: '220px solid rgb(217, 217, 217)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: '60px',
});
const Container = styled.div({
    width: '100%',
    height: '100%',
});
const CardStyle = styled(Card)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: 580,
    width: 500,
    marginLeft: 100,
    marginTop: 40,
});
const CompanyLogo = styled.div({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(217, 217, 217)',
    justifyContent: 'center',
    height: 90,
    width: 280,
    marginTop: 40,
    marginBottom: 20,
});
const Text = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 700,
    color: '#000000',
});
const Text2 = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '15px',
    lineHeight: '18px',
    fontWeight: 400,
    color: '#000000',
});
const LoginContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
    minWidth: 380,
});
const ButtonStyle = styled(Button)({
    backgroundColor: 'rgb(217, 217, 217)',
    variant: 'contained',
    color: 'black',
    fontWeight: 510,
    textTransform: 'none',
    fontSize: 16,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
});
const BoxContainer = styled(Box)({
    minWidth: '100%',
});
const DividerStyle = styled(Divider)({
    minWidth: '100%',
    marginBottom: 20,
    borderColor: 'black',
    color: 'black',
});
const SocialIconContainer = styled.div({
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
});
const IconContainer = styled.div({
    cursor: 'pointer',
    height: 50,
    minWidth: 50,
    backgroundColor: 'rgb(217, 217, 217)',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
});
const FacebookIconStyle = styled(RiFacebookFill)({
    minWidth: 40,
    height: 40,
});
const InstagramIconStyle = styled(RiInstagramLine)({
    minWidth: 40,
    height: 40,
});
const TwitterIconStyle = styled(RiTwitterFill)({
    minWidth: 40,
    height: 40,
});
const GoogleIconStyle = styled(RiGoogleFill)({
    minWidth: 40,
    height: 40,
});
const AlternativeText = styled.div({
    marginTop: 20,
    fontSize: '15px',
    fontWeight: 650,
});
const defaultValues = {
    email: '',
    password: '',
};
const LinkStyle = styled(link)({
    cursor: 'pointer',
    color: 'rgb(0, 131, 252)',
    textDecoration: 'none',
});


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
const Login = () => {
    const navigate = useNavigate();
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    // listens to window resize event and sets the state for windowdimensions 
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //login credentials
    const [formValues, setFormValues] = useState(defaultValues);
    //size of window
    //toggle password field
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        console.log(value);
        setFormValues({
            ...formValues,
            [name]: value,
        });
        console.log(formValues);
    };
    return (
        <Container>
            {windowDimensions.width < 1536 ? (<Fragment></Fragment>) : (
                <Fragment>
                    <BallStyle1 />
                    <BallStyle2 />
                    <BallStyle3 />
                    <SideArrow />
                    <UpArrow />
                </Fragment>)}
            <CardStyle>
                <CompanyLogo>
                    <Text>Regenquest Logo</Text>
                </CompanyLogo>

                <LoginContainer>
                    <Text>Sign in with your Project: Human City account.</Text>
                    <TextField
                        fullWidth
                        id='email'
                        name='email'
                        label='Email'
                        onChange={handleInputChange}
                    />
                    <FormControl fullWidth variant='outlined'>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            name='password'
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={handleClickShowPassword}
                                        edge='end'
                                    >
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label='Password'
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <ButtonStyle
                        variant='contained'
                        sx={{
                            ':hover': {
                                bgcolor: 'rgb(233, 233, 233)',
                                color: 'black',
                            },
                        }}
                        disableElevation
                        onClick={() => {
                            console.log(formValues);
                            navigate('/verification');
                        }}
                    >
                        Sign in
                    </ButtonStyle>
                    <BoxContainer>
                        <DividerStyle
                            sx={{
                                '&::before, &::after': {
                                    borderColor: 'black',
                                },
                            }}
                        >
                            <Text2>or sign in with your social media</Text2>
                        </DividerStyle>
                    </BoxContainer>
                    <SocialIconContainer>
                        <IconContainer>
                            <FacebookIconStyle />
                        </IconContainer>
                        <IconContainer>
                            <TwitterIconStyle />
                        </IconContainer>
                        <IconContainer>
                            <InstagramIconStyle />
                        </IconContainer>
                        <IconContainer>
                            <GoogleIconStyle />
                        </IconContainer>
                    </SocialIconContainer>
                    <AlternativeText>
                        No account?
                        <LinkStyle
                            onClick={() => {
                                console.log(formValues);
                                navigate('/Register');
                            }}
                        >
                            {' '}
                            Sign up.
                        </LinkStyle>
                    </AlternativeText>
                </LoginContainer>
            </CardStyle>
        </Container>







    );
};

export default Login;
