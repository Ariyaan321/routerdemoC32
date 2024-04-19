import React from "react";
import { useState, useEffect } from "react";
import "./table.css";
import EditTable from "./EditTable";
import axios from "axios"

const datas = [
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
    }

]


export default function Table() {
    const [editpop, setEditpop] = useState(false);
    const [values, setValues] = useState({ "Username": "default" });
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState("");


    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then((res) => setData(res.data))
            .catch((err) => setIsError(err.message))
    }, [])


    return (
        <>
            <div className="body">
                {
                    isError !== "" && <h1>Error occured: {isError}</h1>
                }
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
                                                    console.log('----key is:\n', key);
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
