// import React, { useState, useEffect } from "react";
// import axios from "axios"; // or use fetch()
// import AddCustomer from "./AddCustomer";

// function CustomerTable() {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data when component loads
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/customers")
//       .then((response) => {
//         setCustomers(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // if (loading) return <p className="p-4 text-center">Loading Customers...</p>;

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex justify-between">
//         <h2 className="text-xl font-bold mb-4">Customer List</h2>
//           <AddCustomer />
//       </div>
//       <table className="w-full text-left border-collapse">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-3 border-b">Name</th>
//             <th className="p-3 border-b">Email</th>
//             <th className="p-3 border-b">Mobile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((user) => (
//             <tr key={user._id} className="hover:bg-gray-50 transition">
//               <td className="p-3 border-b">
//                 {user.name} {user.surname}
//               </td>
//               <td className="p-3 border-b text-blue-600">{user.email}</td>
//               <td className="p-3 border-b">{user.mobile}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default CustomerTable;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AddCustomer from "./AddCustomer";

// function CustomerTable() {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/customers")
//       .then((response) => {
//         setCustomers(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto mt-10">
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//         {/* Header Section */}
//         <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-white to-gray-50">
//           <div>
//             <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
//               Customer Directory
//             </h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Manage your {customers.length} active clients and their details.
//             </p>
//           </div>
//           <AddCustomer />
//         </div>

//         {/* Table Container */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="bg-gray-50/50">
//                 <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                   Customer
//                 </th>
//                 <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                   Contact Info
//                 </th>
//                 <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                   Mobile
//                 </th>
//                 <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {customers.map((user) => (
//                 <tr
//                   key={user._id}
//                   className="hover:bg-blue-50/30 transition-colors duration-200 group"
//                 >
//                   {/* Name & Avatar Column */}
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm">
//                         {user.name.charAt(0)}
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-bold text-gray-900 group-hover:text-blue-700">
//                           {user.name} {user.surname}
//                         </div>
//                         <div className="text-xs text-gray-400">ID: {user._id.slice(-6)}</div>
//                       </div>
//                     </div>
//                   </td>

//                   {/* Email Column */}
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex flex-col">
//                       <span className="text-sm text-gray-600 font-medium">{user.email}</span>
//                       <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Verified</span>
//                     </div>
//                   </td>

//                   {/* Mobile Column */}
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
//                       {user.mobile}
//                     </span>
//                   </td>

//                   {/* Action Column */}
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button className="text-gray-400 hover:text-blue-600 transition-colors px-2">
//                       Edit
//                     </button>
//                     <button className="text-gray-400 hover:text-red-600 transition-colors px-2">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Empty State */}
//         {!loading && customers.length === 0 && (
//           <div className="py-20 text-center">
//             <div className="text-gray-300 text-5xl mb-4">👥</div>
//             <p className="text-gray-500 font-medium">No customers found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CustomerTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AddCustomer from "./AddCustomer";

function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers")
      .then((response) => {
        setCustomers(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 p-4">
      {/* Container Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-gray-50 gap-4 bg-gray-50/30">
          <div>
            <h2 className="text-2xl font-black text-gray-800 tracking-tight">
              Customer Directory
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              Manage and view all registered clients.
            </p>
          </div>
          <AddCustomer />
        </div>

        {/* Table Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-white text-gray-400 text-xs uppercase tracking-widest font-semibold">
                <th className="px-6 py-4 border-b border-gray-100">Name</th>
                <th className="px-6 py-4 border-b border-gray-100">Contact Details</th>
                <th className="px-6 py-4 border-b border-gray-100">Mobile</th>
                {/* <th className="px-6 py-4 border-b border-gray-100 text-right">Actions</th> */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customers.length > 0 ? (
                customers.map((user) => (
                  <tr 
                    key={user._id} 
                    className="hover:bg-blue-50/40 transition-all duration-200 group"
                  >
                    {/* Name with Avatar */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {user.name.charAt(0)}{user.surname?.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                            {user.name} {user.surname}
                          </div>
                          <div className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                            Customer ID: {user._id.slice(-6)}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Email as a Link style */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-600 hover:text-blue-500 cursor-pointer transition-colors">
                        {user.email}
                      </span>
                    </td>

                    {/* Mobile with Badge style */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200">
                        {user.mobile}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    {/* <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-blue-600 font-bold text-xs px-3 py-1 transition-colors">
                        Edit
                      </button>
                      <button className="text-gray-300 hover:text-red-500 font-bold text-xs px-3 py-1 transition-colors">
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-20 text-center text-gray-400 italic">
                    {loading ? "Loading customers..." : "No customers found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerTable;