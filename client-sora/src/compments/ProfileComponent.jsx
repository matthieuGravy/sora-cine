import React from "react";
import profile_icon from "../assets/images/Naruto-PNG-Clipart.png";

function ProfileComponent() {
  return (
    <>
      <section className="grid grid-cols-6 min-w-fit max-w-md sm:max-w-lg border bg-white px-6 py-14 shadow-md rounded-2xl items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 justify-start col-start-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <h2 className="text-3xl font-bold col-start-2 col-span-5">
          Account Settings
        </h2>
        <figure className="relative w-32 col-start-1 col-span-2 mt-10">
          <img src={profile_icon} alt="profile icon" className="rounded-full" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute bottom-1 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </figure>
        <div className="text-2xl col-span-4 pt-16 font-bold">
          Uzumaki Naruto
        </div>
        <form className="col-span-6 col-start-1 grid grid-cols-4 justify-between">
          <p className="pt-6 col-span-2">Name</p>
          <input
            id="firstname"
            type="text"
            name="firstname"
            className="w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold"
            placeholder="Naruto"
          />
          <button className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 col-start-6">
            Edit
          </button>

          <p className="pt-6 col-span-2">Surname</p>
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold"
            placeholder="Uzumaki"
          />
          <button className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 col-start-6">
            Edit
          </button>

          <p className="pt-6 col-span-2">Birthdate</p>
          <input
            id="birthday"
            type="text"
            name="birthday"
            className="w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold"
            placeholder="October 10th"
          />
          <button className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 col-start-6">
            Edit
          </button>

          <p className="pt-6 col-span-2">Email</p>
          <input
            id="email"
            type="text"
            name="email"
            className="w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold"
            placeholder="Naruto@Hokage.konoha"
          />
          <button className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 col-start-6">
            Edit
          </button>

          <p className="pt-6 col-span-2">Password</p>
          <input
            id="password"
            type="text"
            name="password"
            className="w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold"
            placeholder="********"
          />
          <button className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 col-start-5 col-span-2">
            Change
          </button>
        </form>
        <button className="border-2 border-red-500 rounded-lg col-span-6 p-5 mt-8 text-red-500 font-bold">
          Delete Account
        </button>
        <button className="border-2 border-gray-600 rounded-lg bg-gray-600 text-white col-span-6 p-5 mt-4 font-bold">
          Sign out
        </button>
      </section>
    </>
  );
}

export default ProfileComponent;
