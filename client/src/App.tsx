import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./interfaces/table.interface";
import "./app.css";
import TableComponent from "./components/Table.component";
import FormComponent from "./components/Form.component";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editPost, setEditPost] = useState<Post | null>(null); 

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getPosts");
        if (response.data && Array.isArray(response.data.data)) {
          setPosts(response.data.data);
        } else {
          console.error("API response does not contain an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    loadPosts();
  }, []);

  // Handle Create Post
  const handleCreatePost = async (title: string, description: string) => {
    try {
      const response = await axios.post("http://localhost:5000/createPost", {
        title,
        description,
      });
      if (response.data && response.data.data) {
        setPosts((prevPosts) => [...prevPosts, response.data.data]); // Update state
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Delete Post
  const handleDeletePost = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/deletePost/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); // Update state
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Edit Button Click
  const handleEditClick = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:5000/getPostById/${id}`);
      if (response.data && response.data.data) {
        setEditPost(response.data.data); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Update Post
  const handleUpdatePost = async (id: number, title: string, description: string) => {
    try {
      console.log('it work')
      const response = await axios.post(`http://localhost:5000/updatePost/${id}`, { title, description });
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? { ...post, title, description } : post))
      );
      console.log(response)
      setEditPost(null); // Clear edit state after updating
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app_container flex justify-between items-center max-w-7xl mt-20 bg-slate-50 drop-shadow-lg p-8">
      <TableComponent postData={posts} onDeletePost={handleDeletePost} onEditPost={handleEditClick} />
      <FormComponent
        onAddPost={handleCreatePost}
        onUpdatePost={handleUpdatePost}
        editPost={editPost}
      />
    </div>
  );
}

export default App;
