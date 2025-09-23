import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    des: "",
    link: "",
    date: "",
  });

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({ ...prev, des: value }));
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      des: blog.des,
      link: blog.link,
      date: blog.date,
    });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editingBlog ? "PUT" : "POST";
      const url = editingBlog ? "/api/blogs" : "/api/blogs";
      const body = editingBlog ? { ...formData, _id: editingBlog._id } : formData;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        fetchBlogs();
        setEditingBlog(null);
        setFormData({ title: "", des: "", link: "", date: "" });
      }
    } catch (error) {
      console.error("Failed to save blog:", error);
    }
  };

  return (
    <div className="blog-management">
      <h2>Blog Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <ReactQuill
          value={formData.des}
          onChange={handleDescriptionChange}
          theme="snow"
        />
        <input
          type="text"
          name="link"
          placeholder="Author"
          value={formData.link}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editingBlog ? "Update" : "Add"} Blog</button>
      </form>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.link}</td>
                <td>{blog.date}</td>
                <td>
                  <button onClick={() => handleEdit(blog)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => handleDelete(blog._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BlogManagement;
