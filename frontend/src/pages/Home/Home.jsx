import React, { useEffect, useState } from 'react'
import css from "./Home.module.css";
import Search from '../../components/Search/Search';

const Home = () => {

  const [blogs, setBlogs] = useState([]);

//   // for designing only 
//   const [blog, seyBlog] = useState({
//     "id": 33,
//     "category": "Education",
//     "title": "Why Lifelong Learning Matters",
//     "content": "Learning doesn’t stop after school. Discover why lifelong learning is key to personal growth. 2345678",
//     "image": "https://via.placeholder.com/300?text=Education"
//   })

  useEffect(()=>{
    fetchBlogs();
    console.log(" blogs changed ");
    
  },[])

  const fetchBlogs = async(title, category) => {
      let url;
    if(title && category){
        url = `http://localhost:3000/search?title=${title}&category=${category}`
    }else if(title){
        url = `http://localhost:3000/search?title=${title}`
    }else if(category){
        url = `http://localhost:3000/search?category=${category}`
    }else{
        url = `http://localhost:3000/search`
    }

    const data = await fetch(url);
    const filteredBlogs = await data.json();
    setBlogs(filteredBlogs);
    console.log(filteredBlogs);
    
  }
  
  const blogsSort = (sortType) => {
    let sortedBlogs;
    if(sortType.toLowerCase() === "dateasc"){
       sortedBlogs = blogs.sort((a,b) =>  new Date(a.createdAt) - new Date(b.createdAt) ); // asending order
    }else if(sortType.toLowerCase() === "datedsc"){
       sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // descending order
    }else if(sortType.toLowerCase() === "atoz"){
        sortedBlogs = blogs.sort((a,b) => a.title.localeCompare(b.title));
    }else if(sortType.toLowerCase() === "ztoa"){
        sortedBlogs = blogs.sort((a,b) => b.title.localeCompare(a.title));
    }
    // console.log("Blog sort called "+blogs);
    console.log("sortedBlogs are "+sortedBlogs);
    
    setBlogs([...sortedBlogs]);
    
  }

  return (
    <div className={css.home}>
        
        <div className={css['filter-search']}>
            <Search fetchBlogs={fetchBlogs} blogsSort={blogsSort}/>
        </div>

        <div className={css.blogs}>
           {blogs && blogs.map((blog) => (

           <div className={css['blog-card']}>
               <img src={blog.image} className={css['blog-image']}/>
               <div className={css['blog-title']}>
                   {blog.title}
               </div>
               <div className={css['blog-content']}>
                   {blog.content.substring(0,100)+" ..."}
               </div>

           </div>
           ))}
        </div>
    </div>
  )
}

export default Home;