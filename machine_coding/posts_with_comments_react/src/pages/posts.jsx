import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const resp = await axios.get(`https://dummyjson.com/posts`);
            const posts = resp.data.posts || [];
            setPosts(posts);
            console.log(posts);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }

    return (
        <div className='posts'>
            {posts.map(post => {
                return (
                    <div className='post'>
                        <div>
                            {post.title}
                        </div>
                        <div>
                            {post.body}
                        </div>
                        <Link to={`/posts/${post.id}`} className='view_comments'>
                            View Comments
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

export default Posts;
