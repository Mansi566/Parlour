import React from "react";
import { useState } from "react";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";

function Category() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="text-base font-bold">CATEGORY LIST</h1>
          <AddCategory />
        </div>

        <CategoryList />
      </div>
    </>
  );
}

export default Category;
