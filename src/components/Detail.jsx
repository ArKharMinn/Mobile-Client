import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState("");
  const getDetail = async () => {
    axios.post("http://localhost:8000/api/detail", { id }).then((response) => {
      setDetail(response.data.data);
    });
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="h-screen space-y-2 w-5/6">
        <Link to="/">
          <div className="space-x-2 cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
            <span>Back</span>
          </div>
        </Link>
        <div className="">
          <div className="flex space-x-2">
            <img
              alt=""
              src={`http://localhost:8000/storage/${detail.image}`}
              className="h-80 w-72 transition ease-in-out delay-150 bg-blue-500  "
            />
            <div className="space-y-2">
              <h3 className="font-medium text-2xl">{detail.name}</h3>
              <p>{detail.description}</p>
              <p>{detail.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
