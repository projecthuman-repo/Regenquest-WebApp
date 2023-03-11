import { useEffect, useState } from 'react';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    gql,
} from '@apollo/client';
import { useQuery } from '@apollo/client';

import { find, get } from '../../apiinterface/index';
const APIReferenceComponent = () => {
    const [allUsers, setallUsers] = useState([]);
    const [singleUserInfo, setsingleUserInfo] = useState();

    //all get functions return an array of data
    useEffect(() => {
        get('getUsers', ['userID', 'currentLevel']).then(setallUsers);
    }, []);

    //all find by ID functions return a single point of data
    useEffect(() => {
        find('findUserbyID', 'k443h3', ['userID', 'currentLevel']).then(
            setsingleUserInfo
        );
    }, []);
    console.log(setsingleUserInfo);
    // && to check the existance of the state

    return (
        <div>
            {allUsers &&
                allUsers.map((data) => <div>{JSON.stringify(data)}</div>)}
            <br />
            {singleUserInfo ? JSON.stringify(singleUserInfo) : 'loading...'}
        </div>
    );
};

export default APIReferenceComponent;
