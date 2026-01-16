import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Admin() {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Your sidebar with the Links */}
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        {/* DYNAMIC CONTENT AREA */}
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Outlet /> {/* This is where Page1, UserTable, or Orders will show up */}
        </main>
      </div>
    </div>
  );
}
export default Admin;