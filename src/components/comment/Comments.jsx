import { useState, useEffect } from "react";
import "./Comment.css";
import Spinner from "../layout/Spinner";
import CommentData from "../data/CommentData";

function Comments() {
  /*  const [name, setName] = useState('name');
  const [email, setEmail] = useState('@gmail.com');
  const [para, setPara] = useState('lorem asdfghjklmnbvcxsdrftgzhuikm ysdfghjbvc'); */

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

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

  if (!loading) {
    return (
      <div>
        <div className="title-container">
          <h2>Comments</h2>
          <h2>Create comment</h2>
        </div>
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
