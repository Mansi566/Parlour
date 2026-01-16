import React, { useState } from "react";
import "./AddCustomer.css";
import { AiTwotonePlusCircle } from "react-icons/ai";

function AddCustomer({ onCustomerAdded }) {
  // Added a prop to refresh the table later
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    try {
      const response = await fetch("http://localhost:5000/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Customer saved!");
        setIsOpen(false);
        setFormData({ name: "", email: "" }); // Reset form
        if (onCustomerAdded) onCustomerAdded(); // Refresh table data
      } else {
        console.error("Server Error:", response.status);
      }
    } catch (err) {
      console.error("Network Error:", err);
    }
  };

  return (
    <div>
      <div onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
        <AiTwotonePlusCircle size={30} color="#007bff" />
      </div>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Add New Customer</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="mobile"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
              />
              <div className="button-group">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default AddCustomer;