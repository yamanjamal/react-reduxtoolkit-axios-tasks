import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllTask } from './Redux/Slices/TasksSlice';
import { _TaskService } from './services/Task.Service';
import { useEffect } from 'react';
import Task from './component/Task';

function App() {

  const dispatch = useDispatch();
  
  const gettasks = () => {
    _TaskService.index().subscribe({
      next: (res) => {
        dispatch(GetAllTask(res.data.data));
      },
      error:(x)=>console.log(x.response.data)
    });
  };
  
  useEffect(() => {
    gettasks();
    return () => {};
  }, []); 
  
  const Tasks = useSelector((state) => state.Tasks)
  console.log(Tasks.Tasks)


  // const searchProjects = (keyword: string) => {
  //   const params = { keyword: keyword };
  //   _ProjectService
  //     .search(params)
  //     .subscribe((res) =>  ProjectsDispatch(SET(res.data.data)));
  // };

  // const deleteProject = (id: any) => {
  //   _ProjectService
  //     .destroy(id)
  //     .subscribe((res) => ProjectsDispatch(DELETE(id)));
  // };

  // const reserveProject = (id: number) => {
  //   _ProjectService
  //     .reserve(id)
  //     .subscribe((res) => ProjectsDispatch(RESERVE(res.data.data)));
  // };

  // const HandleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setkeyword(event.target.value);
  //   searchProjects(event.target.value);

  // };

  return (
    <div className="App">
       {Tasks.Tasks.map((task,index) => {
          return <Task task={task} key={index} />
        })}
      <h1>hello dude </h1>
    </div>
  );
}

export default App;
