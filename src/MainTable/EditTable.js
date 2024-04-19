import React from "react"
import "./EditTable.css"
import { useState } from "react";
import ApiData from "../MyApi/ApiData";
import { formToJSON } from "axios";


export default function EditTable(vals) {
    console.log('----------------------------');
    console.log("vals is in Edit Table: ", vals)
    const [editpop, setEditpop] = useState(true)
    return (
        <>
            {editpop && (
                <div className="editformdiv">

                    <span onClick={() => { formToJSON(); setEditpop(!editpop) }}>&times;</span>
                    <form className="form">
                        <h3>Update details</h3>
                        <input type="text" defaultValue={vals.vals.Username} />
                        <input type="email" defaultValue={vals.vals.Email} />
                        <input type="number" defaultValue={vals.vals.Phone} />
                    </form>
                    <button onClick={console.log('--------form json: ', formToJSON)}>
                        <p>Submit</p>
                    </button>
                </div>
            )
            }
        </>
    );
}