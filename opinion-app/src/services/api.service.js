import {AXIOS} from "../http-common"

export const handleGetDiscussionById = (id) =>{
    return AXIOS.get(`/discussion/${id}`)
        .then(response =>{return response.data});
};

export const handlePostNewDiscussion = (createDiscussionDTO) =>{
    return AXIOS.post(`/discussion`, createDiscussionDTO)
        .then(res =>{ return res.data});
};
export const handlePostNewComment = (discussionId, createCommentDTO) =>{
    return AXIOS.post(`/comment/${discussionId}`, createCommentDTO)
        .then(res => {return res.data})
};

export const handleGetAllDiscussionInfos = () => {
  return AXIOS.get(`/discussion_info`)
      .then(res => {return res.data})
};

export const handleGetDiscussionInfoById = (discussionId) =>{
    return AXIOS.get(`/discussion_info/id/${discussionId}`)
        .then(res => {return res.data})
};

export const handleGetUserById = (id) =>{
    return AXIOS.get(`/users/${id}`)
        .then(res => {return res.data})
};