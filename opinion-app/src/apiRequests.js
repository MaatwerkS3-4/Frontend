const postRequest = async(url,data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };
    fetch(`/api/${url}`, requestOptions).then((response) => {
        !response.ok ?  Promise.reject(response.status): response.json()
    })
};

const getRequest = async (url) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`/api/${url}`, requestOptions).then(response => {
        return (!response.ok ?  Promise.reject(response.status): response.json());
    })
};
const deleteRequest = async (url, data) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };
    return fetch(`/api/${url}`, requestOptions).then((response) => {
        return (!response.ok ?  Promise.reject(response.status): response);
    });
};

export const postPost = (post) => {
    console.log(post);
    
    return postRequest('post/', post);
}

export const getPostBySubString = (substring) => {
    return getRequest('post/partialString/'+substring);
}