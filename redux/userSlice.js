import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersApi, followUserApi } from '../services/api'; 


export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const users = await fetchUsersApi();
  return users;
});


export const followUser = createAsyncThunk('user/followUser', async (userId) => {
  await followUserApi(userId);
  return userId;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const userId = action.payload;
       
      });
  },
});

export default userSlice.reducer;
