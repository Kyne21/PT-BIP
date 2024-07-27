import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Form = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const dataForm = new FormData(e.target);
    const payload = Object.fromEntries(dataForm);

    console.log(payload);

    fetch("/api/submit", {
      method: "POST",
      body: payload,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitSuccess(true);
          toast.success("Data Berhasil Ditambahkan!");
        }
      })
      .catch((error) => {
        setSubmitError(true);
        toast.error(`Gagal menambahkan data: ${error.message}`);
        console.log(error);
      });
  };

  return (
    <>
      <div className="text-container font-inter font-medium text-3xl ml-72 mb-4">
        <p>Form DO 90%</p>
        <p className="font-normal text-lg text-[#757575]">
          Silahkan isi form dibawah
        </p>
      </div>
      <div className="container w-[1200px] mx-auto p-4 pt-6 md:p-6 lg:p-12 border-2 border-gray-200 rounded-2xl">
        <form onSubmit={submitForm}>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                No SPPG
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="sppg"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                No Antrian
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="antrian"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Kode
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="kode"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Nopol
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="nopol"
                type="text"
                placeholder="Value"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Pengambil
              </label>
              <input
                className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="pengambil"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="startDate"
              >
                Tanggal ambil
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="tgl_ambil"
                type="date"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="startDate"
              >
                Berlaku DO
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="berlaku_do"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Nomor SK
              </label>
              <input
                className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="sk"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="startDate"
              >
                Tanggal SK
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="tgl_sk"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Kuantum DO/Kuasa
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="kuasa"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Kuanta Ambil
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="kuanta"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Sisa Kuanta
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="sisa"
                type="text"
                placeholder="Value"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Nomor SPPB
              </label>
              <input
                className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="sppb"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="startDate"
              >
                Tanggal SPPB
              </label>
              <input
                className="bg-white h-10 w-60 border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="tgl_sppb"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Pemilik
              </label>
              <input
                className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="pemilik"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-inter font-normal text-sm mb-2"
                htmlFor="input-field"
              >
                Alamat
              </label>
              <input
                className="bg-white h-10 w-[500px] border border-gray-300 rounded-lg p-4 pl-5 text-sm mr-5"
                name="alamat"
                type="text"
                placeholder="Value"
              />
            </div>
          </div>
          <button
            type="Submit"
            className="bg-[#2C2C2C] text-white hover:bg-gray-700 font-inter hover:text-white font-normal py-2 px-4 -ml-3 mt-6 rounded text-sm"
          >
            Kirim
          </button>
        </form>
        {submitSuccess && (
          <Toaster richColors position="top-right" closeButton={true} />
        )}
        {submitError && (
          <Toaster richColors position="top-right" closeButton={true} />
        )}
      </div>
    </>
  );
};

export default Form;
