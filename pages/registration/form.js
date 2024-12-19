import { useState } from 'react';
import MultiStepForm from '@/components/organisms/MultiStepForm';
import Input from "@/components/atoms/Input";
import StudentRegistrationForm from '@/components/layouts/StudentRegistrationForm';

const FormStep1 = ({ formData, setFormData }) => (
  <div className="form-step">
    <Input
      label="NISN"
      name="nisn"
      value={formData.nisn}
      onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
    />
    <Input
      label="Asal Sekolah"
      name="asalSekolah"
      value={formData.asalSekolah}
      onChange={(e) => setFormData({ ...formData, asalSekolah: e.target.value })}
    />

    <hr className="mt-8 mb-8" />

    <Input
      label="Nama Lengkap"
      name="namaLengkap"
      value={formData.namaLengkap}
      onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
    />
    <Input
      label="Jurusan"
      name="jurusan"
      value={formData.jurusan}
      onChange={(e) => setFormData({ ...formData, jurusan: e.target.value })}
    />
    <Input
      label="Tempat Lahir"
      name="tempatLahir"
      value={formData.tempatLahir}
      onChange={(e) => setFormData({ ...formData, tempatLahir: e.target.value })}
    />
    <Input
      label="Tanggal Lahir"
      name="tanggalLahir"
      value={formData.tanggalLahir}
      onChange={(e) => setFormData({ ...formData, tanggalLahir: e.target.value })}
    />
    <Input
      label="Agama"
      name="agama"
      value={formData.agama}
      onChange={(e) => setFormData({ ...formData, agama: e.target.value })}
    />
    <Input
      label="Alamat"
      name="alamat"
      value={formData.alamat}
      onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
    />
    <Input
      label="Alat Transportasi"
      name="alatTransportasi"
      value={formData.alatTransportasi}
      onChange={(e) => setFormData({ ...formData, alatTransportasi: e.target.value })}
    />
    <Input
      label="Hobi"
      name="hobi"
      value={formData.hobi}
      onChange={(e) => setFormData({ ...formData, hobi: e.target.value })}
    />
    <Input
      label="Cita - Cita"
      name="citaCita"
      value={formData.citaCita}
      onChange={(e) => setFormData({ ...formData, citaCita: e.target.value })}
    />
    <Input
      label="Email"
      name="noHp"
      value={formData.noHp}
      onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
    />
  </div>
);
FormStep1.title = "Data Calon Peserta Didik";

const FormStep2 = ({ formData, setFormData }) => (
  <div className="form-step">
    <Input
      label="Nama Ayah"
      name="namaAyah"
      value={formData.namaAyah}
      onChange={(e) => setFormData({ ...formData, namaAyah: e.target.value })}
    />
    <Input
      label="Pekerjaan Ayah"
      name="pekerjaanAyah"
      value={formData.pekerjaanAyah}
      onChange={(e) => setFormData({ ...formData, pekerjaanAyah: e.target.value })}
    />
    <Input
      label="Alamat Ayah"
      name="alamatAyah"
      value={formData.alamatAyah}
      onChange={(e) => setFormData({ ...formData, alamatAyah: e.target.value })}
    />

    <hr className="mt-8 mb-8" />
    <Input
      label="Nama Ibu"
      name="namaIbu"
      value={formData.namaIbu}
      onChange={(e) => setFormData({ ...formData, namaIbu: e.target.value })}
    />
    <Input
      label="Pekerjaan Ibu"
      name="pekerjaanIbu"
      value={formData.pekerjaanIbu}
      onChange={(e) => setFormData({ ...formData, pekerjaanIbu: e.target.value })}
    />
    <Input
      label="Alamat Ibu"
      name="alamatIbu"
      value={formData.alamatIbu}
      onChange={(e) => setFormData({ ...formData, alamatIbu: e.target.value })}
    />

    <hr className="mt-8 mb-8" />
    <Input
      label="Nama Wali"
      name="namaWali"
      value={formData.namaWali}
      onChange={(e) => setFormData({ ...formData, namaWali: e.target.value })}
    />
    <Input
      label="Pekerjaan Wali"
      name="pekerjaanWali"
      value={formData.pekerjaanWali}
      onChange={(e) => setFormData({ ...formData, pekerjaanWali: e.target.value })}
    />
    <Input
      label="Alamat Wali"
      name="alamatWali"
      value={formData.alamatWali}
      onChange={(e) => setFormData({ ...formData, alamatWali: e.target.value })}
    />

    <hr className="mt-8 mb-8" />
    <Input
      label="Jumlah Saudara"
      name="jumlahSaudara"
      value={formData.jumlahSaudara}
      onChange={(e) => setFormData({ ...formData, jumlahSaudara: e.target.value })}
    />
    <Input
      label="Gaji Orang Tua/Wali"
      name="gajiOrtuOrWali"
      value={formData.gajiOrtuOrWali}
      onChange={(e) => setFormData({ ...formData, gajiOrtuOrWali: e.target.value })}
    />
    <Input
      label="No. HP Orang Tua/Wali"
      name="noHpOrtuOrWali"
      value={formData.noHpOrtuOrWali}
      onChange={(e) => setFormData({ ...formData, noHpOrtuOrWali: e.target.value })}
    />
  </div>
);
FormStep2.title = "Data Keluarga Calon Peserta Didik";

const FormStep3 = ({ formData, setFormData }) => (
  <div className="form-step">
    <Input
        label="Kartu Keluarga"
        type="file"
        name="kartuKeluarga"
        onChange={(e) => setFormData({ ...formData, kartuKeluarga: e.target.files[0] })}
    />
    <Input
        label="Akta Kelahiran"
        type="file"
        name="aktaKelahiran"
        onChange={(e) => setFormData({ ...formData, aktaKelahiran: e.target.files[0] })}
    />
    <Input
        label="Ijazah/SKL"
        type="file"
        name="ijazah"
        onChange={(e) => setFormData({ ...formData, ijazah: e.target.files[0] })}
    />
    <Input
        label="KPS/KPH"
        type="file"
        name="kpsOrKph"
        onChange={(e) => setFormData({ ...formData, kpsOrKph: e.target.files[0] })}
    />
    <Input
        label="KIP (bila ada)"
        type="file"
        name="kip"
        onChange={(e) => setFormData({ ...formData, kip: e.target.files[0] })}
    />
    <Input
        label="Foto Calon Peserta Didik (Sopan dan Rapi)"
        type="file"
        name="fotoPeserta"
        onChange={(e) => setFormData({ ...formData, fotoPeserta: e.target.files[0] })}
    />

    <hr className="mt-8 mb-8" />
    <Input
        label="Prestasi (bila ada)"
        type="file"
        name="prestasi"
        onChange={(e) => setFormData({ ...formData, prestasi: e.target.files[0] })}
    />
  </div>
);
FormStep3.title = "Dokumen";

const FormStep4 = () => (
    <div className="form-step text-white text-center">
        <p className="text-lg mt-2 text center font-bold">
            Semua data yang anda berikan adalah benar dan bukan milik orang lain
        </p>
        <p className="text-lg mt-2 text center font-bold">
            jika ditemukan adanya pemalsuan, maka anda bersedia menerima sanksi yang diterapkan
        </p>
        <p className="text-lg mt-8 text center">
            Data anda akan diverifikasi oleh pihak sekolah, selanjutnya silakan menunggu pemberitahuan melalui email / WhatsApp
        </p>
    </div>
);
FormStep4.title = "PERHATIAN !!";

const RegistrationStepForm = () => {
  const [formData, setFormData] = useState({
    // form1
    nisn: '',
    asalSekolah: '',
    namaLengkap: '',
    jurusan: '',
    tempatLahir: '',
    tanggalLahir: '',
    agama: '',
    alamat: '',
    alatTransportasi: '',
    hobi: '',
    citaCita: '',
    email: '',
    noHp: '',
    // form2 
    namaAyah: '',
    pekerjaanAyah: '',
    alamatAyah: '',
    namaIbu: '',
    pekerjaanIbu: '',
    alamatIbu: '',
    namaWali: '',
    pekerjaanWali: '',
    alamatWali: '',
    jumlahSaudara: '',
    gajiOrtuOrWali: '',
    noHpOrtuOrWali: '',
    // form3
    kartuKeluarga: null,
    aktaKelahiran: null,
    ijazah: null,
    kpsOrKph: null,
    kip: null,
    fotoPeserta: null,
    prestasi: null
  });

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Form telah dikirim!');
  };

  return (
    <StudentRegistrationForm>
        <MultiStepForm
            bg_form='bg-[#1b557a]'
            text_title_form_color="text-[#1b557a]"
            steps={[
                <FormStep1 formData={formData} setFormData={setFormData} />,
                <FormStep2 formData={formData} setFormData={setFormData} />,
                <FormStep3 formData={formData} setFormData={setFormData} />,
                <FormStep4 formData={formData} setFormData={setFormData} />
            ]}
            onSubmit={handleSubmit}
        />
    </StudentRegistrationForm>
  );
};

export default RegistrationStepForm;