import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Comment.css";
import Spinner from "../layout/Spinner";
import CommentData from "../data/CommentData";
/* import AddComment from "../data/AddComment"; */
import ReactPaginate from "react-paginate";

function Comments() {
  /*  const [name, setName] = useState('name');
  const [email, setEmail] = useState('@gmail.com');
  const [para, setPara] = useState('lorem asdfghjklmnbvcxsdrftgzhuikm ysdfghjbvc'); */
  const [pageNumber, setPageNumber] = useState(0);
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

  /* // Creating Comment
  const onAdd = async (title, body, userId) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */

  /* 

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
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return <CommentData key={user.id} user={user} />;
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (!loading) {
    return (
      <section className=" container">
        <div className="title-container">
          <h2>Comments</h2>
          <span>Create comment</span>
        </div>
        {/*  <AddComment onAdd={onAdd}/>  */}
        <div className="comments-container">
          {displayUsers}
                 </div>
                 
          <ReactPaginate
            previousLabel={<MdKeyboardArrowLeft id="icon"/>}
            nextLabel={<MdKeyboardArrowRight id="icon"/>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"previous"}
            nextLinkClassName={"next"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            marginPageDisplayed={3}
            pageRangeDisplayed={3}
            pageClassName={"page"}
            breakClassName={'break'}
          />
      

      </section>
    );
  } else {
    return <Spinner />;
  }
}

export default Comments;
