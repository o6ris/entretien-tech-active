import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [numbers, setNumbers] = useState([]);
  const [isListDisplayed, setIsListDisplayed] = useState(false);
  const [nbrOnChange, setNbrOnChange] = useState("");

  // This Function handle get all numbers
  const getAllNumbers = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/numbers`)
      .then((nbrs) => setNumbers(nbrs.data))
      .catch((error) => console.error(error));
  };

  // This Function handle post a number
  const handleAddNumber = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/numbers`, {
        myNumber: nbrOnChange,
      })
      .then(() => {
        getAllNumbers();
      })
      .catch((error) => console.error(error));
  };

  // This Function handle delete a number
  const handleDeleteNumber = (numberId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/numbers/${numberId}`)
      .then(() => {
        getAllNumbers();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-10">
      <h1 className="text-2xl text-gray-50 mt-5">Enter a number</h1>
      <form className="flex w-full justify-center">
        <label className="w-1/4 border flex justify-between p-1">
          <input
            onChange={(e) => setNbrOnChange(e.target.value)}
            className="w-3/4 bg-transparent focus:outline-none text-5xl text-center text-gray-50"
            type="text"
          />
          <button
            onClick={handleAddNumber}
            className="border p-2 bg-gray-50"
            type="button"
          >
            Add Number
          </button>
        </label>
      </form>
      <div className="flex flex-col">
        <button
          onClick={() => setIsListDisplayed(!isListDisplayed)}
          className="border p-2 bg-gray-50"
          type="button"
        >
          Show list of Numbers
        </button>
        {isListDisplayed && (
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col w-full items-center gap-3 mt-5">
              {numbers.map((number) => (
                <div className="flex gap-3 w-full justify-between">
                  <button type="button" className="text-lg text-gray-50">
                    number: {number.myNumber}
                  </button>
                  <button
                    onClick={() => handleDeleteNumber(number.id)}
                    type="button"
                    className="p-2 bg-gray-50 hover:font-bold hover:bg-red-500 hover:text-gray-50"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
