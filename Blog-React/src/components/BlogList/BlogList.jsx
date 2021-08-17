import React  from 'react';
import { data } from "../../data/data";

import './BlogList.css';

export const BlogList=()=>{
    return(
        <div className='blogList'>
            {
                   data.map((data,index)=>(
                   <div className='blogItem' key={index}>
                    <h3 className='title'>{data.title}</h3>
                    <p>{data.body}</p>
                   </div>


                   )

                   )

            }
       </div>
    )
};


