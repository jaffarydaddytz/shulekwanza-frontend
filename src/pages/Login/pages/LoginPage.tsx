import React, { useState, useEffect } from 'react';
import { Box, Button, Card, Container, FormControl, FormLabel, Input, Stack, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { shulekwanzalogo } from '../../../assets';
import { NAVIGATE_TO_ADMINDASHBOARD } from '../../../routes/types';



import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../slices/authSlice';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state to handle form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    // Access the login status from the Redux store
    const { status, user, message } = useSelector((state: any) => state.auth);
    const state = useSelector((state:any) => state)
    console.log("Redux State:", state); // Check the full Redux state


  //handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    //basic validation
    if (!email || !password){
      setError("email and pwd are required");
    } else {
      setError("")
      setEmail("")
      setPassword("")
      console.log(" login email:",email);
      console.log(" login password:",password);
    }


        // Dispatch the login action
        dispatch(loginUser({ email, password }));
      
  }

    // Use useEffect to check login status and navigate on success
    useEffect(() => {
      if (status === "complete") {
        // Successful login, navigate to home page
        console.log("user details", user);
        navigate(NAVIGATE_TO_ADMINDASHBOARD);
      } else if (status === "failure") {
        // Handle failure (show error message or similar)
        setError(message || "Login failed");
      }
    }, [status, message, navigate]); 

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dde6f0',
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
 



    }}>


        <Stack
          sx={{
            maxWidth: "500px",
            gap: 2,
          
            borderRadius: 4,
          }}>
          <Card>
            {/*     <Box  >
    <img alt='logo' src={shulekwanzalogo}  height={50} width={50} />
    </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                alt="logo"
                src={shulekwanzalogo}
                style={{
                  width: "25%",
                  height: "25%",
                  objectFit: "cover",
                }}
              />
            </Box>


            <form onSubmit={handleSubmit}>
            <FormControl required>
              <FormLabel>Email</FormLabel>
              <Input 
              type="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               />
            </FormControl>
            <FormControl required>
              <FormLabel>Password</FormLabel>
              <Input 
              type="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

              <Link to="#" style={{ textDecoration: "none" }}>
                <Typography level="body-xs" sx={{}}>
                  {" "}
                  forgot password?
                </Typography>
              </Link>
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Button 
              type="submit"

              >LOGIN</Button>
            </FormControl>
            </form>
          </Card>
        </Stack>
      </Box>

  );
}

export default LoginPage;