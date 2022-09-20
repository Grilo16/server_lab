import { useState } from "react";

const DisplayContainer = function(){
    let dbResponse = false

    const [users, setUsers] = useState([])

    useState(()=>{
        fetch("http://localhost:9000/show")
        .then((res)=>res.json())
        .then((users) => setUsers(users))
    },[])

    const handleDelete = function(id){
        fetch(`http://localhost:9000/delete/${id}`, {
            method: "DELETE"
        })
    };

    const displayUsers = users.map((user) => {
        return (
            <>
            <div>
            <h3 key={user._id}>{user.name}</h3>
            <form onSubmit={() => handleDelete(user._id)}>
            <button type="submit">Delete User</button>
            </form>
            </div>

            </>
        )
    })


    return (
        <>
        <h1>I'm the display container</h1>
        {displayUsers}
        </>
    )       
};

export default DisplayContainer