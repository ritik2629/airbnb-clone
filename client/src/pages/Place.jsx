import React from "react";
import { Link, useParams } from "react-router-dom";

export const Place = () => {
  const { action } = useParams();
  console.log(action);
  return (
    <div>
      {action !== "new" && (
        <div className=" text-center">
          <Link
            to="/account/places/new"
            className="bg-primary rounded-full py-2 px-6 text-white inline-flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div className="p-2">
          <form>
            <h2 className=" font-semibold text-lg">Title</h2>
            <p className=" text-gray-500 text-sm">
              Title should be short and catchy
            </p>
            <input
              type="text"
              placeholder="title for eg.My lovely Apartement"
              className=" outline-none focus:border-red-700"
            />
            <h2 className=" font-semibold text-lg mt-4">Address</h2>
            <p className=" text-gray-500 text-sm">Address to your place</p>
            <input
              type="text"
              placeholder="address"
              className=" outline-none focus:border-red-700"
            />
            <h2 className=" font-semibold text-lg mt-4">Photos</h2>
            <p className=" text-gray-500 text-sm">photos==better</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add image using link jpeg"
                className=" focus:border-red-700 outline-none rin border-blue-600"
              />
              <button className=" bg-gray-600 text-white rounded-md px-4">
                Add&nbsp;Photo
              </button>
            </div>
            <div className=" grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4">
              <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600 flex justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload
              </button>
            </div>
            <h2 className=" font-semibold text-lg mt-2">Description</h2>
            <p className=" text-gray-500 text-sm">
              Description of the place
            </p>
            <textarea/>
            <h2 className=" font-semibold text-lg mt-2">Perks</h2>
            <p className=" text-gray-500 text-sm">select all the Perks</p>
          </form>
        </div>
      )}
    </div>
  );
};
