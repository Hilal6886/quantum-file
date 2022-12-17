import React from 'react';
import './blog.css'
import {GrLocation} from 'react-icons/gr'
import img from '../../Assets/img.jpg'

const posts = [
    
    {
        id:1,
        postImage: img,
        title:'Dal Lakh',
        description: 'Dal is a lake in Srinagar Dal Lake is a misnomer as Dal in Kashmiri means lake, the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir',
    },
];

const Blog = () => {
    return (
     <section className='blog crescent section'>
        <div className="secContaine">
            <div className="secitro">
                <h2 className='secTile'> 
                Our belog  ?
                </h2>
                <p>
                    An insight to the incredible experince in the world.
                </p>
            </div>
            <div className="mainCotainer grid">
                {
                    posts.map((id, postImage, title, description )=>{
                        return (
                            <div className="snglePost grid">
                    <div className="imgDev">
                        <img src={postImage} alt={title}/>
                    </div>
                     <div className="postDetails">
                        <h3>
                            {title}
                        </h3>
                        <p>{description}</p>
                     </div>
                     <a href='/' className='flex'>
                     <GrLocation className="icon"/>
                     Read More
                     </a>

                </div>
                        )
                    })
                }
               
            </div>
        </div>
       
     </section>
    )
}
export default Blog