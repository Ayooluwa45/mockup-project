import {useState, useEffect} from "react";
import "./Comment.css";

function Comments({id,user,name,email}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  console.log(users);



  return (
    <div className="container">
      <div className="comment">
        <div className="comments">
          <h3>name</h3>
          <h3>@gmail.com</h3>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          molestiae, accusantium nesciunt, deserunt non sequi modi voluptas odit
          distinctio ipsum adipisci magni nobis laudantium unde, dolorem debitis
          quam obcaecati minima.
        </p>
        
      </div>


    </div>
  );
}

export default Comments;
