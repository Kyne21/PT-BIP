import React, { useState, useEffect } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import '../../firebaseConfig';

function Print() {
  const [currentDate, setCurrentDate] = useState("");
  const [sppgNumbers, setSppgNumbers] = useState([""]);
  const [data, setData] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleSppgChange = async (index, value) => {
    const newSppgNumbers = [...sppgNumbers];
    newSppgNumbers[index] = value;
    setSppgNumbers(newSppgNumbers);

    // Fetch data based on the updated sppgNumbers
    const fetchedData = await fetchData(newSppgNumbers);
    setData(fetchedData);
  };

  const fetchData = async (sppgNumbersArray) => {
    const dataPromises = sppgNumbersArray.map(async (sppg) => {
      if (!sppg) return null;
      const q = query(collection(db, "do_10"), where("sppg", "==", sppg));
      const querySnapshot = await getDocs(q);
      let result = null;
      querySnapshot.forEach((doc) => {
        result = doc.data();
      });
      return result;
    });

    const results = await Promise.all(dataPromises);
    return results.filter((item) => item !== null);  // Filter out null values
  };

  const addSppgInput = () => {
    setSppgNumbers([...sppgNumbers, ""]);
    setData([...data, null]);
  };

  const removeSppgInput = () => {
    if (sppgNumbers.length > 1) {
      setSppgNumbers(sppgNumbers.slice(0, -1));
      setData(data.slice(0, -1));
    }
  };

  const printPage = () => {
    window.print();
  };

  return (
    <>
      <div>
        <div
          className="container mx-auto mt-10 font-inter flex"
          style={{ width: "60vw" }}
        >
          {/* Left side with SPPG input fields in a row */}
          <div className="w-1/4 mr-8 flex flex-col items-start">
            <h2 className="text-xl font-bold mb-4">Nomor SPPG</h2>
            <div className="flex flex-wrap space-y-4">
              {sppgNumbers.map((sppg, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <label className="block text-gray-700 text-sm font-bold">
                    SPPG {index + 1}
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={sppg}
                    onChange={(e) => handleSppgChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div>
              <button
                type="button"
                onClick={addSppgInput}
                className="mt-4 mx-10 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 focus:outline-none"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeSppgInput}
                className="mt-4 mx-8 px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 focus:outline-none"
              >
                -
              </button>
            </div>
          </div>

          {/* Right side with the table and other content */}
          <div id="printableArea" className="w-3/4">
            <h1 className="text-2xl font-bold text-left mb-4">
              Tanggal {currentDate}
            </h1>
            <table className="table-auto w-full border border-gray-700">
              <thead>
                <tr className="border border-gray-700">
                  <th className="px-4 py-2 text-left border border-gray-700">
                    No.
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    No. DO
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Kontrak
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Atas nama
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Kuanta
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Masa berlaku
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  row && (
                    <tr key={index} className="border border-gray-700">
                      <td className="px-4 py-2 border border-gray-700">{index + 1}</td>
                      <td className="px-4 py-2 border border-gray-700">{row.no_do}</td>
                      <td className="px-4 py-2 border border-gray-700">{row.no_kontrak}</td>
                      <td className="px-4 py-2 border border-gray-700">{row.nama}</td>
                      <td className="px-4 py-2 border border-gray-700">{row.kuanta_10}</td>
                      <td className="px-4 py-2 border border-gray-700">{row.berlaku}</td>
                    </tr>
                  )
                ))}


















              </tbody>
            </table>

            <div className="text-center pt-4 pl-4 h-12 border-l border-r border-gray-700">
              <h1 className="font-bold text-xl text-left">
                Terbilang: Dua Ribu Sembilan Puluh Enam Kilogram
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="w-1/2 border-l border-b border-gray-700 p-4">
                <p className="font-bold text-center mt-4 mb-28">Pengambil</p>
                <div className="flex justify-center items-center">
                  <span className="mr-24">(</span>
                  <div className="p-4"></div>
                  <span className="ml-24">)</span>
                </div>
              </div>
              <div className="w-1/2 border-r border-b border-gray-700 p-4">
                <p className="font-bold text-center mb-2">
                  PT. SINERGI GULA NUSANTARA
                </p>
                <p className="font-bold text-center mb-24">
                  PABRIK GULA TJOEKIR
                </p>
                <div className="flex justify-center items-center">
                  <span className="mr-24">(</span>
                  <div className="p-4"></div>
                  <span className="ml-24">)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-48">
        <button
          onClick={printPage}
          type="button"
          className="mr-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Print
        </button>
      </div>

      {/* Style for print */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #printableArea, #printableArea * {
              visibility: visible;
            }
            #printableArea {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;

            }
            button {
              display: none;

            }
          }
        `}
      </style>
    </>
  );
}

export default Print;