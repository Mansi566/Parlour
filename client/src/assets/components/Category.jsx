import React from "react";
function Category() {
  return (
    <div className="flex flex-col my-15 text-center">
      <div>
        <h1 className="font-bold text-3xl">Category</h1>
        <p className="text-sm text-[#777] mt-2">
          Find trendy pre-loved clothes for men, women, and kids. Affordable
          fashion at your fingertips.
        </p>
      </div>
      <div className="grid grid-cols-7 gap-8 w-180  mx-auto mt-10">
        <div>
          <img src={hairstyle} alt="missing" />
        </div>
        <div>
          <img src={shoes} alt="missing" />
        </div>
        <div>
          <img src={gown} alt="missing" />
        </div>
        <div>
          <img src={tshirt} alt="missing" />
        </div>
        <div>
          <img src={watches} alt="missing" />
        </div>
        <div>
          <img src={earrings} alt="missing" />
        </div>
        <div>
          <img src={kurti} alt="missing" />
        </div>
        <div>
          <img src={jewellery} alt="missing" />
        </div>
        <div>
          <img src={nailpaint} alt="missing" />
        </div>
        <div>
          <img src={chniyacholi} alt="missing" />
        </div>
        <div>
          <img src={saree} alt="missing" />
        </div>
        <div>
          <img src={purse} alt="missing" />
        </div>
        <div>
          <img src={mehndi} alt="missing" />
        </div>
        <div>
          <img src={pants} alt="missing" />
        </div>
      </div>
    </div>
  );
}
export default Category;
