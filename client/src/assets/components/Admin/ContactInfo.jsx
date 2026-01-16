import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      
      <div className="space-y-4">
        {/* Email Row */}
        <div className="flex items-center gap-4 text-gray-700">
          <FaEnvelope className="text-blue-500" />
          <span>support@example.com</span>
        </div>

        {/* Phone Row */}
        <div className="flex items-center gap-4 text-gray-700">
          <FaPhoneAlt className="text-green-500" />
          <span>+1 234 567 890</span>
        </div>

        {/* Location Row */}
        <div className="flex items-center gap-4 text-gray-700">
          <FaMapMarkerAlt className="text-red-500" />
          <span>123 Admin St, Tech City</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;