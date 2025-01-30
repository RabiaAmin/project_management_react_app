import { useState } from "react";
import AddNewProject from "./components/AddNewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { SideBar } from "./components/SideBar";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }
  function handleCancleAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  function handleDelete(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
      }
    });
  }

  function handleAddProject(newProjectData){
      

    setProjectState(prevState =>{
     const newProject = {
      ...newProjectData,
      id: Math.random(),
     }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects , newProject]
      }
    })
  }

  function handleSelectedProject(id){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }

  function handleAddTask(task){
    setProjectState(prevState =>{
      const newTask = {
       text:task,
       projectId:prevState.selectedProjectId,
       id: Math.random(),
      }
 
       return {
         ...prevState,
         tasks: [...prevState.tasks , newTask]
       }
     })
     
  }
function handleDeleteTask(id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>task.id !== id) 
      }
    })
  }

  const selectedProject =  projectState.projects.find(project => project.id === projectState.selectedProjectId);

 let content = 
 <SelectedProject
  project={selectedProject} 
  onDelete={handleDelete} 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks}
  />;
 if(projectState.selectedProjectId===undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
 }else if(projectState.selectedProjectId === null){
  content = <AddNewProject  onAdd={handleAddProject} onCancle={handleCancleAddProject} /> 
 }

  return (
    <main className="pt-8 h-screen w-screen flex gap-8 mr-4 ">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectedProject} />
      {content}
      
    </main>
  );
}

export default App;
