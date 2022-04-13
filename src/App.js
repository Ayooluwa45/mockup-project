import Header from './components/header/Header'
import Comments from './components/comment/Comments'



function App() {
  return (
  
    <div>
      <Header/>
      {users.map((user) => (
        <Comments
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          comment={user.comments}
          
        />
        ))}
    </div>
  
  );
}

export default App;
