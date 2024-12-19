import React from 'react';
import { Sidebar } from '@/components/molecules/Sidebar';
import { ChartsPanel } from '@/components/molecules/ChartsPanel';

export const Dashboard = () => {
  return React.createElement(
    'div',
    { className: 'flex' },
    React.createElement(Sidebar, null),
    React.createElement(
      'div',
      { className: 'p-8 w-full bg-[#0A4155]' },
      React.createElement('h1', { className: 'text-2xl font-bold text-white mb-4' }, 'Sistem Informasi PPDB SMK Muda Blora'),
      React.createElement(ChartsPanel, null)
    )
  );
};
