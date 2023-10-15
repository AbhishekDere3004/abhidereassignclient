import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signinApi, signupApi } from '../services/api';     
import { setToken, removeToken } from '../utils/authHelper'; 


export const signin = createAsyncThunk('auth/signin', async (credentials) => {
  const response = await signinApi(credentials);
  const { token } = response;
  setToken(token);
  return token;
});


export const signup = createAsyncThunk('auth/signup', async (userData) => {
  await signupApi(userData);

  return null;
});


export const signout = createAsyncThunk('auth/signout', async () => {
  removeToken();
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signin.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
      })
      .addCase(signup.fulfilled, (state) => {
        
      })
      .addCase(signout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = '';
      });
  },
});

export default authSlice.reducer;
