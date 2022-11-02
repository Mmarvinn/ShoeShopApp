import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAccount } from '../getAccount';
import { deleteJwtToken, setJwtToken } from '../../../services/localStorage';
import { userSignIn } from '../userSignIn';
import { userLogIn } from '../userLogIn';
import { updateUserAccountApi } from '../updateUserAccount';
import { updateUserPasswordApi } from '../updateUserPassword';

export const fetchUser = createAsyncThunk('getUser', getAccount);
export const signInUser = createAsyncThunk(
  'signInUser',
  async (user, thunkApi) => {
    const res = await userSignIn(user);
    const data = await res.json();

    if (!res.ok) {
      return thunkApi.rejectWithValue(data);
    }

    setJwtToken(data.token);
    return data.account;
  }
);

export const logInUser = createAsyncThunk(
  'logInUser',
  async (user, thunkApi) => {
    const res = await userLogIn(user);
    const data = await res.json();

    if (!res.ok) {
      return thunkApi.rejectWithValue(data);
    }

    setJwtToken(data.token);
    return data.account;
  }
);

export const updateUserAccount = createAsyncThunk(
  'updateUserAccount',
  async (user, thunkApi) => {
    const res = await updateUserAccountApi(user);
    const data = await res.json();

    if (!res.ok) {
      return thunkApi.rejectWithValue(data);
    }

    return data;
  }
);

export const updateUserPassword = createAsyncThunk(
  'updateUserPassword',
  async (user, thunkApi) => {
    const res = await updateUserPasswordApi(user);
    const data = await res.json();

    if (!res.ok) {
      return thunkApi.rejectWithValue(data);
    }

    return data;
  }
);

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      deleteJwtToken();
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(signInUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(logInUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(updateUserAccount.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateUserAccount.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    });

    builder.addCase(updateUserAccount.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(updateUserPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateUserPassword.fulfilled, (state) => {
      state.error = null;
      state.loading = false;
    });

    builder.addCase(updateUserPassword.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
