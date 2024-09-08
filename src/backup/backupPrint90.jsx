import { height } from "@mui/system";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../logo_grayscale.png";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "../../firebaseConfig";

function Print() {
  const [currentDate, setCurrentDate] = useState("");
  const printRef = useRef();
  const [sppgNumbers, setSppgNumbers] = useState([""]);
  const [data, setData] = useState([]);
  const db = getFirestore();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload halaman untuk mengembalikan konten asli
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
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
      if (!sppg) return null; // Skip empty sppg numbers
      const q = query(collection(db, "do_90"), where("sppg", "==", sppg));
      const querySnapshot = await getDocs(q);
      let result = null;
      querySnapshot.forEach((doc) => {
        result = doc.data();
      });
      return result;
    });

    const results = await Promise.all(dataPromises);
    return results.filter((item) => item !== null); // Filter out null values
  };

  const addSppgInput = () => {
    setSppgNumbers([...sppgNumbers, ""]);
    setData([...data, {}]);
  };

  const removeSppgInput = () => {
    if (sppgNumbers.length > 1) {
      setSppgNumbers(sppgNumbers.slice(0, -1));
      setData(data.slice(0, -1));
    }
  };

  return (
    <>
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
      <div
        className="container border border-slate-800 flex flex-col mx-auto rounded-2xl"
        style={{ width: "55vw" }}
      >
        <div
          ref={printRef}
          className="container flex flex-col mx-auto"
          style={{ width: "55vw" }}
        >
          {data.map((item, index) => (
            <>
              {index > 0 && <hr className="border border-slate-800 mb-4 rounded-t-2xl border-t-4 border-b-0" />
}

              <div className="flex mb-4 p-4">
                <img
                  alt="logo"
                  src={logo}
                  className="h-24 w-auto flex items-start"
                />
                <div className="text-container ml-4 flex flex-col justify-center">
                  <h2 className="font-inter font-medium text-md text-gray-900">
                    PT Sinergi Gula Nusantara
                  </h2>
                  <p className="font-inter font-light text-gray-600">
                    Pabrik Gula Tjoekir
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center h-full">
                <h1 className="text-lg font-bold font-inter">
                  SURAT PERINTAH PENYERAHAN GULA
                </h1>
              </div>

              <div className="container font-medium" key={index}>
                <div className="flex justify-between mx-12 my-8 whitespace-pre">
                  <p>Gula : SHS1</p>
                  <p>Tahun Terbit : 2024</p>
                </div>
                <div className="flex justify-between mx-12 my-8 ">
                  <p className="w-[300px] break-words">
                    Nomor DO : {item.sppg}
                  </p>
                  <p>Tanggal DO : {item.tanggalSPPB}</p>
                </div>
                <div className="flex justify-between mx-12 my-8 whitespace-pre">
                  <p>No SK : {item.sk}</p>
                  <p>Tanggal SK : {item.tanggalSK}</p>
                </div>
                <div className="flex flex-nowrap my-8 justify-between">
                  <p className="w-[350px] mb-2 ml-12 break-words">
                    Untuk Nama : {item.pengambil}
                  </p>
                  <p className="w-[300px] ml-20 break-words">
                    Alamat : {item.alamat}
                  </p>
                </div>
              </div>
              <hr className="border-2 border-slate-800"></hr>
              <div className="container font-medium">
                <div className="flex mx-12 my-8">
                  <p className="mr-2 whitespace-pre">Sebanyak :</p>
                  <p className="ml-2 font-extrabold">{item.kuanta} Kg</p>
                  <p className="ml-16 font-bold">Empat Puluh Ribu Kilogram</p>
                </div>
                <div className="flex mx-12 my-8">
                  <p className="mr-2 whitespace-pre">Sisa :</p>
                  <p className="ml-2 font-extrabold">{item.sisa} Kg</p>
                  <div className="ml-auto flex items-center">
                    <p className="ml-16">Nopol: </p>
                    <p className="ml-2">{item.nopol}</p>
                  </div>
                </div>
              </div>
              <hr className="border-2 border-slate-800"></hr>
              <div className="container font-medium">
                <p className="flex justify-end p-4 mr-8 font-bold">
                  Cukir, {currentDate}
                </p>
                <div className="flex mx-12 mb-8 justify-between">
                  <p className="text-center">
                    Telah diserahkan <br /> Pengawas Gudang
                  </p>
                  <p className="text-center">
                    Manager <br /> Keuangan & Umum
                  </p>
                </div>
                <div className="flex mx-12 mb-8 mt-20 justify-between whitespace-pre">
                  <p className="text-center">( )</p>
                  <p className="text-center">( )</p>
                </div>
                <div className="flex mx-12 my-8 justify-between">
                  <p className="text-center">
                    Telah diperiksa <br /> Petugas Keamanan
                  </p>
                  <p className="text-center mr-4">
                    Telah diterima <br /> Pengangkut
                  </p>
                </div>
                <div className="flex mx-12 mb-8 mt-20 justify-between whitespace-pre">
                  <p className="text-center">( )</p>
                  <p className="text-center">( )</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-8 mr-72">
        <button
          onClick={handlePrint}
          type="button"
          className="mr-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Print
        </button>
      </div>
    </>
  );
}

export default Print;
