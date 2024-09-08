import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";
import { Oval } from "react-loader-spinner"; // Import loader dari react-loader-spinner
import "../firebaseConfig";
import "./uploadExcel.css";

const UploadExcel = () => {
  const [data, setData] = useState([]);
  const [isFileLoading, setIsFileLoading] = useState(false); // State untuk loading saat file dipilih
  const [isUploading, setIsUploading] = useState(false); // State untuk loading saat upload
  const db = getFirestore();

  const handleFileUpload = (e) => {
    setIsFileLoading(true); // Set loading saat file dipilih
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Membaca semua data sebagai array
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Ambil baris ke-3 sebagai header
      const headers = jsonData[2].slice(1, 16); // Ambil dari kolom kedua sampai kolom ke-15

      // Ambil data mulai dari baris ke-4 sampai baris ke-150 dan kolom kedua sampai kolom ke-15
      const dataRows = jsonData.slice(3, 150).map((row) => {
        let rowData = {};
        headers.forEach((header, index) => {
          if (index < row.length - 1) {
            rowData[header] = row[index + 1]; // Ambil mulai dari kolom kedua
          }
        });
        return rowData;
      });

      setData(dataRows); // Menyimpan data yang sudah diformat
      setIsFileLoading(false); // Set loading selesai setelah file selesai dibaca
    };

    reader.readAsBinaryString(file);
  };

  const handleUploadToFirestore = async () => {
    setIsUploading(true); // Set loading saat proses upload dimulai
    try {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        console.log("Uploading item: ", item); // Debugging log to check each item
        console.log("No:", item["No"]);
        console.log("kuantaProdis:", item["Kuanta Prodis"]);
        console.log("kuantaPembulatan:", item["Kuanta DO pembulatan"]);

        await addDoc(collection(db, "database"), {
          prd: item["Prd"] || "N/A",
          No: item["No"] || "N/A",
          namaDO: item["Nama DO"] || "N/A",
          nomorDO: item["Nomor DO"] || "N/A",
          kuantaProdis: item["Kuanta Prodis"] || 0,
          kuantaPembulatan: item["Kuanta DO pembulatan"] || 0,
          periode: item["Periode"] || "N/A",
          tglPeriodeDO: item["Tgl Periode DO"] || "N/A",
          tglPrintDO: item["TGL PRINT DO"] || "N/A",
          tglJatuhTempo: item["TGL JATUH TEMPO"] || "N/A",
          terbilang: item["Terbilang"] || "N/A",
          pembulatanKolomG: item["pembulan dari kolom G"] || "N/A",
          manualKolomL: item["nmnual dari Kolom L"] || "N/A",
          exKoperasi: item["EX KOPERASI"] || "N/A",
        });
      }
      alert("Data berhasil diupload ke Firestore!");
    } catch (error) {
      console.error("Error menambahkan data ke Firestore: ", error);
    } finally {
      setIsUploading(false); // Set loading selesai setelah proses upload selesai
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      {/* Tampilkan overlay jika sedang loading */}
      {(isFileLoading || isUploading) && (
        <div className="overlay">
          <div className="loading-spinner">
            <Oval height="80" width="80" color='#0077b6' ariaLabel="loading" strokeWidth="4" strokeWidthSecondary="4" secondaryColor="#0096c7"/>
          </div>
        </div>
      )}

      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />

      <button
        onClick={handleUploadToFirestore}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        disabled={isUploading || isFileLoading} // Disable button saat loading
      >
        {isUploading ? "Uploading..." : "Upload ke Firestore"}
      </button>
    </div>
  );
};

export default UploadExcel;
