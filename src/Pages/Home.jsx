import React, { useEffect, useState } from "react";
import Spinner from "../Component/Spinner";
import Product from "../Component/Product";
import "./Home.css"

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);

  async function FetchData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPost(data);
    } catch (error) {
      console.log("Unable to fetch data");
      setPost([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="Home">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        posts.map((post) => <Product key={post.id} post={post} />)
      ) : (
        <p>No Data found</p>
      )}
    </div>
  );
}

export default Home;
