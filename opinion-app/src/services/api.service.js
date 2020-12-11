import {AXIOS} from "../http-common"

const getRequest = (url) => {

    return AXIOS.get(`${url}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
        },
    }).then((response) => {

        return response;
    })
        .catch(e => {
            console.log(e);
        });
};
const postRequest = (url, data) => {
        return AXIOS.post(url, data)
};


export const postPost = (post) => {
    return postRequest('api/discussion', post);
}

export const getPostBySubString = (substring) => {
    return getRequest('api/discussion/partialString/'+substring)
}

export const getAllPosts = () => {
    return getRequest('api/discussion/')
}

export const getPostComments = (postId) => {
    return getRequest('api/comment/postId/'+postId)
}

export const postComment = (comment) => {
    return postRequest('/api/comment', comment)
}

export const postUser = (user) => {
    return postRequest('/users', user)
}