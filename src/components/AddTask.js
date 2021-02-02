import React, { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const AddTask = ({ onAdd }) => {

    const [id, setId] = useState("");
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            toast.error("Please add a task", 
            {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000});

            return
        }

        onAdd({id, text, day, time, reminder})

        setId(Math.floor(Math.random() * 1000000) + 1)
        setText("")
        setDay("")
        setTime("")
        setReminder(false)

        console.log(id);
    }

    return (
        <form className="add-form" onSubmit={onSubmit} >

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Task</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="input-group">
                <span className="input-group-text">Date and Time</span>
                <input type="Date" aria-label="First name" className="form-control" value={day} onChange={(e) => setDay(e.target.value)} />
                <input type="Time" aria-label="Last name" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" 
                value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                <label className="form-check-label">
                    Set Reminder
                </label>
            </div>

            <div className="d-grid gap-2">
                <input className="btn btn-outline-info" type="submit" value="Save Task"/>
            </div>

        </form>
    )
}

export default AddTask
