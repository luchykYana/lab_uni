import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {userService} from '../services';

const initialState = {
    users: [],
    status: null,
    error: null,
    userForUpdate: null
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();

            initialState.users = data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
export const createUserThunk = createAsyncThunk(
    'users/createUser',
    async (newUser, {dispatch, rejectWithValue}) => {
        try {
            console.log(newUser);
            const data = await userService.create(newUser);

            dispatch(createUser({data}));
            initialState.error = null;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
);

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser',
    async ({id}, {dispatch}) => {
        try {
            await userService.deleteById(id);

            dispatch(deleteUser({id}));
        } catch (e) {
            console.log(e.message);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.users.push({
                id: new Date().getTime(),
                ...action.payload.user
            });
        },
        getUser: (state, action) => {
            const {data} = action.payload;
            console.log(data);
            state.userForUpdate = state.users.filter(u => u.email === data.email && u.password === data.password)[0]

            if (state.userForUpdate === null)
                state.error = 'Wrong email or password'
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(users => users.id !== action.payload.id);
        },
        updateUser: (state, action) => {
            state.userForUpdate = action.payload.user;
        }
    },
    extraReducers: {
        [createUserThunk.fulfilled]: (state, action) => {
            state.status = 'rejected';
            state.users = action.payload;
        },
        [createUserThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
            console.log(state.users);
        },
    }
});

const userReducer = userSlice.reducer;
const {createUser, deleteUser, updateUser, getUser} = userSlice.actions;

export default userReducer;

export const userActions = {
    createUser, deleteUser, updateUser, getUser
};
