

function Header() {
    return (
      <>
        <div
          className="relative overflow-x-auto border-slate-300 border mx-auto"
          style={{ width: "80vw" }}
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  No. DO
                </th>
                <th scope="col" className="px-6 py-3">
                  kontrak
                </th>
                <th scope="col" className="px-6 py-3">
                  Atas Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Kuanta
                </th>
                <th scope="col" className="px-6 py-3">
                  Berlaku
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">150012024</td>
                <td className="px-6 py-4">SG13240024</td>
                <td className="px-6 py-4">NUNIK FAUZIAH</td>
                <td className="px-6 py-4">34</td>
                <td className="px-6 py-4">10 Agustus 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  export default Header;
  