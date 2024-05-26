import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostComments = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const { postId } = useParams();

    const fetchPostAndComments = async () => {
        try {
            setLoading(true);
            const [postResp, commentsResp] = await Promise.all(
                [
                    axios.get(`https://dummyjson.com/posts/${postId}`),
                    axios.get(`https://dummyjson.com/posts/${postId}/comments`),
                ]
            );
            setPost(postResp.data);
            setComments(commentsResp.data?.comments || []);
            console.log(postResp);
            console.log(commentsResp);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPostAndComments();
    }, []);

    if (loading) {
        return (
            <div>loading....</div>
        )
    }

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <div className='post_comments'>
            <div>
                <button onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
            <div className='post'>
                <h3>Post</h3>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
            <div className='comments'>
                <h3>Comments</h3>
                {comments.map(comment => {
                    return (
                        <div className='post'>
                            {comment.body}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default PostComments;
