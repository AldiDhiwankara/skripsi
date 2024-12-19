import React from 'react';
import HomeHeader from '@/components/molecules/HomeHeader';
import Hero from '@/components/molecules/Hero';
import HomeSection from '@/components/molecules/HomeSection';
import StatisticCards from '@/components/molecules/StatisticCard';
import Card from '@/components/atoms/Card';
import Slider from 'react-slick';

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
      style={{
        width: 0,
        height: 0,
        borderLeft: '40px solid #A40E4C',
        borderTop: '40px solid transparent',
        borderBottom: '40px solid transparent',
        marginRight: '30px',
      }}
    />
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
      style={{
        width: 0,
        height: 0,
        borderRight: '40px solid #A40E4C', 
        borderTop: '40px solid transparent',
        borderBottom: '40px solid transparent',
        marginLeft: '30px',
      }}
    />
  );
};


const Home = () => {
  const stats = [
    { number: '365', label: 'Siswa' },
    { number: '12', label: 'TenDik' },
    { number: '24', label: 'Guru' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <HomeHeader />
      <Hero />

      <StatisticCards stats={stats} />

      <HomeSection
        title="Visi & Misi SMK MUDA BLORA"
        additionalTitleClassName='text-center mt-32'
        description="Menjadi sekolah islami, berkemajuan, professional yang mampu menyiapkan tamatan dalam bersaing di Era 4.0 berwawasan IMTAQ dan IPTEK."
        addedClassName="bg-white rounded-t-3xl -mt-40 p-12"
        sectionClassName='z-0'
      >
        <Card>
          <ol className="list-decimal list-inside text-left pl-4">
            <li className="text-lg mb-2 leading-relaxed">
              Melaksanakan Pendidikan berdasarkan iman, islam, dan ihsan sehingga membentuk pribadi yang bertakwa kepada Allah SWT dan pembiasaan islami.
            </li>
            <li className="text-lg mb-2 leading-relaxed">
              Melaksanakan pendidikan yang unggul di bidang IPTEK Berbasis IT sebagai wujud penerapan Era 4.0.
            </li>
            <li className="text-lg mb-2 leading-relaxed">
              Mengembangkan sistem pendidikan yang sesuai dengan kebutuhan DU/DI.
            </li>
            <li className="text-lg mb-2 leading-relaxed">
              Menjadikan lembaga pendidikan dan pelatihan kejuruan terpadu (PPKT) melalui peningkatan pembelajaran yang menghasilkan produk unggulan.
            </li>
            <li className="text-lg mb-2 leading-relaxed">
              Menjadi lembaga yang handal di persyarikatan Muhammadiyah melalui organisasi otonom (ortom) sehingga sanggup melanjutkan Amal Usaha Muhammadiyah (AUM).
            </li>
          </ol>
        </Card>
      </HomeSection>

      <HomeSection
        title="Kenapa Harus"
        subtitle={[
          'SMK MUDA BLORA',
        ]}
        description=""
        imageSrc="/img/why_smk_blora.png"
        imagePosition="left"
        additionalContentClassName='ml-32'
        isHalfSection={true}
        imageClassName='w-[420px] h-auto ml-4'
        addedClassName="bg-[#133043] text-white h-[800px]"
        sectionClassName='z-0 py-20'
        points={[
          'Tenaga pendidik yang kompeten di bidangnya',
          'Mengutamakan kedisiplinan dan akhlaqul karimah',
          'Meraih masa depan yang cerah di era teknologi modern',
          'Kegiatan pembelajaran yang asik dan menyenangkan',
          'Fasilitas pembelajaran yang lengkap dan berkualitas',
          'Lulusan yang cepat memperoleh pekerjaan',
          'Bekerjasama dengan berbagai perusahaan ternama',
        ]}
      />

      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#133043]">Jurusan di SMK Muda Blora</h2>
      </div>

      <Slider {...settings}>
        <HomeSection
          title="TEKNIK JARINGAN KOMPUTER & TELEKOMUNIKASI"
          description="Teknik Jaringan Komputer & Telekomunikasi (TKJ), memiliki kelas unggulan yaitu kelas Industri Telkom Indonesia. Kegiatan unggulan jurusan yang akan memberikan life skill dengan memanfaatkan laboratorium berstandar nasional, yaitu Intel Education, Telkom Indonesia, Google Class Room, ICTNetworking, & 3D Printing, serta dilengkapi akses internet berkecepatan 200 Mbps, untuk menunjang proses pembelajaran. Dengan demikian, siswa mampu menguasai hardware, software, dan program-program jaringan komputer & telekomunikasi."
          imageSrc="/img/tkj_1.png"
          isHalfSection={true}
          isSliderTitle={true}
          imagePosition="right"
          addedClassName="bg-white border-2 border-[#A40E4C] rounded-2xl shadow-lg w-[1200px] mx-auto"
          additionalContentClassName="p-4 -mt-28"
          sectionClassName="items-center mt-14 py-20"
          imageDivClassName='rounded-tr-xl rounded-br-xl'
          imageClassName='w-full h-[400px]'
          additionalTitleClassName='mt-14'
          buttonText="Daftar"
          buttonOnClick={() => alert('Daftar sekarang!')}
        />
        <HomeSection
          title="TEKNIK KENDARAAN RINGAN DAN OTOMOTIF"
          description="
            Teknik Otomotif merupakan ilmu yang mempelajari tentang alat-alat transportasi darat yang menggunakan mesin, terutama motor dan mobil yang mulai berkembang sebagai cabang ilmu seiring dengan diciptakannya mesin motor dan mobil.
          "
          imageSrc="/img/otomotif.png"
          isHalfSection={true}
          isSliderTitle={true}
          imagePosition="left"
          addedClassName="bg-white border-2 border-[#A40E4C] rounded-2xl shadow-lg w-[1200px] mx-auto"
          additionalContentClassName="p-4 -mt-32"
          sectionClassName="items-center mt-10 py-28"
          imageDivClassName='rounded-bl-xl rounded-tl-xl '
          imageClassName='w-full h-[400px]'
          additionalTitleClassName='-mt-10'
          buttonText="Daftar"
          buttonOnClick={() => alert('Daftar sekarang!')}
        />
      </Slider>

      <HomeSection
        customTitle="Tahapan"
        customSubtitle = {[
          'Penerimaan Peserta Didik Baru',
          'SMK Muhammadiyah 2 Blora',
        ]}
        sectionClassName="bg-[#133043] text-white p-12"
        steps={[
          {
            icon: '/img/home_step_pendaftaran.png',
            label: '1. Pendaftaran',
            description: [
              'GEL 1 (Januari - Maret)',
              'GEL 2 (April - Juli)',
            ],
          },
          {
            icon: '/img/home_seleksi_berkas.png',
            label: '2. Seleksi Berkas',
            description: [
              'GEL 1 (01 - 04 April)',
              'GEL 2 (01 - 04 Agustus)',
            ]
          },
          {
            icon: '/img/home_pengumuman_seleksi.png',
            label: '3. Pengumuman',
            description: [
              'GEL 1 (05 April)',
              'GEL 2 (05 Agustus)',
            ]
          },
          {
            icon: '/img/home_daftar_ulang.png',
            label: '4. Pendaftaran Ulang',
            description: [
              'GEL 1 (06 - 09 April)',
              'GEL 2 (06 - 09 Agustus)',
            ]
          },
        ]}
      />
    </>
  );
};

export default Home;
