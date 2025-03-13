import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);

  const getCategory = async () => {
    try {
      await axios.get("http://localhost:8000/api/category").then((response) => {
        setCategory(response.data.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async () => {
    try {
      await axios.get("http://localhost:8000/api/product").then((response) => {
        setPost(response.data.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const searchData = async (search) => {
    await axios
      .post("http://localhost:8000/api/react/getByPostTitle", { title: search })
      .then((response) => {
        setPost(response.data.getPost);
      });
  };

  const getCategoryData = async (id) => {
    setCategoryId(id);
    try {
      if (id) {
        await axios
          .post("http://localhost:8000/api/getByCategory", { id: id })
          .then((response) => {
            setPost(response.data.data);
          });
      } else {
        getProduct();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategory();
    getProduct();
  }, []);
  return (
    <div>
      <div className="h-screen p-3">
        <div className="flex justify-between sticky top-16 p-3 bg-white z-50">
          <ul className="list-none flex space-x-2 text-xl cursor-pointer">
            <li
              onClick={() => getCategoryData("")}
              className={
                categoryId === ""
                  ? " font-medium border-black border-b-4 p-2"
                  : "p-2 hover:font-medium hover:border-black hover:border-b-4"
              }
            >
              All Product
            </li>
            {category.length !== 0 ? (
              category.map((category, index) => (
                <li
                  onClick={() => getCategoryData(category.id)}
                  key={index}
                  className={
                    categoryId === category.id
                      ? " font-medium border-black border-b-4 p-2"
                      : "p-2 hover:font-medium hover:border-black hover:border-b-4"
                  }
                >
                  {category.name}
                </li>
              ))
            ) : (
              <h3 className="p-2">There is no category</h3>
            )}
          </ul>
        </div>
        <div className=" flex justify-center py-4">
          <div className="w-4/5 grid grid-cols-4 gap-3 items-center">
            {post.length !== 0 ? (
              post.map((post, index) => (
                <Link to={`/detail/${post.id}`} key={index}>
                  <img
                    alt=""
                    src={`http://localhost:8000/storage/${post.image}`}
                    className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
                  />
                  <p className="text-xl font-medium">{post.name}</p>
                </Link>
              ))
            ) : (
              <div className="text-red-500">There is No Product</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
