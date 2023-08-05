import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      alert("error encounterd");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex  h-[100vh] w-full justify-center ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="flex justify-center items-center w-screen h-screen">No Data Found</div>
      ) : (
        <div className="flex  flex-wrap w-[70vw]  p-2 gap-y-10 gap-x-10 mt-28 ">
        {
          posts.map((post) => <Product post={post} key={post.id} />)
        }
      </div>
   
      )}
    </div>
  );
};

export default Home;
