import React, { useState } from "react";
import { letterValue, reOrderIban } from "./components/Validation";

function App() {
  const [iban, setIban] = useState("");
  const LI_IBAN = 21;

  const handlerChangeIban = (e) => {
    setIban(e.target.value);
  };
  //console.log(iban);

  console.log(letterValue("LI"));

  console.log(reOrderIban("1234567890"));

  return (
    <div className="mx-auto h-fit rounded max-w-screen-md m-40 p-28 bg-gradient-to-br from-cyan-50 to-sky-200 shadow-lg shadow-gray-400">
      <div className="text-center mb-14 text-2xl font-semibold tracking-wide underline">
        <h1>IBAN Verification</h1>
      </div>
      <div className="text-center text-lg flex flex-col">
        <input
          type="text"
          placeholder="IBAN"
          className="w-full mb-12 outline-none border-b-2 border-b-black bg-transparent"
          value={iban}
          onChange={handlerChangeIban}
        />
        <div>
          <button
            type="submit"
            className="px-20 py-2 rounded-full border shadow-md shadow-gray-400 border-black hover:bg-sky-900 hover:text-white"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
