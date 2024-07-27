import {React, useState, useEffect} from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import '../firebaseConfig';
import { format } from "date-fns";

const Table = () => {
  const [data, setData] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "do_10"));
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
                <th className="px-4 py-2 text-left">No Antrian</th>
                <th className="px-4 py-2 text-left">No SPPG</th>
                <th className="px-4 py-2 text-left">No SO</th>
                <th className="px-4 py-2 text-left">Tanggal Ambil</th>
                <th className="px-4 py-2 text-left">No Urut</th>
                <th className="px-4 py-2 text-left">No DO</th>
                <th className="px-4 py-2 text-left">No Kontrak</th>
                <th className="px-4 py-2 text-left">Atas Nama</th>
                <th className="px-4 py-2 text-left">Kuanta Ambil</th>
                <th className="px-4 py-2 text-left">Masa Berlaku</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{item.antrian}</td>
                  <td className="px-4 py-2">{item.sppg}</td>
                  <td className="px-4 py-2">{item.no_so}</td>
                  <td className="px-4 py-2">{item.tgl_ambil}</td>
                  <td className="px-4 py-2">{item.no_urut}</td>
                  <td className="px-4 py-2">{item.no_do}</td>
                  <td className="px-4 py-2">{item.no_kontrak}</td>
                  <td className="px-4 py-2">{item.nama}</td>
                  <td className="px-4 py-2">{item.kuanta_10}</td>
                  <td className="px-4 py-2">{item.berlaku}</td>
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
