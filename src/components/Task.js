import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>
                {task.text} 
                <button className="btn btn-outline-danger delete-btn" style={{ cursor: "pointer" }} 
                onClick={() => onDelete(task.id)} 
                > delete</button>
            </h3>
            <span>Date</span><p> {task.day}</p>
            <span>Time</span><p> {task.time} </p>

        </div>
    )
}

export default Task
