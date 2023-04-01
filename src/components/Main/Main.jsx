import React, { useState, useEffect } from 'react';
import './Main.css';
import { Container } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar';
import Blog from '../Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Faq from '../Faq/Faq';


const Main = () => {
    // State for all Blogs
    const [blogs, setBlogs] = useState([]);
    const [blogTitle, setBlogTitle] = useState([]);
    const [userReadTime, setUserReadTime] = useState(0);
    // Data Load from fakeData.json
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const readItemAdded = (newBlogTitle, id) => {
        const icon = document.getElementById(`icon-no${id}`);
        icon.style.color = '#593feb';
        console.log(icon);
        if (blogTitle) {
            if (blogTitle.includes(newBlogTitle)) {
                toast.error("It's already bookmarked!")
            }
            else {
                const newTitleArray = [...blogTitle, newBlogTitle];
                setBlogTitle(newTitleArray)
                toast.success('Bookmarked successful.')
            }
        }
        else {
            setBlogTitle([newBlogTitle])
        }
    };

    const readTime = (prevReadTime) => {
        console.log(prevReadTime);
        const newReadTime = parseInt(prevReadTime);
        const totalReadTime = newReadTime + userReadTime;
        setUserReadTime(totalReadTime);
        console.log(userReadTime);
    }

    return (
        <Container className='m-auto p-0'>
            <div className="row m-auto p-0">
                <div className="blog-container col-md-8 p-0">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            readItemAdded={readItemAdded}
                            readTime={readTime}
                        ></Blog>)
                    }
                </div>
                <div className="sidebar-container col-md-4 pe-0">
                    <Sidebar
                        blogTitle={blogTitle}
                        userReadTime={userReadTime}
                        key={blogs.id}
                    ></Sidebar>
                </div>
            </div>
            <Faq></Faq>
        </Container>
    );
};

export default Main;