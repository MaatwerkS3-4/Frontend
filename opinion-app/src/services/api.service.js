import {AXIOS} from "../http-common"

export const handleGetDiscussionById = (id) =>{
    return AXIOS.get(`/discussion/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem("Session")
        }
    })
        .then(response =>{return response.data});
};

export const handlePostNewDiscussion = (createDiscussionDTO) =>{
    return AXIOS.post(`/discussion`, createDiscussionDTO, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem("Session")
        }

    })
        .then(res =>{ return res.data});
};
export const handlePostNewComment = (discussionId, createCommentDTO) =>{
    return AXIOS.post(`/comment/${discussionId}`, createCommentDTO, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem("Session")
        }

    })
        .then(res => {return res.data})
};

export const handlePostReply = (discussionId, parentId, createCommentDTO) => {
    return AXIOS.post(`/comment/${discussionId}/reply/${parentId}`, createCommentDTO, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem("Session")
        }

    })
        .then(res => {return res.data})
};

export const handleGetAllDiscussionInfos = () => {
    const jwt = localStorage.getItem("Session");
    return AXIOS.get(`/discussion_info`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Authorization': jwt
        }})
        .then(res => {return res.data});
};

export const handleGetDiscussionInfoById = (discussionId) =>{
    return AXIOS.get(`/discussion_info/id/${discussionId}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem("Session")
        }})
        .then(res => {return res.data})
};

export const handleGetUserById = (id) =>{
    return AXIOS.get(`/users/${id}`)
        .then(res => {return res.data})
};

export const handleLogin = (user) => {
    return AXIOS.post("/users/login", user)
        .then(res => {return res.data})
}

export const handlePostUser = (user) => {
    return AXIOS.post("/users/", user)
        .then(res => {return res.data})
}

export const handleDiscussionUpvote = (discussionId) => {
    return AXIOS.post("/discussion/"+discussionId+"/upvote", null, {
        method:'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':localStorage.getItem("Session")
        }
    })
}

export const handleCommentUpvote = (commentId) => {
    return AXIOS.post("/comment/"+commentId+"/upvote", null, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem("Session")
        }});
    }

export const handleGetAvailableCategories = () => {
    return AXIOS.get('/category/reverse')
        .then(res => {return res.data})
}

export const handleGetDiscussionInfosByUser = () => {
    return AXIOS.get("/discussion_info/user/", { method: 'GET',
    mode: 'cors',
    headers: {
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem("Session")
    }
    }).then(res => {
        return res.data
    })
}

export const handleGetCommentsByUserId = (posterId) =>{
    return AXIOS.get("/comment/"+posterId, {
        method: 'GET',
        mode: 'cors'
    }).then(res =>{
        return res.data
    })
}