import React from 'react';

export default function Card({ children }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      {children}
    </div>
  );
}