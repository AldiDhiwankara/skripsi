import React from "react";
import { FaBaseballBall, FaFacebook, FaInstagram, FaLock, FaTwitter, FaUser, FaYoutube } from "react-icons/fa";

export default function Login() {
  return (
    <div className="relative min-h-screen bg-login-bg bg-cover bg-center flex items-center justify-center p-4">
      <div
        className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row w-full md:w-full lg:w-5/6 lg:flex-row"
        style={{
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(0, 0, 0, 0.2)"
        }}
        >
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center">
              <img src="/img/logo_sekolah_1.png" alt="Logo" className="h-12 mb-4" />
              <img src="/img/logo_smk.png" alt="Logo" className="h-12 mb-4" />
            </div>
            <h2 className="text-2xl font-extrabold text-pink-600 text-shadow-lg">SELAMAT DATANG</h2>
            <p className="text-xl text-pink-600 font-extrabold text-shadow-lg">MUDA GENERATION</p>
          </div>

          <form className="space-y-4" action="/admin">
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-12 bg-gray-300 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:outline-none"
                placeholder="Username/Email"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 p-2">
                <FaUser />
              </span>
            </div>

            <div className="relative">
              <input
                type="password"
                className="w-full p-3 pl-12 bg-gray-300 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:outline-none"
                placeholder="Password"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 p-2">
                <FaLock />
              </span>
            </div>

            <div className="text-center">
              <a href="#" className="text-sm text-pink-600 text-shadow-sm">
                Lupa Password?
              </a>
            </div>

            <div className="text-center">
              <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded w-2/3 font-bold">
                Login
              </button>
            </div>
          </form>

          {/* Bagian media sosial */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 text-shadow-sm">Media Sosial SMK MUDA</p>
            <div className="flex justify-center space-x-2 mt-4">
              <a href="#" className="text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-pink-600">
                <FaYoutube />
              </a>
              <a href="#" className="text-pink-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-600">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center relative">
          <img
            src="/img/karakter_pelajar.png"
            alt="Maskot"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
