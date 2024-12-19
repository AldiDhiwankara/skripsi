import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative text-white py-30 bg-no-repeat bg-cover bg-center w-full bg-[#133043]"
      style={{ backgroundImage: "url('/img/hero_bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        <div className="relative w-full flex items-center justify-between">
          <div className="absolute top-0 left-0 w-full h-[400px] mt-28 bg-[#133043] bg-opacity-30 rounded-3xl z-0"></div>

          <div className="md:w-1/2 ml-10 relative z-10 p-8">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Selamat Datang di Penerimaan Peserta Didik Baru SMK Muhammadiyah 2 Blora
            </h1>
            <p className="text-lg mb-6"><i>Join Our Muda Generation Team!</i></p>
            <a
              href="/registration"
              className="bg-transparent border-l-2 text-white py-3 px-6 rounded-2xl border border-white hover:bg-opacity-90 transition"
            >
              Daftar Sekarang
            </a>

          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 relative z-10 flex justify-center">
            <Image
              src="/img/hero_smk_student.png"
              alt="Hero Image"
              width={800}
              height={600}
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
