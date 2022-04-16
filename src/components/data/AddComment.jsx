import { useState } from "react";

function AddComment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Add Comment</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={onchange}
            value={name}
            id="name"
            name={name}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={onChange}
            value={email}
            id="email"
            name={email}
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
}

export default AddComment;
