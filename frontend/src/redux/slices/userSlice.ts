import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export type FetchUserParamsType = {
  username: string;
  password: string;
  rememberMe: boolean;
};
export const fetchUser = createAsyncThunk(
  'userManagementAPI/fetchUser',
  async (params: FetchUserParamsType) => {
    // TODO: replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data: any = {
      
    };
    if (data.responseLabel === 'error') {
      throw new Error('aborted');
    }
    return data;
  }
);

type UserManagementState = {
  user: Object;
  isConnecting: boolean;
};

const initialState: UserManagementState = {
  user: {},
  isConnecting: false,
};

const userSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload;
    },

  },
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, () => {
      console.log('fetchUser.pending');
      initialState.isConnecting = true;
    });
    builder.addCase(fetchUser.fulfilled, () => {
      initialState.isConnecting = false;
    });
    builder.addCase(fetchUser.rejected, () => {
      initialState.isConnecting = false;
    });
  },
});

export const {
  setCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
