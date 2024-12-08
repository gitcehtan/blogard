const blogs = require("../models/blogs.json");

const getBlogs = (req,res) => {
    const blogFilter = req.query;
    console.log(blogFilter);

    /*
    blog={
    category:"health"
    title:""
    }
    */

    let filteredBlogs;

    if(blogFilter?.category && blogFilter?.title){
        const filteredBlogsCategory = filterByCategory(blogFilter.category);
 
        filteredBlogs = filteredBlogsCategory.filter((blog) => {
              return blog.title.toLowerCase().includes(blogFilter.title.toLowerCase());
        })
    }else if(blogFilter?.category){
        filteredBlogs = filterByCategory(blogFilter.category);

    }
    else if(blogFilter?.title){
        
        filteredBlogs = blogs.filter((blog)=> {
            return blog.title.toLowerCase().includes(blogFilter.title.toLowerCase());
        })

    }else{
        filteredBlogs = blogs; // incase no filter is passed
    }
    console.log(filteredBlogs);
    

    res.send(filteredBlogs);

}

const filterByCategory = (category)=> {
    
    
     return blogs.filter((blog)=> (
        blog.category.toLowerCase() === category.toLowerCase()
     ))
}

module.exports = {getBlogs};