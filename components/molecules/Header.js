import React from 'react';
import { FaBars } from 'react-icons/fa';

export const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-md z-50">
      <div className="flex items-center space-x-4">
        <FaBars className="text-[#18577B] cursor-pointer md:hidden" onClick={toggleSidebar} />
        <h1 className="text-2xl font-bold text-[#1E3A8A] tracking-wide flex-1 hidden md:block" style={{ paddingLeft: '16rem' }}>
          SISTEM INFORMASI PPDB SMK MUDA BLORA
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-[#1E3A8A] font-bold">Hi, Admin</span>
        <img src="/img/karakter_pelajar.png" alt="Admin Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};