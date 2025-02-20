import { useState } from "react";
import "./style.component.css";
import { tableField, Post } from "../interfaces/table.interface";

interface TableProps extends tableField {
  onDeletePost: (id: number) => void;
  onEditPost: (id: number) => void;
}

const TableComponent = ({ postData, onDeletePost, onEditPost }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Set number of posts per page

  // Calculate total pages
  const totalPages = Math.ceil(postData.length / postsPerPage);

  // Get current posts for the page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="overflow-x-auto w-2xl max-w-1xl">
      <table className="table table-zebra max-w-1xl whitespace-normal break-words">
        {/* Table Head */}
        <thead>
          <tr>
            <th>NO.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          {currentPosts.map((post: Post, index) => (
            <tr key={post.id}>
              <td>{indexOfFirstPost + index + 1}</td>
              <td className="max-w-sm whitespace-normal break-words">{post.title}</td>
              <td className="max-w-sm whitespace-normal break-words">{post.description}</td>
              <td className="flex gap-4">
                {/* Edit Button */}
                <button onClick={() => onEditPost(post.id)} className="edit_button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                </button>
                
                {/* Delete Button */}
                <button onClick={() => onDeletePost(post.id)} className="remove_button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination flex justify-center items-center gap-4 mt-4">
        <button
          className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
