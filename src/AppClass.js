import React, { Fragment, useEffect, useState } from 'react';

function HelloWorld() {

    const [usersList, setUsers] = useState([]);
    
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

      
    return (
        <Fragment>
            <hr />
            <h1 className="h1-red">Hello, world!!</h1>
        </Fragment>
        
    );
}

export default HelloWorld;