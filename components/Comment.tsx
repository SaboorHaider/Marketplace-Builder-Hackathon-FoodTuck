import Image from "next/image";
import client from "../../../public/client.png";
import React, { useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuReplyAll } from "react-icons/lu";

const Comment = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Md Sojib Khan",
      date: "June 22, 2022",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus dolore atque optio ea nemo suscipit, accusantium",
    },
    {
      id: 2,
      name: "Md Sojib Khan",
      date: "June 22, 2022",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus dolore atque optio ea nemo suscipit, accusantium",
    },
  ]);

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.message) {
      const newCommentData = {
        id: comments.length + 1,
        name: newComment.name,
        date: new Date().toLocaleDateString(),
        comment: newComment.message,
      };
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="p-6 rounded-lg">
      <h2 className="font-bold text-xl lg:text-2xl text-gray-800 mb-6">Comments - {comments.length}</h2>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Image
              src={client}
              alt="User"
              className="w-12 h-12 rounded-full border border-gray-200"
            />
            <div>
              <h3 className="text-lg flex gap-3 font-semibold text-gray-700">
                {comment.name}{" "}
                <span className="text-sm flex text-blue-500 cursor-pointer">
                  <LuReplyAll className="text-2xl" /> Reply
                </span>
              </h3>
              <p className="text-sm flex text-gray-500 gap-2">
                <IoCalendarNumberOutline className="text-bordercoloryello text-xl" /> {comment.date}
              </p>
              <p className="mt-2 text-gray-600 lg:w-full w-[240px]">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 lg:block hidden">
        <h3 className="text-lg font-semibold text-gray-800">Post a Comment</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="lg:flex space-x-4">
            <input
              type="text"
              name="name"
              value={newComment.name}
              onChange={handleChange}
              placeholder="Name*"
              className="lg:w-1/2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={newComment.email}
              onChange={handleChange}
              placeholder="Email*"
              className="lg:w-1/2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <textarea
            name="message"
            value={newComment.message}
            onChange={handleChange}
            placeholder="Write a comment"
            className="lg:w-full p-2 border border-gray-300 rounded-lg h-24"
          ></textarea>
          <button type="submit" className="px-6 py-2 bg-bordercoloryello text-white font-semibold">
            Post a Comment
          </button>
        </form>
      </div>

      <div className="container px-5 py-24 mx-auto lg:hidden block">
        <form onSubmit={handleSubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-myverydarkpink">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newComment.name}
                    onChange={handleChange}
                    className="w-full bg-mylitpink/25 rounded border border-myverydarkpink focus:border-myverydarkpink text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-myverydarkpink">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleChange}
                    className="w-full bg-mylitpink/25 border-myverydarkpink focus:border-myverydarkpink rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-myverydarkpink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={newComment.message}
                    onChange={handleChange}
                    className="w-full rounded border bg-mylitpink/25 border-myverydarkpink focus:border-myverydarkpink h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="px-6 py-2 bg-bordercoloryello text-white font-semibold">
                  Post a Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
