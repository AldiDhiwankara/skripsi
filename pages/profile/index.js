import Card from "@/components/atoms/Card";
import AdminLayout from "@/components/layouts/AdminLayout";

export default function Profile() {
  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="md:w-1/3">
          <Card className="p-6 bg-[#18577B] text-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-white">
              <img
                src="/img/profile_avatar.png"
                alt="Profile Avatar"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">Hi, Aldi</h2>
              <p className="text-gray-200 mb-4">Calon Peserta Didik</p>
              <hr className="border border-gray-300 w-full mb-4" />
              <div className="text-sm space-y-2 justify-start">
                <p>
                  <strong>No. HP:</strong> +62 822-8484-9696
                </p>
                <p>
                  <strong>E-mail:</strong> aldidhiwankara@gmail.com
                </p>
                <p>
                  <strong>Asal Sekolah:</strong> SMP 1 BLORA
                </p>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <button className="mt-6 bg-[#ED5565] text-white px-6 py-2 rounded-full">
              Update Data
            </button>
          </div>
        </div>

        <div className="md:w-2/3">
          <Card className="p-6 bg-[#18577B] text-white rounded-lg shadow-lg">
          <div className="bg-[#2485C5] p-2 text-white font-semibold w-80 text-center">
              Data Calon Peserta Didik
            </div>
            <hr className="border border-gray-300 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <div>
                <label className="block text-sm mb-2">NISN</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="xxxxxx"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Agama</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Islam"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Aldi Dhiwankara"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Hobi</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Futsal"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Jenis Kelamin</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Laki-Laki"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Cita-Cita</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Desainer"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Tempat Lahir</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Yogyakarta"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Alamat</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Jl."
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Tanggal Lahir</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="xx Jan xxxx"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Alat Transportasi</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Sepeda Motor"
                />
              </div>
            </div>

            <div className="bg-[#2485C5] p-2 text-white font-semibold mt-10 w-80 text-center">
              Data Keluarga Calon Peserta Didik
            </div>
            <hr className="border border-gray-300 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <div>
                <label className="block text-sm mb-2">Nama Ayah</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="-"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Nama Wali</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="-"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Pekerjaan Ayah</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="-"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Pekerjaan Wali</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="-"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Alamat Ayah</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Jl."
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Alamat Wali</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Jl."
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Nama Ibu</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="-"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Jumlah Saudara Kandung</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="2"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Pekerjaan Ibu</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="-"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Perkiraan Pendapatan Orang Tua/Wali</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="RP-"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Alamat Ibu</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="Jl."
                />
              </div>
              <div>
                <label className="block text-sm mb-2">No. HP Orang Tua/Wali</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  defaultValue="-"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
