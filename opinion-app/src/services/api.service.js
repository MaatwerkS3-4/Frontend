import {AXIOS} from "../http-common"

export const handleGetDiscussionById = (id) =>{
    console.log(`Retrieving discussion with id ${id}...`)
    return AXIOS.get(`/discussion/${id}`)
        .then(response =>{return response.data});
};

export const handlePostNewDiscussion = (createDiscussionDTO) =>{
    console.log(`Posting new discussion:`, createDiscussionDTO);
    return AXIOS.post(`/discussion`, createDiscussionDTO)
        .then(res =>{ return res.data});
};
export const handlePostNewComment = (discussionId, createCommentDTO) =>{
    console.log(`Posting new comment on discussion with id ${discussionId}:`, createCommentDTO);
    return AXIOS.post(`/comment/${discussionId}`, createCommentDTO)
        .then(res => {return res.data})
};

export const handleGetAllDiscussionInfos = () => {
    console.log(`Retrieving all discussion infos...`);
    return AXIOS.get(`/discussion_info`)
        .then(res => {return res.data});
};

export const handleGetDiscussionInfoById = (discussionId) =>{
    console.log(`Retrieving discussion info with id ${discussionId}...`);
    return AXIOS.get(`/discussion_info/id/${discussionId}`)
        .then(res => {return res.data})
};

export const handleGetUserById = (id) =>{
    console.log(`Retrieving user with id ${id}...`)
    return AXIOS.get(`/users/${id}`)
        .then(res => {return res.data})
};