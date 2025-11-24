import { useState } from "react"

export default function DisplayName(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const firstNameHandler = (e)=>{
        setFirstName(e.target.value);
    }

    const lastNameHandler = (e)=>{
        setLastName(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!firstName || !lastName){setFullName("") return}
        const finalName = `Full Name: ${firstName} ${lastName}`;
        setFullName(finalName);
        
        
    }

    return(
        <>
        <h1>Full Name Display</h1>
        <form onSubmit={submitHandler}>
            <label>First Name: </label>
            <input type="text" onChange={firstNameHandler} required/> <br />
            <label>Last Name: </label>
            <input type="text" onChange={lastNameHandler} required/> <br />
            <button type="submit">Submit</button> <br />
        </form>
        <h1>{fullName}</h1> 
        </>
    )
}
