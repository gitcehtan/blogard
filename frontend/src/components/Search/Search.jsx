import React, { useEffect, useState } from 'react'
import css from "./Search.module.css";

const Search = ({fetchBlogs, blogsSort}) => {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("");

  let timeout;

  useEffect(() => {
    if(query && category ){
      console.log("Query "+query+" category : "+category);
      fetchBlogs(query,category);
    }else if (category) {
      fetchBlogs(undefined, category);
    }else if(query) {

      clearTimeout(timeout);
      setTimeout(()=>{
          fetchBlogs(query);
      },200);
    }else{
      fetchBlogs();
    }

  }, [category,query]);

  // useEffect(()=>{

  // })
  
  const handleInputChange = (e) => {
     setQuery(e.target.value);

     
  }


  const handleFilterChange = (e) => {
       setCategory(e.target.value);

       console.log(category);
       
      // fetchBlogs(undefined,e.target.value);

  }

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    blogsSort(e.target.value);
    console.log("SORT Type "+e.target.value);
    
  }

  return (
    <div className={css.search}>
       <div className={css['search-bar']}>
          <input type="text" 
                 placeholder='Enter the text to Search'
                 value={query}
                 onChange={handleInputChange} 
                />
          
       </div>
       <div className={css.filter}>
            <select className={css['filter-category']} 
              value={category}
              onChange={handleFilterChange}
            >
                <option value="" disabled>Category</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
       </div>
       <div className={css.sort}>
          <select className={css['filter-sort']}
                  value={sortType}
                  onChange={handleSortChange}
          >
            <option value="" disabled>Sort</option>
            <option value="dateasc">Date (ASC)</option>
            <option value="datedsc">Date (DESC)</option>
            <option value="atoz">Title (A/Z)</option>
            <option value="ztoa">Title (Z/A)</option>
          </select>
       </div>
    </div>
  )
}

export default Search