import React, { useState, useEffect } from "react";
import UserList from "../components/users/UserList";
import ApiRequest from '../helpers/request';

interface ExpenseProps {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: any;
    user: any;
    timeStamp: string;
}

interface UserProps {
    name: string;
    budget: BigInt;
    expenses: ExpenseProps[];
    pots: PotProps[];
}

interface PotProps {
    title: string;
    amount: BigInt;
    user: any;

}

interface UserListProps {
    users: UserProps[];
}

const UserContainer = () => {

    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        const request = new ApiRequest();
        const userPromise = request.get('/api/users')
        userPromise
        .then((data: any) => setUsers(data))
    },[])

    return (
        <>
        <UserList users={users} />
        </>
    )
}
export default UserContainer;