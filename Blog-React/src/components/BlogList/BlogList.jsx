import React,{Component}  from 'react';
import { data } from "../../data/data"
import { getBlogs } from '../../services/blogService';
import { BlogItem } from '../BlogItem/BlogItem';

import './BlogList.css';

// export const BlogList=()=>{
//     return(
//         <div className='blogList'>
//             {
//                    data.map((data,index)=>(
//                    <div className='blogItem' key={index}>
//                     <h3 className='title'>{data.title}</h3>
//                     <p>{data.body}</p>
//                    </div>


//                    )

//                    )

//             }
//        </div>
//     )
// };


export class BlogList extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
            count:0
        }
        this.onCountClick = this.onCountClick.bind(this);
    }
    componentDidMount(){
        getBlogs() 
            .then(blogs => {this.setState({blogs}) 
            });
    }
    onCountClick () {
        this.setState({count: this.state.count + 1});
      }
    render() {
        const { count } = this.state;
       return (
           <div className = "blogList">
                <span>{count}</span>
                <button onClick = {this.onCountClick}>Click me!</button>
                {this.state.blogs.map((blog, index) => <BlogItem blog={blog} key={index}/>)} 
        </div>
       );
  };
};


