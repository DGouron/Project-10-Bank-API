import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenLocaly, saveTokenLocaly } from '../../helpers/token';
import { FetchModifyUserNameParamsType, FetchUserParamsType, userLoginRequest, userModifyNameRequest, userProfileRequest } from '../../services/api';
import { User } from '../../schema/userSchema';

export const fetchUserLogin = createAsyncThunk(
  'userManagementAPI/fetchUser',
  async (params: FetchUserParamsType) => {
    const data = await userLoginRequest(params);
    return data;
  }
);

export const fetchUserProfil = createAsyncThunk(
  'userManagementAPI/fetchUserProfile',
  async () => {
    const data = await userProfileRequest();
    return data;
  }
);

export const fetchModifyUserName = createAsyncThunk(
  'userManagementAPI/fetchModifyUserName',
  async (params: FetchModifyUserNameParamsType) => {
    const data = await userModifyNameRequest(params);
    return data;
  }
);

type UserManagementState = {
  isConnecting: boolean;
  isConnected: boolean;
  isFetchingProfile: boolean;
  userProfile: User | undefined;
};

const initialState: UserManagementState = {
  isConnecting: false,
  isConnected: getTokenLocaly() !== null,
  isFetchingProfile: false,
  userProfile: undefined,
};

const userSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.userProfile = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.isConnecting = true;
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.isConnecting = false;
        saveTokenLocaly(action.payload.body.token);
        state.isConnected = true;
      }
    });
    builder.addCase(fetchUserLogin.rejected, (state) => {
      state.isConnecting = false;
    });
    builder.addCase(fetchUserProfil.pending, (state) => {
      state.isFetchingProfile = true;
    });
    builder.addCase(fetchUserProfil.fulfilled, (state, action) => {
        state.isFetchingProfile = false;
        if ('data' in action.payload) {
          state.userProfile = action.payload.data as User;
        }
    });
    builder.addCase(fetchUserProfil.rejected, (state) => {
      state.isFetchingProfile = false;
    });
    builder.addCase(fetchModifyUserName.pending, (state) => {
      state.isFetchingProfile = true;
    });
    builder.addCase(fetchModifyUserName.fulfilled, (state, action) => {
        state.isFetchingProfile = false;
        if ('data' in action.payload) {
          state.userProfile = action.payload.data as User;
        }
    });
    builder.addCase(fetchModifyUserName.rejected, (state) => {
      state.isFetchingProfile = false;
    });
  },
});

export const {
  setCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
