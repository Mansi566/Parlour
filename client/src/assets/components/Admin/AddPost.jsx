// import React, { useState } from "react";
// import { HiPlus } from "react-icons/hi";

// function AddPost() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [categoryName, setCategoryName] = useState("");
//   const [categoryPrice, setCategoryPrice] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null); // The actual file
//   const [previewImage, setPreviewImage] = useState(null); // For UI display

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };
//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="flex items-center gap-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:cursor-pointer"
//       >
//         <HiPlus /> Add Post
//       </button>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-2xl w-80">
//             <h3 className="text-lg font-bold mb-4">Post</h3>
//             <form>
//               <div>
//                 <label className="text-sm font-bold text-gray-600">Image</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="text-sm border p-2 rounded w-full"
//                   required
//                 />
//                 {previewImage && (
//                   <img
//                     src={previewImage}
//                     className="w-16 h-16 mt-2 rounded"
//                     alt="Preview"
//                   />
//                 )}
//               </div>
//               <div>
//                 <label className="text-sm font-bold text-gray-600">Name</label>
//                 <input
//                   className="border p-2 rounded w-full"
//                   type="text"
//                   value={categoryName}
//                   onChange={(e) => setCategoryName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-bold text-gray-600">Price</label>
//                 <input
//                   className="border p-2 rounded w-full"
//                   type="text"
//                   value={categoryPrice}
//                   onChange={(e) => setCategoryPrice(e.target.value)}
//                   required
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default AddPost;

import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

function AddPost() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [status, setStatus] = useState("sell"); // New: Rent or Sell state
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Prepare Data (Use FormData for images)
    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("price", categoryPrice);
    formData.append("status", status);
    formData.append("image", selectedFile);

    try {
      // 2. Send to Database/API
      // Replace '/api/posts' with your actual endpoint
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Post added successfully!");
        setIsOpen(false); // Close modal
        // Clear form
        setCategoryName("");
        setCategoryPrice("");
        setPreviewImage(null);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:cursor-pointer"
      >
        <HiPlus /> Add Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Create New Post
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image Input */}
              <div>
                <label className="text-sm font-bold text-gray-600 block mb-1">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-sm border p-2 rounded w-full"
                  required
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    className="w-20 h-20 mt-2 rounded-lg object-cover border"
                    alt="Preview"
                  />
                )}
              </div>

              {/* Name Input */}
              <div>
                <label className="text-sm font-bold text-gray-600 block mb-1">
                  Product Name
                </label>
                <input
                  className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  required
                />
              </div>

              {/* Rent or Sell Select */}
              <div>
                <label className="text-sm font-bold text-gray-600 block mb-2">
                  Category Type
                </label>

                {/* Flex Container */}
                <div className="flex gap-2 w-full">
                  <button
                    type="button"
                    onClick={() => setStatus("sell")}
                    className={`flex-1 py-2 px-4 rounded-xl font-semibold border transition-all duration-200 ${
                      status === "sell"
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    For Sale
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus("rent")}
                    className={`flex-1 py-2 px-4 rounded-xl font-semibold border transition-all duration-200 ${
                      status === "rent"
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    For Rent
                  </button>
                </div>
              </div>

              {/* Price Input */}
              {/* <div>
                <label className="text-sm font-bold text-gray-600 block mb-1">
                  Price ($)
                </label>
                <input
                  className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
                  type="number"
                  placeholder="0.00"
                  value={categoryPrice}
                  onChange={(e) => setCategoryPrice(e.target.value)}
                  required
                />
              </div> */}

              <div>
                <label className="text-sm font-bold text-gray-600 block mb-1">
                  Price ($)
                </label>
                <input
                  className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
                  type="number"
                  placeholder="0.00"
                  /* 1. min="0" prevents the arrow-clickers from going below zero */
                  min="0"
                  /* 2. step="0.01" allows for decimals like 9.99 */
                  step="0"
                  value={categoryPrice}
                  onChange={(e) => {
                    const val = e.target.value;
                    /* 3. Logic: Only update state if value is empty (allowing backspace) or >= 0 */
                    if (val === "" || parseFloat(val) >= 0) {
                      setCategoryPrice(val);
                    }
                  }}
                  // onKeyDown={(e) => {
                  //   /* 4. Extra Security: Block the minus '-' key entirely */
                  //   if (e.key === "-" || e.key === "e") {
                  //     e.preventDefault();
                  //   }
                  // }}
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="flex-1 px-4 py-2 border rounded-xl hover:bg-gray-50 hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-700 transition hover:cursor-pointer"
                >
                  Post Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddPost;
