import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../contexts/BlogContext';
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";

function Post() {
    const { modifyDate, post } = useContext(BlogContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!post || !post.content) {
            navigate("/");
        }
    }, [post, navigate]);


    if (!post || !post.content) {
        return (
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
                <p className="text-center text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {post.Title}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                {post.Name}
            </h2>
            <p className="text-sm text-gray-500 mb-6">
                Published on {modifyDate(post.Date)}
            </p>
            <div className="prose max-w-none">
                {parse(post.content)}
            </div>
        </div>
    );
}

export default Post;
