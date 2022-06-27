import React from "react";
import useCountries from "./hooks/useCountries";
import UserRow from "./components/UserRow";
import "./components/Principal.css";

function App() {
  const {
    countryInfo,
    GlobalNewConfirmed,
    TotalConmfirmed,
    GlobalTotalDeaths,
  } = useCountries();

  return (
    <>
      <div className="container-virus-info w-full h-screen mx-auto">
        <div className="backdrop-blur sm:backdrop-blur-none	md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none	sm:mx-auto w-full md:w-9/12 lg:w-8/6 xl:w-3/4 2xl:w-6/12 h-screen items-center flex flex-col justify-center">
          <h1 className="text-center text-3xl font-bold font-mono my-4 p-2 text-white rounded-lg bg-[#b03432] ">Contagios a nivel mundial</h1>
          <p className="text-white">*Datos con un día de desfase*</p>
          <div className="w-full rounded-lg flex flex-wrap justify-evenly sm:gap-4 lg:w-5/6 xl:w-5/6 2xl:w-full ">
            <div className="block text-center bg-white my-4 p-4 rounded-lg w-2/5 sm:w-1/3 md:w-2/5 lg:w-1/3 2xl:w-2/6 shadow-inner">
              <h1 className="text-black font-mono text-xl  font-bold">Nuevos confirmados</h1>
              <p className="text-black font-mono text-xl font-bold">{GlobalNewConfirmed}</p>
            </div>
            <div className="block text-center bg-white my-4 p-4 rounded-lg w-2/5 sm:w-1/3 md:w-2/5 lg:w-1/3 2xl:w-2/6">
              <h1 className="text-black font-mono text-xl  font-bold">Nuevos muertos</h1>
              <p className="text-black font-mono text-xl font-bold">{TotalConmfirmed}</p>
            </div>
            <div className="block text-center bg-white my-4 p-4 rounded-lg w-3/6 sm:w-1/3 md:w-2/5 lg:w-1/3 2xl:w-2/6">
              <h1 className="text-black font-mono text-xl  font-bold">Total de muertos</h1>
              <p className="text-black font-mono text-xl font-bold">{GlobalTotalDeaths}</p>
            </div>
          </div>
          <h1 className="text-center text-3xl font-bold font-mono my-4 p-2 text-white rounded-lg bg-[#b03432]">Chile</h1>

          {countryInfo
              .filter((pais) => pais.Country === "Chile")
              .map((pais) => (
                <UserRow key={pais.ID} pais={pais} />
          ))}
        </div>
        

            
        
      </div>
    </>
  );
}

export default App;
