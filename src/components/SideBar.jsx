import React from "react";
import Button from "./Button.jsx";


export const SideBar = ({ onStartAddProject, projects ,onSelectProject ,selectedProjectId}) => {
  return (
    <aside className="w-1/6  bg-stone-900 rounded-r-xl  text-stone-50 px-4  sm:px-8 py-14">
      <h1 className="mb-8 font-bold md:text-xl uppercase text-stone-200">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass = "w-full px-3 py-2 my-1  rounded-sm hover:text-stone-200 hover:bg-stone-800  text-left";

          if(project.id === selectedProjectId){
                  cssClass += "  bg-stone-800 text-stone-200 "
          }else{
              cssClass += "   text-stone-400"
          }
         
         return ( <li key={project.id}>
            <button  onClick={()=>onSelectProject(project.id)} className={cssClass}>
              {project.title}
            </button>
          </li>)
        }
        )}
      </ul>
    </aside>
  );
};
