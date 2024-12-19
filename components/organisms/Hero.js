// components/organisms/Hero.js
import Button from '../atoms/Button';

export default function Hero() {
  return (
    <div className="bg-blue-100 py-10">
      <h1 className="text-4xl font-bold text-center">Selamat Datang di SMK MUDA BLORA</h1>
      <p className="text-center mt-4">Join Our Muda Generation Team!</p>
      <div className="flex justify-center mt-6">
        <Button className="bg-green-500">Daftar Sekarang</Button>
      </div>
    </div>
  );
}
