// import React from "react";
// import { FaChartPie, FaPhone } from "react-icons/fa";
// import { FaUsersCog } from "react-icons/fa";
// import { TiHome } from "react-icons/ti";
// import { MdLogout } from "react-icons/md";
// import { TbCategory } from "react-icons/tb";
// import { FaUsers } from "react-icons/fa";
// import { FaInfoCircle } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaBoxOpen } from "react-icons/fa6";


// function Sidebar() {
//   return (
//     <>
//       <div>
//         <div
//           className="bg-gray-700 h-full overflow-scroll"
//           style={{ width: 250 }}
//         >
//           <div className="text-white p-5 flex items-center gap-3">
//             <FaChartPie />
//             <h1 className="text-xl font-bold text-white text-center top-5">
//               Dashboard
//             </h1>
//           </div>
//           <div className="text-white p-5 flex items-center gap-3 hover:bg-gray-800 cursor-pointer">
//             <TiHome />
//             <h1 className="text-xl font-bold text-white text-center top-5">
//               Home
//             </h1>
//           </div>
//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <FaUsersCog />
//             <h1 className="text-xl font-bold text-white">Services</h1>
//             <div className="ml-auto"></div>
//           </div>

//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <TbCategory />
//             <h1 className="text-xl font-bold text-white">Category</h1>
//             <div className="ml-auto"></div>
//           </div>
//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <FaUsers />
//             <h1 className="text-xl font-bold text-white">Customers</h1>
//             <div className="ml-auto"></div>
//           </div>
//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <FaInfoCircle />
//             <h1 className="text-xl font-bold text-white">About us</h1>
//             <div className="ml-auto"></div>
//           </div>
//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <FaPhoneAlt />
//             <Link>
//             <h1 className="text-xl font-bold text-white">Contact us</h1>
//             </Link>
//             <div className="ml-auto"></div>
//           </div>
//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <FaBoxOpen />
//             <h1 className="text-xl font-bold text-white">Orders</h1>
//             <div className="ml-auto"></div>
//           </div>
//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <h1 className="text-xl font-bold text-white">Customer Reviews</h1>
//             <div className="ml-auto"></div>
//           </div>
//           <div className="flex text-white items-center gap-3 p-5 hover:bg-gray-800 cursor-pointer">
//             <h1 className="text-xl font-bold text-white">Download app</h1>
//             <div className="ml-auto"></div>
//           </div>
//           <div className="flex text-white items-center gap-5 p-5 hover:bg-gray-800 cursor-pointer">
//             <h1 className="text-xl font-bold text-white">Logout</h1>
//             <MdLogout />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Sidebar;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaBox, FaInfoCircle  } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { PiCameraDuotone } from "react-icons/pi";
import { BiSolidCameraPlus } from "react-icons/bi";


import { icon } from "@fortawesome/fontawesome-svg-core";

function Sidebar() {
  const location = useLocation(); // To track which link is active

  const links = [
    { name: "Dashboard", path: "/admin", icon: <FaHome /> },
    { name: "Customers", path: "/admin/Customers", icon: <FaUsers /> },
    { name: "Post",   path:"/admin/Post",  icon: <BiSolidCameraPlus/>},
    { name: "Category",  path: "/admin/Category", icon:<BiSolidCategory/>},
    { name: "Orders", path: "/admin/Orders", icon: <FaBox /> },
    { name: "Contact Info", path:"/admin/ContactInfo", icon: <RiContactsFill/> },
    { name: "About Us", path: "/admin/About", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-10">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 p-3 rounded transition ${
              location.pathname === link.path ? "bg-blue-600" : "hover:bg-gray-800"
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
export default Sidebar;