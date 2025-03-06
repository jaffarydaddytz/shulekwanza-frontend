import { takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loginUser, loginUserSuccess, loginUserFailure} from "../slices/authSlice";
import { authenticateUser } from "../api/auth";

// Define the expected structure of the login action payload
interface LoginPayload {
  email: string;
  password: string;
}

// Define the expected structure of the user response
interface UserResponse {
  status: string;
  data?: any; // Adjust this based on the actual user data structure
  message?: string;
}

// Saga to handle user login
function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const { email, password } = action.payload;

    // Call authenticateUser API function with email and password
    const user: UserResponse = yield call(authenticateUser, email, password);
    console.log("User:", user);

    // Check if authentication was successful
    if (user.status === "success") {
      // Dispatch the loginUserSuccess action with user data
      yield put(loginUserSuccess(user.data));
    } else {
      // Dispatch the loginUserFailure action with the error message
      yield put(loginUserFailure(user.message || "Login failed"));
    }
  } catch (error: unknown) {
    // Handle errors properly
    if (error instanceof Error) {
      console.error("Login error:", error.message);
      yield put(loginUserFailure(error.message));
    } else {
      console.error("An unknown login error occurred.");
      yield put(loginUserFailure("An unknown error occurred"));
    }
  }
}

// Watcher saga
function* authSaga() {
  // Listen for the loginUser action and call the handleLogin saga when dispatched
  yield takeLatest(loginUser.type, handleLogin);
}

export default authSaga;
