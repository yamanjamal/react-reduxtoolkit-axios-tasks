import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "../../services/Axios";
// import { indexUser, Role ,RootObject, Task} from "../../interfaces/interface";
import { _TaskService } from "../../services/Task.Service";
// import { RootState } from "../store";

  // export interface indexTask {
  //   id: number,
  //   text: string,
  //   day: string,
  //   reminder: boolean
  // }

  // export interface TaskState {
  //   Tasks: indexTask[];
  // }
  
  const initialState={
    Tasks: [],
  };
  // const initialState:TaskState={
  //   Tasks: [],
  // };

  export const TasksSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        GetAllTask:(state, action)=>{
            // console.log(action.payload)
            state.Tasks = action.payload
        },

        ShowTask:(state, action)=>{
          state.Tasks = action.payload
        },

        AddTask:(state, action)=>{
          state.Tasks.push(action.payload)
        },

        UpdateTask:(state, action)=>{
          state.Tasks = state.Tasks.map(i => i.id == action.payload.id ? action.payload : i)
        },

        DeleteTask:(state, action)=>{
          state.Tasks = state.Tasks.filter(i => i.id !== action.payload)
        },
    },
  });

  
  export const selectTasks = (state) => state.Tasks.Tasks;

  export const { GetAllTask, ShowTask, AddTask, UpdateTask, DeleteTask } = TasksSlice.actions;

  export default TasksSlice.reducer;


  
// Actions

//  const { usersSuccess } = slice.actions

// const  URL='tasks';

// //  export const fetchtasks = () => async dispatch => {
// //     try {

// //       const s=axios.get<RootObject<any>>(`/${URL}`);
// //       console.log(s) 

// //         // await axios.get('/tasks')
// //         //     .then((response) => dispatch(GetAllTask(response.data)))
// //     }
// //     catch (e) {
// //         return console.error('s');
// //     }
// // }
// //  const { GetAllTask, startLoading, hasError} = slice.actions;
// const { GetAllTask, ShowTask, AddTask, UpdateTask, DeleteTask } = TasksSlice.actions;

// export const fetchTasks = () => async dispatch  => {
//   // try {
//      const s = await axios.get(`/${URL}`)
//      console.log(s)
//       // .then(response:<indexTask[]> => dispatch(GetAllTask(response.data)));
//   // } catch (e) {
//   //  return console.error('s');
//   // }
// };
