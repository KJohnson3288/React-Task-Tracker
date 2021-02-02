import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Customers from "./components/customers/customers";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";





function App() {

  const [showForm, setShowForm] = useState(false);

  const [tasks, setTasks] = useState([]);


  //Get data from API
  useEffect(() => {
    axios.get("/api/tasks")
      .then((res) => {
        console.log(res);
        console.log("Connection is completed to the back-end!");
        setTasks(res.data)
      }).catch((err => {
        console.log(err);
      }))
  }, []);

  //Add Task
  const addTask = async (task) => {

   await axios.post("http://localhost:5000/api/tasks", {
      headers: {
        "content-type": "application/json"
      },
      body: task,
    })
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      })

    const data = await task

    setTasks([...tasks, data])

  }

  //Delete Task

  const deleteTask = async (id) => {

    await axios.delete(`http://localhost:5000/api/tasks/${id}`)

    console.log("Task deleted");

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">

      <Header onAdd={() => setShowForm(!showForm)} />
      {showForm && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Task currently added"}

    </div>
  );
}

export default App;
