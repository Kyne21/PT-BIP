import {React, useState, useEffect} from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import '../firebaseConfig';

const Table = () => {
  const [data, setData] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "database"));
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      setData(temp);
    };

    fetchData();
  }, [db]);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="overflow-x-auto">
        <div className="max-h-[680px] overflow-y-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Periode</th>
                <th className="px-4 py-2 text-left">NO</th>
                <th className="px-4 py-2 text-left">Nama DO</th>
                <th className="px-4 py-2 text-left">Nomor DO</th>
                <th className="px-4 py-2 text-left">Kuanta DO</th>
                <th className="px-4 py-2 text-left">Periode</th>
                <th className="px-4 py-2 text-left">Tgl Periode DO</th>
                <th className="px-4 py-2 text-left">Tgl Print DO</th>
                <th className="px-4 py-2 text-left">Tgl Jatuh Tempo</th>
                <th className="px-4 py-2 text-left">Terbilang</th>
                <th className="px-4 py-2 text-left">Pembulan dari kolom G</th>
                <th className="px-4 py-2 text-left">Manual dari Kolom L</th>
                <th className="px-4 py-2 text-left">Ex Koperasi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{item.Prd}</td>
                  <td className="px-4 py-2">{item.No}</td>
                  <td className="px-4 py-2">{item.namaDO}</td>
                  <td className="px-4 py-2">{item.nomorDO}</td>
                  <td className="px-4 py-2">{item.kuantaPembulatan}</td>
                  <td className="px-4 py-2">{item.Prd}</td>
                  <td className="px-4 py-2">{item.tglPeriodeDO}</td>
                  <td className="px-4 py-2">{item.tglPrintDO}</td>
                  <td className="px-4 py-2">{item.tglJatuhTempo}</td>
                  <td className="px-4 py-2">{item.terbilang}</td>
                  <td className="px-4 py-2">{item.PembulatanKolomG}</td>
                  <td className="px-4 py-2">{item.manualKolomL}</td>
                  <td className="px-4 py-2">{item.exKoperasi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
