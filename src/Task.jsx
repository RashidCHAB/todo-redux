import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { del } from '.';
import './Task.css'
const Task = (props) => {
    const state = useSelector((inititalState) => inititalState)
    const dispatch = useDispatch()
    const handleDel = () => {
        dispatch(del(props.task.id))
    }
    return (
        <table className='tasks'>
            <tbody>
                <td className='text'> {props.task.text} </td>
                {props.task.completed ? <td className='completedTrue'>"Done"</td> : <td className='completedFalse'>"Not done"</td>}
                <td className='id'> {props.task.id} </td>
                <td><button className="deletBtn" onClick={handleDel}></button></td>
            </tbody>

        </table >
    );
};

export default Task;