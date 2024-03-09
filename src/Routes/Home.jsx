import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Food from "../components/Food";
import { Carousel } from "flowbite-react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodcat, setfoodcat] = useState([]);
  const [foodItems, setfoodItems] = useState([]);

  const LoadData = async () => {
    let responce = await fetch("http://localhost:3000/api/foodData", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    responce = await responce.json();

    setfoodItems(responce[0]);
    setfoodcat(responce[1]);
  };
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="w-full h-[80vh] p-2">
          <div className="z-10 bottom-28 md:bottom-32 absolute w-[90vw] ml-3">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    id="logo"
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search "
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className=" w-full p-4 ps-11 bg-transparent backdrop-brightness-75 text-lg font-bold border text-white border-gray-500 rounded-lg placeholder:text-white hover:backdrop-brightness-50"
                  placeholder="Search Pizza Momos . . ."
                  required
                />
              </div>
            </div>
          </div>
          <Carousel>
            <img
              src="https://source.unsplash.com/random/300×300/?pizza"
              alt="..."
            />

            <img
              src="https://source.unsplash.com/random/300×300/?Samosa"
              alt="..."
            />

            <img
              src="https://source.unsplash.com/random/300×300/?Burger"
              alt="..."
            />

            <img
              src="https://source.unsplash.com/random/300×300/?Coffee"
              alt="..."
            />

            <img
              src="https://source.unsplash.com/random/300×300/?Pastry"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      <div className="container ">
        {foodcat !== []
          ? foodcat.map((data) => {
              return (
                <div className="flex justify-between items-center flex-col">
                  <h2
                    kay={data._id}
                    className="text-2xl font-bold tracking-tight text-gray-900"
                  >
                    {data.CategoryName}
                  </h2>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 ml-4">
                    {foodItems !== [] ? (
                      foodItems
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div key={filterItems._id}>
                              <Food
                                foodItems={filterItems}
                                options={filterItems.options[0]}
                              >
                                {" "}
                              </Food>
                            </div>
                          );
                        })
                    ) : (
                      <div>no such data</div>
                    )}
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
