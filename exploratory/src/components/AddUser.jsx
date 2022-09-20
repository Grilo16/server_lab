import { useState } from "react";
import InputField from "./InputField";

const AddUser = function({addUserToDb}){
    
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [activity, setActivity] = useState("")

    
    const handleSubmit = function(e){
        const newUser = {name : name, surname: surname, activity: activity}
        fetch("http://localhost:9000/add/", {
            method:"PUT", 
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json'}

        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputField label="name" setValue={setName} value={name}/>
            <InputField label="surname" setValue={setSurname} value={surname}/>
            <InputField label="ability" setValue={setActivity} value={activity}/>
            <button onSubmit={handleSubmit} type="submit">Add New user</button>
    
        </form>
    )
};

export default AddUser