// import React, { useEffect } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <h1 className="text-2xl text-gray-50 mt-5">Enter a number</h1>
      <form className="flex w-full justify-center">
        <label className="w-1/4 border flex justify-between p-1">
          <input
            className="w-3/4 bg-transparent focus:outline-none text-5xl text-center text-gray-50"
            type="text"
          />
          <button className="border p-2 bg-gray-50" type="button">
            Add Number
          </button>
        </label>
      </form>
      <div>
        <button className="border p-2 bg-gray-50" type="button">
          Show list of Numbers
        </button>
        <ul className="flex flex-col w-full items-center gap-3 mt-5">
          <li className="text-lg text-gray-50">number : bonjour</li>
          <li>bonjour</li>
          <li>bonjour</li>
          <li>bonjour</li>
        </ul>
      </div>
    </div>
  );
}
