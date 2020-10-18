import React, { useEffect, useState } from 'react'

const Post = () => {
  const [posts, setData] = useState(null)


  useEffect(() => {
    fetch(`http://localhost:3080/posts`)
      .then((res) => res.json())
      .then((posts) => setData(posts))
    }, [])
 

  if (posts === null) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <div>
      {posts.map((post) => 
    <div  id={post.id}  key={post.id}>
        <img src={`http://localhost/mylist/storage/app/public/${post.image}`} alt={post.image} className="img" />
        <h2>{post.title}</h2>
        <p >{post.post}</p>
        <hr/>
    </div>
      )}
    </div>
  )
}

export default Post;