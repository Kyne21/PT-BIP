import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [currentDate, setCurrentDate] = useState("");
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth*ratio)/2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Invoice.pdf')
    })
  }

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);
  return (
    <>
    <div ref={pdfRef} className="container h-1/4">
      <div
        className="container mx-auto mt-10 font-inter"
        style={{ width: "60vw" }}
      >
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
            <tr className="border border-gray-700">
              <td className="px-4 py-2 border border-gray-700">1</td>
              <td className="px-4 py-2 border border-gray-700">150012024</td>
              <td className="px-4 py-2 border border-gray-700">SG13240024</td>
              <td className="px-4 py-2 border border-gray-700">
                NUNIK FAUZIAH
              </td>
              <td className="px-4 py-2 border border-gray-700">34</td>
              <td className="px-4 py-2 border border-gray-700">
                10 Agustus 2024
              </td>
            </tr>
            <tr className="border border-gray-700">
              <td className="px-4 py-2 border border-gray-700">2</td>
              <td className="px-4 py-2 border border-gray-700">150012026</td>
              <td className="px-4 py-2 border border-gray-700">SG13240026</td>
              <td className="px-4 py-2 border border-gray-700">
                NUNIK FAUZIAH
              </td>
              <td className="px-4 py-2 border border-gray-700">1721</td>
              <td className="px-4 py-2 border border-gray-700">
                10 Agustus 2024
              </td>
            </tr>
            <tr className="border border-gray-700">
              <td className="px-4 py-2 border border-gray-700">73</td>
              <td className="px-4 py-2 border border-gray-700">150012029</td>
              <td className="px-4 py-2 border border-gray-700">SG13240029</td>
              <td className="px-4 py-2 border border-gray-700">
                NUNIK FAUZIAH
              </td>
              <td className="px-4 py-2 border border-gray-700">341</td>
              <td className="px-4 py-2 border border-gray-700">
                10 Agustus 2024
              </td>
            </tr>
            <tr className="border border-gray-700">
              <td className="px-4 py-2" colSpan="3"></td>
              <td className="px-4 py-2 font-bold">JUMLAH</td>
              <td className="px-4 py-2 font-bold">2096</td>
              <td className="px-4 py-2 font-bold">KILOGRAM</td>
            </tr>
          </tbody>
        </table>

        <div className="text-center pt-4 pl-4 h-12 border-l border-r border-gray-700">
          <h1 className="font-bold text-xl text-left ">
            Terbilang: Dua Ribu Sembilan Puluh Enam Kilogram
          </h1>
        </div>
        <div className="flex justify-center ">
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
            <p className="font-bold text-center mb-24">PABRIK GULA TJOEKIR</p>
            <div className="flex justify-center items-center">
              <span className="mr-24">(</span>
              <div className="p-4"></div>
              <span className="ml-24">)</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="flex justify-end mt-48">
        <button
        onClick={downloadPDF}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Download
        </button>
      </div>
    </>
  );
}

export default App;
