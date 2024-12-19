import { useRouter } from 'next/router';
import Button from "@/components/atoms/Button";

const RegistrationForm = () => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/registration/form');
  };

  const docs = [
    "Kartu Keluarga",
    "Akta Kelahiran",
    "Ijazah/SKL/Surat Keterangan Lulus",
    "KPS/KPH",
    "KIP (bila ada)",
    "Foto Calon Peserta Didik (Sopan dan Rapi)",
    "Prestasi (bila ada)"
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10 mb-10">
      <div className="bg-[#1b557a] text-center p-6 border-b-4 border-[#1b557a]">
        <h1 className="text-white text-3xl font-bold">
          FORMULIR PENDAFTARAN PESERTA DIDIK BARU SMK MUHAMMADIYAH 2 BLORA
        </h1>
        <p className="text-white text-lg mt-2">
          Tahun Pelajaran 2025/2026
        </p>
      </div>
      <div className="bg-white p-8 rounded-b-lg text-[#1b557a]">
        <p className="text-lg font-bold">
          Perhatian! Beberapa dokumen (softfile) berikut perlu dipersiapkan sebelum melakukan pendaftaran:
        </p>
        <ol className="mt-4 list-decimal list-inside">
          {docs.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ol>
      </div>
      <hr className="my-4 bg-[#1b557a] h-1 border-none" />
      <div className="flex justify-center my-3">
        <Button color="bg-pink-600 mb-3" onClick={handleClick}>Daftar</Button>
      </div>
    </div>
  );
};

export default RegistrationForm;
