import React from "react";
import { useState, useEffect } from "react";
import "./table.css";
import EditTable from "./AddEditTable";
import axios from "axios"
import ApiData from "../MyApi/ApiData";

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
                                                }}>Edit</button>
                                                <button onClick={async () => {
                                                    const res = await ApiData('delete', val, val.Username)
                                                    alert(res)
                                                }}>Delete</button>
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

                <button className="addUser" onClick={() => {
                    setEditpop(!editpop)
                    setValues("")
                }}>Add User</button>
            </div>
        </>
    )
}
