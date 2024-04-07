import React from "react";
import { useState } from "react";
import "./table.css";
import EditTable from "./EditTable";

const data = [
    {
        "Username": "Aa",
        "Email": "Aa@gmail.com",
        "Phone": "123456",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    },
    {
        "Username": "Bb",
        "Email": "Bb@gmail.com",
        "Phone": "9994396",
    }

]


export default function Table() {
    const [editpop, setEditpop] = useState(false);
    const [values, setValues] = useState({ "Username": "default" });
    return (
        <>
            <div className="body">
                <div className="tablecss">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.Username}</td>
                                            <td>{val.Email}</td>
                                            <td>{val.Phone}</td>
                                            <td className="actionbutton">
                                                <button onClick={() => {
                                                    setEditpop(!editpop)
                                                    setValues(val)
                                                }}>Edit</button>
                                                <button>Delete</button>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>


                    </table>


                </div>

                {/* For Edit popup */}
                {
                    editpop && (
                        <EditTable vals={values} />
                    )
                }
                {/* For Edit popup */}

                <button className="addUser">Add User</button>
            </div>
        </>
    )
}
