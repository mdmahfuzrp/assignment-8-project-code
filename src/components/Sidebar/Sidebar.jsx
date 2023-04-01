import React from 'react';
import './Sidebar.css'


const Sidebar = (props) => {
    const titleArray = props.blogTitle;
    const totalReadTime = props.userReadTime;
    return (
        <div className="sidebar">
            <div className="total-spent-time">
                <h3>Spent time on read: {totalReadTime} Min</h3>
            </div>
            <div className="bottom-side">
                <h1 className='bookmarked-item'>Bookmarked Blogs: {titleArray.length > 0 ? titleArray.length : 0}</h1>
                {
                    titleArray.map(title => {
                        return (
                            <div className="read-blog">
                                <h1>{title}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;