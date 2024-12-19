import FormGroup from "@/components/molecules/FormGroup";
import FileUpload from "@/components/molecules/FIleUpload";
import Button from "@/components/atoms/Button";
import { useState } from "react";

const DaftarUlangForm = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      jurusan: "",
      tinggiBadan: "",
      beratBadan: "",
      lingkarKepala: "",
      lingkarPinggang: ""
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  
    return (
        <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-10 mb-10">
      <div className="bg-white text-center p-6 border-b-4 border-[#1b557a]">
        <h1 className="text-[#1b557a] text-3xl font-bold">
          FORMULIR DAFTAR ULANG PESERTA DIDIK BARU
        </h1>
        <p className="text-[#1b557a] text-lg mt-2">
          Tahun Pelajaran 2025/2026
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#1b557a] p-8 rounded-b-lg">
        <FormGroup
          label="Nama Lengkap"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <FormGroup
          label="Jurusan"
          name="jurusan"
          value={formData.jurusan}
          onChange={handleChange}
        />

        <hr className="my-8" />
        <FormGroup
          label="Tinggi Badan"
          name="tinggiBadan"
          value={formData.tinggiBadan}
          onChange={handleChange}
        />
        <FormGroup
          label="Berat Badan"
          name="beratBadan"
          value={formData.beratBadan}
          onChange={handleChange}
        />
        <FormGroup
          label="Lingkar Kepala"
          name="lingkarKepala"
          value={formData.lingkarKepala}
          onChange={handleChange}
        />
        <FormGroup
          label="Lingkar Pinggang"
          name="lingkarPinggang"
          value={formData.lingkarPinggang}
          onChange={handleChange}
        />

        <hr className="my-8" />

        <FileUpload label="Bukti Hasil Pengumuman" name="hasilPengumuman" />
        <FileUpload label="Bukti Pembayaran Daftar Ulang" name="buktiPembayaran" />

        <div className="flex justify-center">
          <Button color="bg-pink-600">Kirim</Button>
        </div>
      </form>
    </div>
    );
  };
  
  export default DaftarUlangForm;
