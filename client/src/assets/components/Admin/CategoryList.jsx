// import React, { useEffect, useState } from "react";

// function CategoryList({ refreshTrigger }) {
//   const [categories, setCategories] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // States for the edit form
//   const [editId, setEditId] = useState(null);
//   const [categoryName, setCategoryName] = useState("");
//   const [categoryImage, setCategoryImage] = useState(null);
//   const [categoryDate, setCategoryDate] = useState(null);

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/category");
//       const data = await response.json();
//       setCategories(data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, [refreshTrigger]);

//   // --- OPEN EDIT MODAL ---
//   const handleEditClick = (category) => {
//     setEditId(category._id);
//     setCategoryName(category.name);
//     setCategoryDate(category.Date);
//     setIsOpen(true);
//   };

//   // --- UPDATE FUNCTION ---
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("name", categoryName);
//     formData.append("date", categoryDate);
//     if (categoryImage) {
//       formData.append("image", categoryImage);
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/api/category/${editId}`, {
//         method: "PUT", // Use PUT or PATCH based on your backend API
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Category updated successfully");
//         setIsOpen(false);
//         fetchCategories(); // Refresh the list
//       } else {
//         alert("Failed to update category");
//       }
//     } catch (err) {
//       console.error("Update error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this?")) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/category/${id}`, {
//           method: "DELETE",
//         });
//         if (response.ok) {
//           setCategories(categories.filter((cat) => cat._id !== id));
//         }
//       } catch (err) {
//         console.error("Delete error:", err);
//       }
//     }
//   };

//   return (
//     <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//       <table className="w-full text-left">
//         <thead className="bg-gray-50 border-b border-gray-100">
//           <tr>
//             <th className="px-6 py-4 text-sm font-semibold text-gray-600">#</th>
//             <th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
//             <th className="px-6 py-4 text-sm font-semibold text-gray-600">Image</th>
//             <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
//             <th className="px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-100">
//           {categories.map((cat, index) => (
//             <tr key={cat._id} className="hover:bg-gray-50 transition-colors">
//               <td className="px-6 py-4">{index + 1}</td>
//               <td className="px-6 py-4 font-medium text-gray-700">{cat.name}</td>
//               <td className="px-6 py-4">
//                 <img
//                   src={`http://localhost:5000${cat.imageUrl}`}
//                   alt={cat.name}
//                   className="w-12 h-12 rounded-lg object-contain border"
//                 />
//               </td>
//               <td className="px-6 py-4 font-medium text-gray-700">{cat.Date}</td>
//               <td className="px-6 py-4">
//                 <div className="flex gap-2">
//                   <button
//                     className="text-white bg-blue-600 px-5 py-2 text-sm hover:bg-blue-800 rounded-full cursor-pointer"
//                     onClick={() => handleEditClick(cat)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="text-white bg-red-600 px-4 py-2 text-sm hover:bg-red-800 rounded-full cursor-pointer"
//                     onClick={() => handleDelete(cat._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* POPUP MODAL */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-2xl w-80">
//             <h3 className="text-lg font-semibold mb-4">Edit Category</h3>
//             <form onSubmit={handleUpdate}>
//               <div className="mb-3">
//                 <label className="text-sm font-bold text-gray-600">Name</label>
//                 <input
//                   className="border p-2 rounded w-full"
//                   type="text"
//                   value={categoryName}
//                   onChange={(e) => setCategoryName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="text-sm font-bold text-gray-600">New Image (Optional)</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="text-sm border p-2 rounded w-full"
//                   onChange={(e) => setCategoryImage(e.target.files[0])}
//                 />
//               </div>
//               <div className="flex justify-end gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   className="text-gray-500 text-sm cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`${
//                     loading ? "bg-gray-400" : "bg-blue-600"
//                   } text-white px-4 py-2 rounded-lg text-sm font-bold cursor-pointer`}
//                 >
//                   {loading ? "Updating..." : "Update"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryList;

import React, { useEffect, useState } from "react";
import { Edit2, Trash2, Calendar, Image as ImageIcon, Plus } from "lucide-react";

function CategoryList({ refreshTrigger }) {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialFetch, setInitialFetch] = useState(true);

  // States for the edit form
  const [editId, setEditId] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [categoryDate, setCategoryDate] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/category");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setInitialFetch(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [refreshTrigger]);

  const handleEditClick = (category) => {
    setEditId(category._id);
    setCategoryName(category.name);
    setCategoryDate(category.Date);
    setIsOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("date", categoryDate);
    if (categoryImage) {
      formData.append("image", categoryImage);
    }

    try {
      const response = await fetch(`http://localhost:5000/api/category/${editId}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        setIsOpen(false);
        fetchCategories();
      } else {
        alert("Failed to update category");
      }
    } catch (err) {
      console.error("Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/category/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setCategories(categories.filter((cat) => cat._id !== id));
        }
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Product Categories</h2>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {categories.length} Total
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category Details</th>
                {/* <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Created Date</th> */}
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {initialFetch ? (
                <tr><td colSpan="4" className="text-center py-20 text-gray-400">Loading Categories...</td></tr>
              ) : categories.length === 0 ? (
                <tr><td colSpan="4" className="text-center py-20 text-gray-400">No categories found.</td></tr>
              ) : (
                categories.map((cat, index) => (
                  <tr key={cat._id} className="hover:bg-blue-50/30 transition-all group">
                    <td className="px-6 py-4">
                      <span className="text-gray-400 font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shadow-sm flex-shrink-0">
                          <img
                            src={`http://localhost:5000${cat.imageUrl}`}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=No+Img" }}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-lg leading-tight">{cat.name}</p>
                          <p className="text-xs text-gray-400 uppercase tracking-tighter">Category ID: {cat._id.slice(-6)}</p>
                        </div>
                      </div>
                    </td>
                    {/* <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={14} className="text-blue-500" />
                        <span className="text-sm">{cat.Date || "N/A"}</span>
                      </div>
                    </td> */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEditClick(cat)}
                          className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(cat._id)}
                          className="p-2 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- PREMIUM POPUP MODAL --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Edit Category</h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              
              <form onSubmit={handleUpdate} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Category Name</label>
                  <input
                    className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter name..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Display Image</label>
                  <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-blue-400 transition-colors">
                    <div className="space-y-1 text-center">
                      <ImageIcon className="mx-auto h-10 w-10 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload a file</span>
                          <input 
                            type="file" 
                            className="sr-only" 
                            accept="image/*"
                            onChange={(e) => setCategoryImage(e.target.files[0])}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? "Saving Changes..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryList;