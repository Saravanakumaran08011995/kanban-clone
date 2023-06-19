import React from "react";
import { Header } from "./Header";
import Task from "./Task";
import { useDrop } from "react-dnd";

const Section = ({ status, priority, setTasks, tasksToMap }) => {
  let text = "";

  if (status === "todo") {
    text = "To Do";
  } else if (status === "onprogress") {
    text = "On Progress";
  } else if (status === "done") {
    text = "Done";
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status };
        }
        return task;
      });
      return updatedTasks;
    });
  };

  return (
    <div
      ref={drop}
      className={`w-[354px] h-full  fold:ml-10 mb-5 lg:ml-0 bg-container rounded-[16px]   ${
        isOver ? "bg-slate-200" : ""
      } `}
    >
  
      <div className="mb-2">
        <Header text={text} count={tasksToMap.length} />
      </div>
      <div>
        {tasksToMap.length > 0 &&
          tasksToMap.map((task) => (
            <Task key={task.id} task={task} priority={priority} />
          ))}
      </div>
    </div>
  );
};

export default Section;
