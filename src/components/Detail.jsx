import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { FaArrowLeft } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getDetail = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("/detail", { id });
      setDetail(response.data.data);
    } catch (error) {
      console.error("Failed to fetch detail:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse flex space-x-4 w-5/6">
          <div className="bg-gray-200 h-80 w-72 rounded-lg"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-700">Product not found</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </button>

        {/* Product Detail */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/3 p-6 flex justify-center">
              <img
                alt={detail.name}
                src={`http://localhost:8000/storage/${detail.image}`}
                className="h-80 w-full object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{detail.name}</h1>
              <p className="text-gray-700 mb-6">{detail.description}</p>
              <div className="text-2xl font-semibold text-gray-900">
                ${detail.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;