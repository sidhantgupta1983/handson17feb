import React from "react";
import { Link } from "react-router-dom";

export const students = [
    {id:1, name :"Harshita"},
    {id:2, name :"Janaki"},
    {id:3, name :"Lalsa"},
    {id:4, name :"Manikumar"},
    {id:5, name :"Karthik"},
];

const Home = () => {
    
    return (
        <>
            <h1>This is a home page</h1>
            {students.map((item,index)=>(
                <div key={index}>{index+1}.<Link to={`/students/${item.id}`}>{item.name}</Link></div>
            ))}
        </>
    )
}

export default Home;
