import React from 'react';
import Card from 'react-bootstrap/Card';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const { id, author_name, blog_title, images, read_time, topics, publish_date } = props.blog;
    const readItemAdded = props.readItemAdded;
    const readTime = props.readTime;

    return (
        <Card className='single-card' style={{ width: '100%' }}>
            <Card.Img variant="top" className='cover-image' src={images.blog_cover_image} />
            <Card.Body className='card-body'>
                <div className='top-details d-flex justify-content-between align-items-center'>
                    <div className="left-publisher">
                        <img className='publisher-img' src={images.author_image} alt="" />
                        <div className="publisher-info">
                            <h2 className='publisher-name'>{author_name}</h2>
                            <p className='publish-date'>{publish_date}</p>
                        </div>
                    </div>
                    <div className="right-time-bookmark">
                        <p id='read-time'>{read_time} min read 
                            <button className='bookmark-icon' id={`icon-no${id}`} onClick={()=>readItemAdded(blog_title, id)}><FontAwesomeIcon icon={faBookmark} /></button>
                        </p>
                    </div>
                </div>
                <h1 className="blog-title">{blog_title}</h1>
                <div className="topics">
                    <span>{topics.first_topic}</span>
                    <span>{topics.second_topic}</span>
                </div>
                <button onClick={()=>readTime(read_time)} className='mark-as-read'>Mark as read</button>
            </Card.Body>
        </Card>
    );
};

export default Blog;