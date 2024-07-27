import React, { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import '../firebaseConfig';

const Form = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    sppg: "",
    antrian: "",
    kode: "",
    nopol: "",
    pengambil: "",
    ambil: "",
    berlakuDO: "",
    sk: "",
    tanggalSK: "",
    kuasa: "",
    kuanta: "",
    sisa: "",
    sppb: "",
    tanggalSPPB: "",
    pemilik: "",
    alamat: "",
  });

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const db = getFirestore();

  const saveData = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "do_10"), {
        sppg: formData.sppg,
        antrian: formData.antrian,
        kode: formData.kode,
        nopol: formData.nopol,
        pengambil: formData.pengambil,
        ambil: formData.ambil,
        berlakuDO: formData.berlakuDO,
        sk: formData.sk,
        tanggalSK: formData.tanggalSK,
        kuasa: formData.kuasa,
        kuanta: formData.kuanta,
        sisa: formData.sisa,
        sppb: formData.sppb,
        tanggalSPPB: formData.tanggalSPPB,
        pemilik: formData.pemilik,
        alamat: formData.alamat,
      });
      alert('Document written');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container w-[1200px] mx-auto p-4 pt-6 md:p-6 lg:p-12 border-2 border-gray-200 rounded-2xl">
      <form onSubmit={saveData}>
        <button variant='outlined' type="submit">Submit</button>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="sppg">
              No SPPG
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="sppg"
              type="text"
              value={formData.sppg}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="antrian">
              No Antrian
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="antrian"
              type="text"
              value={formData.antrian}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="kode">
              Kode
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="kode"
              type="text"
              value={formData.kode}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="nopol">
              Nopol
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="nopol"
              type="text"
              value={formData.nopol}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="pengambil">
              Pengambil
            </label>
            <input
              className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="pengambil"
              type="text"
              value={formData.pengambil}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="ambil">
              Tanggal ambil
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="ambil"
              type="date"
              value={formData.ambil}
              onChange={(event) =>
                handleDateChange(event.target.value, "ambil")
              }
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="berlakuDO">
              Berlaku DO
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="berlakuDO"
              type="date"
              value={formData.berlakuDO}
              onChange={(event) =>
                handleDateChange(event.target.value, "berlakuDO")
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="sk">
              Nomor SK
            </label>
            <input
              className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="sk"
              type="text"
              value={formData.sk}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="tanggalSK">
              Tanggal SK
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="tanggalSK"
              type="date"
              value={formData.tanggalSK}
              onChange={(event) =>
                handleDateChange(event.target.value, "tanggalSK")
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="kuasa">
              Kuantum DO/Kuasa
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="kuasa"
              type="text"
              value={formData.kuasa}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="kuanta">
              Kuanta Ambil
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="kuanta"
              type="text"
              value={formData.kuanta}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="sisa">
              Sisa Kuanta
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="sisa"
              type="text"
              value={formData.sisa}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="sppb">
              Nomor SPPB
            </label>
            <input
              className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="sppb"
              type="text"
              value={formData.sppb}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="tanggalSPPB">
              Tanggal SPPB
            </label>
            <input
              className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="tanggalSPPB"
              type="date"
              value={formData.tanggalSPPB}
              onChange={(event) =>
                handleDateChange(event.target.value, "tanggalSPPB")
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="pemilik">
              Pemilik
            </label>
            <input
              className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="pemilik"
              type="text"
              value={formData.pemilik}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-inter font-normal text-sm mb-2" htmlFor="alamat">
              Alamat
            </label>
            <input
              className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
              name="alamat"
              type="text"
              value={formData.alamat}
              onChange={handleInputChange}
              placeholder="Value"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
