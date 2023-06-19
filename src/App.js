import React, { useState } from "react";
import ListTask from "./Components/ListTask";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MultiBackend , TouchTransition } from 'react-dnd-multi-backend';
import { Sidebar } from "./Components/Sidebar";

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
    },
    {
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
};

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "BrainStroming",
      priority: "low",
      desc: "Brainstorming brings team members' diverse experience into play.",
      comments: 12,
      files: 0,
      status: "todo",
      img: null,
    },
    {
      id: 2,
      taskName: "Research",
      priority: "high",
      desc: "User research helps you to create an optimal product for users.",
      comments: 10,
      files: 3,
      status: "todo",
      img: null,
    },
    {
      id: 3,
      taskName: "Wireframes",
      priority: "high",
      desc: "Low fidelity wireframes include the most basic content and visuals.",
      comments: 10,
      files: 3,
      status: "todo",
    },
    {
      id: 4,
      taskName: "Onboarding Illustrations ",
      priority: "low",
      desc: "",
      comments: 14,
      files: 15,
      status: "onprogress",
      img: "https://cdn.pixabay.com/photo/2021/07/18/13/11/watercolor-6475471_1280.png",
    },
    {
      id: 5,
      taskName: "Moodboard",
      priority: "low",
      desc: "",
      comments: 9,
      files: 10,
      status: "onprogress",
      img: "https://cdn.pixabay.com/photo/2018/12/16/18/05/couch-3879012_1280.png",
    },
    {
      id: 6,
      taskName: "Mobile App Design",
      priority: "completed",
      desc: "",
      comments: 12,
      files: 15,
      status: "done",
      img: "https://cdn.pixabay.com/photo/2017/01/29/13/20/laptop-2017978_1280.png",
    },
    {
      id: 7,
      taskName: "Design System",
      priority: "completed",
      desc: "It just needs to adapt the UI from what you did before ",
      comments: 12,
      files: 15,
      status: "done",
      img: "",
    },
  ]);

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="lg:flex">
        {/* SideBar  */}
        <div>
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="bg-white w-screen h-screen flex flex-col items-center pt-3 gap-16">
          <ListTask tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
