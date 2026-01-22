import React from "react";
function Home() {
  return (
    <header className="text-center">
      <div className="w-full">
        <img
          className="position-absolute w-full h-full"
          src={heroImage}
          alt="Hero Section"
          style={{
            objectFit: "cover",
            position: "relative",
            filter: "brightness(0.5)",
          }}
        />
      </div>
      <div
        className="absolute top-50 left-1/2 transform -translate-x-1/2 
                 flex flex-col items-center"
      >
        <img
          src={logocopy}
          alt="Logo Copy"
          className="w-50 h-50 justify-center mt-11"
          style={{ objectFit: "fill" }}
        />
        <h3
          className="display-3 text-capitalize text-white mt-2 mb-5 text-6xl font-bold"
          style={{ fontFamily: "'Baloo Bhaijaan'" }}
        >
          THE PARLOUR
        </h3>
        <p
          className="text-white text-lg font-medium"
          style={{ fontFamily: "'Baloo Bhaijaan'" }}
        >
          The Parlour is a simple marketplace to buy and sell pre-loved clothes,
          shoes, watches and <br />
          accessories. Upload items quickly, explore affordable finds and chat
          with sellers for easy,
          <br />
          budget-friendly fashion trading.
        </p>
      </div>
    </header>
  );
}
export default Home;
