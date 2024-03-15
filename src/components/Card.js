import React, { useState, useEffect } from 'react';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    const { course, likedCourses, setLikedCourses } = props;

    const [readmore, setReadmore] = useState(false);
    const desc = readmore ? course.description : course.description.substring(0, 100) + '...';

    function descriptionHandler() {
        setReadmore(!readmore);
    }

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses(prev => prev.filter(cid => cid !== course.id));
            toast.warning("Like removed");
        } else {
            setLikedCourses(prev => [...prev, course.id]);
            toast.success("You liked");
        }
    }

    return (
        <div className='col-md-4 my-2'>
            <div className="card">
                <div className='position-relative'>
                    <img src={course.image.url} className="card-img-top" alt={course.image.alt} />
                    <div onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? (
                            <FcLike className='position-absolute bottom-0 end-0 me-2 mb-2' style={{ fontSize: '30px' }} />
                        ) : (
                            <FcLikePlaceholder className='position-absolute bottom-0 end-0 me-2 mb-2' style={{ fontSize: '30px' }} />
                        )}
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text" onClick={descriptionHandler}>{desc}
                        <span className='text-primary'> {readmore ? 'show less' : 'read more'} </span>
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
