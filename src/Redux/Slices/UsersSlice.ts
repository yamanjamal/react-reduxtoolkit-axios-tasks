import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { indexUser, Role } from "../../interfaces/interface";
import { RootState } from "../store";

export interface UsersState {
    Users: indexUser[];
    status: 'idle' | 'loading' | 'failed';  
  }
  
  const initialState:UsersState={
    Users: [],
    status: 'idle'
  };

  export const UsersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        SetUsers:(state, action: PayloadAction<indexUser[]>)=>{
          state.Users=action.payload
        },

        AddUser:(state, action: PayloadAction<indexUser>)=>{
          state.Users.push(action.payload)
        },

        DeleteUser:(state, action: PayloadAction<indexUser>)=>{
          state.Users=state.Users.filter(user=>user.id!==action.payload.id)
        },

        AddRoleToUser:(state, action: PayloadAction<{user:indexUser,role:Role}>)=>{
          state.Users.find(e=>e.id===action.payload.user.id)?.roles.push(action.payload.role)
        },

        RemoveRoleOfUser:(state, action: PayloadAction<{user:indexUser,role:Role}>)=>{
          const theuser=state.Users.find(e=>e.id===action.payload.user.id)
          if(theuser)
          theuser.roles=theuser.roles.filter(user=>user.id!==action.payload.role.id)
        },
    },
  });


  
  export const selectUsers = (state: RootState) => state.Users.Users;

  export const { SetUsers,AddUser,DeleteUser,AddRoleToUser,RemoveRoleOfUser } = UsersSlice.actions;

  export default UsersSlice.reducer;


