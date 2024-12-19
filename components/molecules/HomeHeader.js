import React from 'react';
import Link from 'next/link';

const HomeHeader = () => {
  return (
    <header className="bg-white py-4 relative">
      <div className="container mx-auto flex items-center relative">
        
        <div className="absolute left-10 z-10">
          <div
            className="w-24 h-32 relative"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
              backgroundColor: '#B03A58',
            }}
          >
            <img
              src="/img/logo_sekolah_1.png"
              alt="Logo SMK"
              className="absolute inset-0 w-full h-full p-3 object-contain"
            />
          </div>
        </div>

        <div className="flex items-center ml-40">
          <img src="/img/logo_smk.png" alt="SMK Bisa" className="h-10 w-auto" />
        </div>

        <nav className="space-x-4 mx-20">
          <Link href="/" className="text-primaryBlue font-semibold hover:text-pink-600">
            Home
          </Link>
          <Link href="/jurusan" className="text-primaryBlue font-semibold hover:text-pink-600">
            Jurusan <span className="ml-1">+</span>
          </Link>
          <Link href="/tahapan_ppdb" className="text-primaryBlue font-semibold hover:text-pink-600">
            Tahapan PPDB
          </Link>
          <Link href="/faq" className="text-primaryBlue font-semibold hover:text-pink-600">
            FAQ PPDB
          </Link>
          <Link href="/kontak" className="text-primaryBlue font-semibold hover:text-pink-600">
            Kontak Kami
          </Link>
        </nav>

        <Link
          href="/login"
          className="bg-pink-600 text-white py-2 px-6 rounded-full font-bold hover:bg-pink-700 transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
