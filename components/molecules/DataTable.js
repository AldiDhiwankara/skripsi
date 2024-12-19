import React from 'react';

export const DataTable = () => {
  return (
    <div className="mt-8 bg-[#18577B] shadow-lg p-6 rounded-lg w-full">
      <h2 className="text-white font-bold text-xl mb-4">Asal Sekolah Pendaftar</h2>
      <div className="space-y-4">
        <div className="flex justify-between text-white">
          <span>SMP 1 Blabla</span>
          <span>56%</span>
        </div>
        <div className="flex justify-between text-white">
          <span>SMP 2 Blabla</span>
          <span>21%</span>
        </div>
        <div className="flex justify-between text-white">
          <span>SMP 3 Blabla</span>
          <span>23%</span>
        </div>
      </div>
    </div>
  );
};
