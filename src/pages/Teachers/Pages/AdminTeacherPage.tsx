import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, shulekwanzalogo } from "../../../assets";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../slices/authSlice';

import {NAVIGATE_TO_ADMINDASHBOARD} from '../../../routes/types'


const AdminTeacherPage = () => {
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








  return (
    <Box>
      This is teachers page
    </Box>

  );

};

export default AdminTeacherPage;
