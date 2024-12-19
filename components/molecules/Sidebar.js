import React, { useRef, useEffect, useState } from 'react';
import { FaTachometerAlt, FaUserGraduate, FaSignOutAlt, FaMicrophone, FaDollarSign, FaFileArchive, FaUsers, FaFileAlt } from 'react-icons/fa';
import { GrAnnounce } from "react-icons/gr";

export const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);
  const [activeItem, setActiveItem] = useState('Dashboard');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (isSidebarOpen) {
          toggleSidebar();
        }
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  const handleSetActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 w-64 h-full bg-[#18577B] text-white flex flex-col justify-between z-50 sidebar ${isSidebarOpen ? 'show' : ''}`}
      style={{ boxShadow: '4px 0 8px rgba(0, 0, 0, 0.2)' }}
    >
      <div>
        <div className="bg-white py-0 sidebar-logo">
          <div className="flex flex-row py-1 justify-center items-center space-x-4">
            <img src="/img/logo_sekolah_1.png" alt="Logo Sekolah" className="w-16 h-4" />
            <img src="/img/logo_smk.png" alt="Logo SMK" style={{ height: '2.5rem' }} />
          </div>
        </div>

        <ul className="mt-8">
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Dashboard' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Dashboard')}
          >
            <FaTachometerAlt className="mr-3" /> Dashboard
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Data Calon Siswa' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Data Calon Siswa')}
          >
            <FaUserGraduate className="mr-3" /> Data User
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Konfirmasi Pengumuman' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Seleksi Berkas')}
          >
            <FaMicrophone className="mr-3" /> Konfirmasi Pengumuman
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Seleksi Berkas' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Seleksi Berkas')}
          >
            <FaDollarSign className="mr-3" /> Konfirmasi Pembayaran
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Seleksi Berkas' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Seleksi Berkas')}
          >
            <FaFileArchive className="mr-3" /> Dokumen
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Seleksi Berkas' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Seleksi Berkas')}
          >
            <GrAnnounce className="mr-3" /> Pengumuman
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Seleksi Berkas' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Seleksi Berkas')}
          >
            <FaUsers className="mr-3" /> Data Calon Siswa
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Seleksi Berkas' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Seleksi Berkas')}
          >
            <FaFileAlt className="mr-3" /> Seleksi Berkas
          </li>
          <li
            className={`flex items-center pl-6 py-4 transition-all duration-300 hover:bg-[#103F56] cursor-pointer ${activeItem === 'Logout' ? 'bg-[#103F56] border-l-8 border-[#ED5565]' : ''}`}
            onClick={() => handleSetActiveItem('Logout')}
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </li>
        </ul>
      </div>

      {/* Bagian footer */}
      <div className="text-center mb-4 text-xs">
        © 2024 PPDB SMK Muda Blora
      </div>
    </div>
  );
};
