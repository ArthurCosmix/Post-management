import { useEffect, useState } from "react";
import './form.coponent.css'
import { Post } from "../interfaces/table.interface";
interface FormProps {
  onAddPost: (title: string, description: string) => void;
  onUpdatePost: (id: number, title: string, description: string) => void;
  editPost : Post | null
}

const FormComponent = ({ onAddPost, editPost, onUpdatePost } : FormProps) => {
  const [title, setTitle] = useState(editPost?.title || "");
  const [description, setDescription] = useState(editPost?.description ||"");

  useEffect(() => {
    if(editPost){
      setTitle(editPost.title)
      setDescription(editPost.description)
    }
  },[editPost])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(editPost){
      onUpdatePost(editPost.id, title, description)
    }else{
      onAddPost(title, description);
    }

    setTitle("");
    setDescription("");
  };

  const handleCancelsubmit = () => {
    setTitle("");
    setDescription("");
  }

  return (
    <div className="form_container w-2xl min-h-90">
        <form onSubmit={handleSubmit}>
      <input
        className="input-field block my-7 py-2 px-7"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        className="textarea-field block py-2 px-7"
        rows={5}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="button-container flex gap-4 justify-center items-center mt-5 ml-90">
        <button type="button"  onClick={handleCancelsubmit}className="border flex justify-between items-center gap-1 px-2 py-1 bg-red-500 text-white border-none rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        Cancel</button>


        <button type="submit" className="border flex justify-between items-center gap-1 px-4 py-1 bg-green-500 text-white border-none rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
        </svg>
        Save</button>
      </div>
        </form>
    </div>
  );
};

export default FormComponent;
