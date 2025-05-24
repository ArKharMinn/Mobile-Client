import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import { api } from "../api/api";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const getCategory = async () => {
    try {
      const response = await api.get("/category");
      setCategory(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/product");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchProducts = async (query) => {
    if (!query.trim()) {
      getProducts();
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await api.post(
        "/react/getByPostTitle", 
        { title: query }
      );
      setPosts(response.data.getPost);
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryData = async (id) => {
    setIsLoading(true);
    try {
      if (id) {
        const response = await api.post(
          "/getByCategory", 
          { id: id }
        );
        setPosts(response.data.data);
      } else {
        await getProducts();
      }
    } catch (error) {
      console.error("Error fetching category products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCategory();
      await getProducts();
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    searchProducts(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">ShopName</h1>
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Category category={category} getCategoryData={getCategoryData} />
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
           
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {posts.map((post) => (
              <Link 
                to={`/detail/${post.id}`} 
                key={post.id}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    alt={post.name}
                    src={`http://localhost:8000/storage/${post.image}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 truncate">{post.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">Category</p>
                  <p className="mt-2 font-bold text-gray-900">${post.price || "N/A"}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;