import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">SMK MUDA BLORA</h3>
          <p>Jalan Gatot Subroto, Blora, Jawa Tengah</p>
          <p>Jam Kerja: 06.00 - 16.00</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Kontak Kami</h3>
          <p>Email: smkmuda_blora@gmail.com</p>
          <p>WhatsApp: +62 1234 5678</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Media Sosial</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
