import { useState, useEffect } from "react";
import "./Comment.css";
import Spinner from "../layout/Spinner";
import CommentData from "../data/CommentData";
import AddComment from "../data/AddComment";

function Comments() {
  /*  const [name, setName] = useState('name');
  const [email, setEmail] = useState('@gmail.com');
  const [para, setPara] = useState('lorem asdfghjklmnbvcxsdrftgzhuikm ysdfghjbvc'); */

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);


  // Get comment
  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
/* 
// Creating Comment
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));







  // Delete Comments
  const onDelete = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  // Update Comment
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
 */




  if (!loading) {
    return (
      <div>
        <div className="title-container">
          <h2>Comments</h2>
          <h2>Create comment</h2>
        </div>
        <AddComment/>
        <div className="comments-container">
          {users.map((user) => (
            <CommentData key={user.id} user={user} />
          ))}
          {/* <button>Delete</button>
       <div className="comment">
        <div className="comments">
          <h3></h3>
          <h3>{email}</h3>
        </div>
        <p>
         {para}
        </p>
        <button>Edit</button>
        <button>Delete</button>
        
      </div>   */}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Comments;
