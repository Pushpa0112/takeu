"use client";

import { useEffect, useState } from "react";

export default function Users() {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const response = await fetch(
                    "http://localhost:5003/api/users"
                );

                const data = await response.json();

                setUsers(data);

            } catch (error) {

                console.log(error);
            }
        };

        fetchUsers();

    }, []);

    return (
        <div>

            <h1>Users List</h1>

            {
                users.map((user) => (

                    <div key={user.id}>
                        <h2>{user.name}</h2>
                    </div>

                ))
            }

        </div>
    );
}