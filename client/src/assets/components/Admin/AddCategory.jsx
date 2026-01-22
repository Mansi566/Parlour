import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

function AddCategory({ onCategoryAdded }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // The actual file
  const [previewImage, setPreviewImage] = useState(null); // For UI display
  const [loading, setLoading] = useState(false); // To prevent double-clicks

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    setLoading(true);

    // Prepare data for the backend
    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/api/category", {
        method: "POST",
        // Do NOT set headers here, FormData does it for you
        body: formData,
      });

      if (response.ok) {
        alert("Category saved successfully!");

        // Reset Everything
        setCategoryName("");
        setSelectedFile(null);
        setPreviewImage(null);
        setIsOpen(false);

        // Refresh the parent table if the function exists
        if (onCategoryAdded) onCategoryAdded();
      } else {
        const error = await response.json();
        alert("Error: " + error.message);
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:cursor-pointer"
      >
        <HiPlus /> Add New Category
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-80">
            <h3 className="text-lg font-bold mb-4">New Category</h3>

            {/* The onSubmit here is what makes the Save button work */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-bold text-gray-600">Name</label>
                <input
                  className="border p-2 rounded w-full"
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-600">Image</label>
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
                    className="w-16 h-16 mt-2 rounded"
                    alt="Preview"
                  />
                )}
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 text-sm hover:cursor-pointer"
                >
                  Cancel
                </button>

                {/* Fixed Save Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "bg-gray-400" : "bg-blue-600"
                  } text-white px-4 py-2 rounded-lg text-sm font-bold hover:cursor-pointer`}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCategory;
