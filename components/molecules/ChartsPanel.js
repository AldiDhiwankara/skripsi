import React from 'react';
import { Chart } from '@/components/atoms/Chart';

export const ChartsPanel = ({ label, datasets, dataset_bg_color, dataset_border_width, dataset_border_color }) => {
  const genderData = {
    labels: ['Laki-Laki', 'Perempuan'],
    datasets: [
      {
        data: [66, 34],
        backgroundColor: ['#1E3A8A', '#FFFFFF'],
        borderWidth: 2,
        borderColor: '#0A4155',
      },
    ],
  };

  const jurusanData = {
    labels: ['Teknik Jaringan Komputer', 'Teknik Otomotif'],
    datasets: [
      {
        data: [66, 34],
        backgroundColor: ['#F87171', '#FFFFFF'],
        borderWidth: 2,
        borderColor: '#F87171',
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          color: '#FFFFFF',
          usePointStyle: true,
          font: {
            size: 14,
            family: 'Arial',
          },
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Grid lebih responsif */}
      <div className="bg-[#18577B] shadow-lg p-4 rounded-lg h-96">
        <Chart data={genderData} options={chartOptions} />
      </div>
      <div className="bg-[#18577B] shadow-lg p-4 rounded-lg h-96">
        <Chart data={jurusanData} options={chartOptions} />
      </div>
    </div>
  );
};
