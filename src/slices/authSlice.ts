import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the user object (customize as needed for your user structure)
interface User {
  id: string;
  username: string;
  email: string;
}

// Define the initial state for the auth slice
interface AuthState {
  user: User | null;
  error: string | null;
  status: 'idle' | 'pending' | 'complete' | 'failed';
}

const initialState: AuthState = {
  user: null,
  error: null,
  status: 'idle',
};

// Create the auth slice using createSlice
const authSlice = createSlice({
  name: 'auth', // Slice name
  initialState, // Initial state
  reducers: {
    // Set the status to 'pending' when login starts
    loginUser(state, action:PayloadAction<{email:string; password:string}>) {
      state.status = 'pending';
    },
    // Update user data and set status to 'complete' on successful login
    loginUserSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.error = null;
      state.status = 'complete';
    },
    // Reset user data, set error message, and status to 'failed' on login failure
    loginUserFailure(state, action: PayloadAction<string>) {
      state.user = null;
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

// Export the reducer functions as actions
export const { 
  loginUser, 
  loginUserSuccess, 
  loginUserFailure 
} = authSlice.actions;

// Export the reducer function itself
export default authSlice.reducer;
