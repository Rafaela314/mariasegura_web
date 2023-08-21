import React, { Fragment, useEffect, useRef, useState } from 'react';
import Input from './Input';

function HelloWorld() {

    const [usersList, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");

    const firstNameRef = useRef();
    const lastNameRef = useRef(null);
    const dobRef = useRef(null);


    
    useEffect(() => {

        let users = [
            {
                id: 1,
                firstName: "Maria",
                lastName: "Silva",
                dob: "1987-05-02",

            },
            {
                id: 2,
                firstName: "Marlene",
                lastName: "Pereira",
                dob: "1997-07-03",

            }
        ]
        setUsers(users);

    },[]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (lastName !== "") {
            addUser(firstName, lastName, dob);
        }


    }

    const addUser = (newFirst, newLast, newDOB) => {
        let newUser = {
            id: usersList.length() + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOB,
        }

        const newUserList = usersList.concat(newUser);

        const sorted = newUserList.sort((a,b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        setUsers(sorted);
        setDob("");
        setLastName("");
        setFirstName("");

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";       
    }

      
    return (
        <Fragment>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="firts-name"> First Name</label>
                    <input 
                    type="text" 
                    name="first-name" 
                    id="first-name" 
                    ref={firstNameRef}
                    autoComplete="first-name-new" 
                    className="form-control"
                    onChange={(event) => setFirstName(event.target.value)}
                    ></input>
                </div>
                <Input 
                title="Last Name"
                type="text"
                ref={lastNameRef}
                name="last-name"
                autoComplete="last-name-new"
                className="form-control"
                onChange={(event) => setLastName(event.target.value)}
                ></Input>

                <Input 
                title="ate of Birth"
                type="date"
                ref={dobRef}
                name="dob"
                autoComplete="dod-new"
                className="form-control"
                onChange={(event) => setDob(event.target.value)}
                ></Input>

                <input type="submit" value="Submit" className="btn btn-primary"></input>
            </form>
            <div>
                First Name: {firstName} <br />
                Last Name: {lastName} <br />
                DOB: {dob} <br />
            </div>
            <hr />
            <h3>Users</h3>
            <ul className="list-group">
                {usersList.map((m) => (
                    <li key={m.id} className="list-group-item"> 
                        {m.firstName}
                    </li>
                ))}
            </ul>
        </Fragment>
        
    );
}

export default HelloWorld;