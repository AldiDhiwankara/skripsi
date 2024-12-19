import React, { useState } from 'react';
import { Sidebar } from '@/components/molecules/Sidebar';
import { Header } from '@/components/molecules/Header';
import { ChartsPanel } from '@/components/molecules/ChartsPanel';
import { DataTable } from '@/components/molecules/DataTable';
import { SidebarGuru } from '../molecules/SidebarGuru';
import { useRouter } from 'next/router';
import { SidebarSiswa } from '../molecules/SidebarSiswa';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {router.pathname === '/admin' && (
          <>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </>
        )}
        {router.pathname === '/guru' && (
          <>
            <SidebarGuru isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </>
        )}
        {router.pathname === '/siswa' && (
          <>
            <SidebarSiswa isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </>
        )}
        <div
          className={`flex-1 flex flex-col overflow-y-auto bg-[#0A4155] px-4 md:px-8 content-padding ${isSidebarOpen ? 'content-padding-md' : 'content-padding-sm'}`}
          style={{ paddingTop: '7rem', paddingBottom: '8rem' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
