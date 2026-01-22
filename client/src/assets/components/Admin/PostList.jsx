import React, { useEffect, useState } from "react";

function PostList({ refreshTrigger }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [refreshTrigger]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Product Inventory
        </h3>
        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {posts.length} Items
        </span>
      </div>

      <div className="space-y-3">
        {posts.length > 0 ? (
          posts.map((p) => (
            <div
              key={p._id}
              className="group flex items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 ease-in-out"
            >
              {/* Image Container with subtle zoom effect on hover */}
              <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={`http://localhost:5000${p.imageUrl}`}
                  alt={p.name}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="ml-5 flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </h4>
                 
                </div>

                <div className="flex items-center justify-between md:justify-end md:gap-8">
                  <div className="text-right">
                    <p className="text-xl font-black text-gray-900">
                      {p.price}
                    </p>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-widest ${
                      p.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {p.status}
                    </span>
                  </div>

                  {/* Interactive Button */}
                  <button className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl">
            <div className="text-gray-400 text-4xl mb-2">📦</div>
            <p className="text-gray-500 font-medium">No products found in your inventory.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostList;