import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Myorder = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchMyorder = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/myOrderData", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch order data");
      }
      const data = await response.json();
      setOrderData(data.orderData.order_data); // Set orderData to the order_data array
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyorder();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-white">
  <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    {Array.isArray(orderData) && orderData.length !== 0 ? (
      orderData.map((subArray, index) => (
        <div key={index}className="border-[1px] border-gray-200 ">
          {Array.isArray(subArray) ? (
            subArray.map((item, itemIndex) => (
              <div key={itemIndex} className="border-[1px] border-gray-200 ">
                {item.Order_date ? (
                  <div className="mb-4">
                  <div className="ml-[80vmin] font-bold">
                    {item.Order_date}
                  </div>
                    <hr />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 m-2"> {/* Set grid-cols to 3 */}
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={item.img}
                          alt="Loading..."
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700 font-bold">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm p-2 text-gray-500 border-[1px] border-gray-300">Qty:-
                            {item.qty}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">Size:-
                            {item.size}
                          </p>
                        </div>
                        <p className="text-sm  text-gray-900 font-bold">
                          ₹{item.price}/-
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div key={index}>
              {subArray.Order_date ? (
                <div className="mb-4">
                <div className="ml-[30rem] font-bold">
                  {subArray.Order_date}
                </div>
                  <hr />
                </div>
              ) : (
                <div className="m-2 grid grid-cols-6 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 xl:gap-x-8">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={subArray.img}
                        alt="Loading..."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-900 font-bold mb-2">
                          {subArray.name}
                        </h3>
                        <p className=" text-sm p-2 text-gray-500 border-[1px] border-gray-300">
                          Qty:- {subArray.qty}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Size:- {subArray.size}
                        </p>
                        
                      </div>
                      <p className="text-sm font-bold text-gray-900">
                        ₹{subArray.price}/-
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))
    ) : (
      <h4>No orders found</h4>
    )}
  </div>
</div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Myorder;
