import React from "react";

const BlogList = ({ blogs, title, handleDelete }: any) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map((blog: { id: string | number | null | undefined; title: React.ReactNode; author: React.ReactNode; }) => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;