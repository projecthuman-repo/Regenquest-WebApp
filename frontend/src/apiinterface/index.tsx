const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
};

export const get = async (name: string, parameters: string[]) => {
    const request = `${process.env.REACT_APP_API_ENDPOINT}?key=${
        process.env.REACT_APP_API_KEY
    }&query= query{${name}{${parameters.join(' ')}}}`;
    return fetch(request, { headers, mode: 'cors' })
        .then((data) => data.json())
        .then(({ data }) => data[name]);
};
export const find = async (name: string, _id: string, parameters: string[]) => {
    const getIDType = (type: string) => {
        switch (name) {
            case 'findUserbyID':
                return 'userID';
            case 'findTaskbyID':
                return 'taskID';
            case 'findQuestbyID':
                return 'questID';
            case 'findPostbyID':
                return 'postID';
            case 'findInventoryItembyID':
                return 'itemID';
            case 'findEventbyID':
                return 'eventID';
            case 'findCommunitybyID':
                return 'communityID';
            default:
                throw new Error('Error at find function, invalid');
        }
    };
    // https://my-gateway-6qkoui4z.uc.gateway.dev/regenquest?query=query{findUserbyID(userID:"k443h3"){currentLevel motive userID}}&key=mykey123
    const query = `query{
        ${name}(${getIDType(name)}:"${_id}"){
            ${parameters.join(' ')}
        }
    
    }`;
    console.log(query);
    const request = `${process.env.REACT_APP_API_ENDPOINT}?key=${process.env.REACT_APP_API_KEY}&query=${query}`;
    return fetch(request, { headers, mode: 'cors' }).then((data) =>
        data.json()
    );
};
