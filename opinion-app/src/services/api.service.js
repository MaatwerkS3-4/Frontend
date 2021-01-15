import {AXIOS} from "../http-common"

export const handleGetDiscussionById = (id) =>{
    console.log(`Retrieving discussion with id ${id}...`)
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
    console.log(`Posting new discussion:`, createDiscussionDTO);
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
    console.log(`Posting new comment on discussion with id ${discussionId}:`, createCommentDTO);
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
    console.log(`Posting a reply on comment with id ${parentId} on the discussion with id ${discussionId}`, createCommentDTO);
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
    console.log("JWT", jwt);
    console.log(`Retrieving all discussion infos...`);
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
    console.log(`Retrieving discussion info with id ${discussionId}...`);
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
    console.log(`Retrieving user with id ${id}...`)
    return AXIOS.get(`/users/${id}`)
        .then(res => {return res.data})
};

export const handleLogin = (user) => {
    console.log("attempting to log in...")
    return AXIOS.post("/users/login", user)
        .then(res => {return res.data})
}

export const handlePostUser = (user) => {
    console.log("attempting to register user")
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
    console.log(`Retrieving all categories...`);
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
        console.log(res.data);
        return res.data
    })
}