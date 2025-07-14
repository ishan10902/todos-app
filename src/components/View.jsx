import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import axios from 'axios';

const View = () => {
    const [todo, changeTodo] = useState(
        [
            
        ]
    )
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeTodo(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <NavBar/>
            <h1 align="center">VIEW TODO</h1>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todo.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.userId}</td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>
                                            {value.completed ? (
                                                <span className="badge bg-success">Completed</span>
                                            ) : (
                                                <span className="badge bg-warning text-dark">Pending</span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default View