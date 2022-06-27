import React from "react";

function UserRow({ pais }) {
  return (
    <> 
      <div className="w-full md:w-full lg:w-5/6 xl:w-5/6 2xl:w-full rounded-lg flex flex-wrap justify-evenly sm:gap-4">
        <div className="block text-center bg-white my-4 p-4 rounded-lg w-2/5 sm:w-1/3 md:w-2/5 lg:w-1/3 xl:w-2/5 2xl:w-2/6">
          <h1 className="text-black font-mono text-xl  font-bold">Total de casos</h1>
          <p className="text-black font-mono text-xl font-bold">{pais.TotalConfirmed}</p>
        </div>
        <div className="block text-center bg-white my-4 p-4 rounded-lg w-2/5 sm:w-1/3 md:w-2/5 lg:w-1/3 xl:w-2/5 2xl:w-2/6">
          <h1 className="text-black font-mono text-xl  font-bold">Casos diarios</h1>
          <p className="text-black font-mono text-xl font-bold">{pais.NewConfirmed}</p>
        </div>
        <div className="block text-center bg-white my-4 p-4 rounded-lg w-4/6 sm:w-2/5 md:w-2/5 lg:w-1/3 xl:w-2/5 2xl:w-2/6">
          <h1 className="text-black font-mono text-xl font-bold">Ultimos fallecidos</h1>
          <p className="text-black font-mono text-xl font-bold">{pais.NewDeaths}</p>
        </div>
      </div>
    </>
   
  );
}

export default UserRow;
