import React from "react";
import { students } from "./Home";
import {Link, useParams } from "react-router-dom";


const Student = () => {
    
    const value = useParams();
    console.log(value.stuId);
    console.log(students);
    return(
        <>
            <h1>This is a student page</h1>
            <h2>The student is 
                {students.map((item) => {
                    if(item.id===Number(value.stuId)){
                        return (
                            <span>{item.name}</span>
                        )
                    }
                    return(<></>)
                })}
            </h2>
            <Link to='/home'>Home</Link>
        </>
    )
}

export default Student;