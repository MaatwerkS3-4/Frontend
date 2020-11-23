import {AXIOS} from "./http-common"
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
    return postRequest('api/post', post);
}

export const getPostBySubString = (substring) => {
    return getRequest('api/post/partialString/'+substring)
}

export const getAllPosts = () => {
    return getRequest('api/post/')
}

export const getPostComments = (postId) => {
    return getRequest('api/comment/postId/'+postId)
}

export const postComment = (comment) => {
    return postRequest('/api/comment', comment)
}