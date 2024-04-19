import React from "react"
import "./EditTable.css"
import { useState } from "react";
import ApiData from "../MyApi/ApiData";


export default function EditTable(vals) {
    console.log('----------------------------');
    console.log("vals is in Edit Table: ", vals)
    const [editpop, setEditpop] = useState(true)

    const userParam = vals.vals.Username

    const [username, setUsername] = useState(vals.vals.Username)
    const [email, setEmail] = useState(vals.vals.Email)
    const [phone, setPhone] = useState(vals.vals.Phone)

    const [apiResponse, setApiResponse] = useState("")

    function formToJSON(e) {
        return (
            {
                "Username": e.name.value,
                "Email": e.email.value,
                "Phone": e.phone.value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedData = formToJSON(e.target)
        console.log('==============');
        // setApiResponse(<ApiData meth='put' data={updatedData} />)   // returned value from MyApi component        
        setApiResponse(ApiData("put", updatedData, userParam))
        console.log('==============');

    }

    function handleUsername(e) {
        setUsername(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handleNumber(e) {
        setPhone(e.target.value)
    }

    return (
        <>
            {editpop && (
                <div className="editformdiv">

                    <span onClick={() => { setEditpop(!editpop) }}>&times;</span>
                    <form className="form" onSubmit={handleSubmit}>
                        <h3>Update details</h3>
                        <input type="text" name="name" value={username} onChange={handleUsername} />
                        <input type="email" name="email" value={email} onChange={handleEmail} />
                        <input type="number" name="phone" value={phone} onChange={handleNumber} />
                        <input type="submit" value="submit" />
                        {
                            apiResponse !== "" &&
                            <h4 >
                                {apiResponse}
                            </h4>
                        }
                    </form>
                </div>
            )
            }
        </>
    );
}