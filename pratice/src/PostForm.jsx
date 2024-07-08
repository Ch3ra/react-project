import React, { useState } from "react";
import "./PostForm.css";
import axios from "axios";

const PostForm = () => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     let { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  const addData = async (e) => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    let formData = {
      name: data.get("name"),
      avatar: data.get("avatar"),
      desc: data.get("desc"),
      author: data.get("author"),
    };

    let res = await axios.post(
      "https://668b47510b61b8d23b08f441.mockapi.io/blog",
      formData
    );
    e.target.reset();
  };

//   console.log(formData)
  return (
    <div>
      <form onSubmit={addData}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name"  />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="avatar">Avatar:</label>
          <br />
          <input type="text" id="name" name="avatar"  />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <br />
          <textarea id="description" name="desc" rows="4" cols="50" ></textarea>
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <br />
          <input type="text" id="author" name="author"  />
          <br />
          <br />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
