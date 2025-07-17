"use client";

import { Button, InputText } from "@/components/atoms";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "Semua",
  "Atap",
  "Bata & Beton",
  "Semen",
  "Keramik",
  "Cat & Pelapis",
  "Pipa & Saluran",
  "Pintu & Jendela",
  "Lainnya",
];

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "Genteng Beton Premium",
  category: "Atap",
  image: "/assets/images/product-example.jpg",
  price: "Rp 15.000 / pcs",
}));

export const ProductListView = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Semua" || product.category === activeCategory;
    const matchesQuery = product.name
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full">
      <section className="relative bg-cover bg-no-repeat bg-center h-72 md:h-96 flex items-end justify-center text-center bg-[url('/assets/images/product/building-man-woman.jpg')]">
        <Link href="/" replace>
          <ArrowLeft className="absolute top-8 left-8 size-8 text-white bg-gray-800/50 rounded-full p-1 hover:bg-gray-800 transition-all duration-200" />
        </Link>
        <div className="px-4 w-full bg-gradient-to-b from-transparent pt-12 to-black text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Bangun Masa Depan dengan Material Terbaik
          </h1>
          <p className="mb-6 text-gray-300">
            Temukan berbagai pilihan material bangunan berkualitas tinggi untuk
            proyek Anda.
          </p>
        </div>
      </section>
      <div className="bg-red-200">ADA</div>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className="space-y-2">
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Kategori Produk
          </h2>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* Produk */}
        <div>
          <InputText
            placeholder={`Cari di kategori ${activeCategory}`}
            className="mb-6"
            value={query}
            setValue={setQuery}
            type="text"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 space-y-1">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500">{product.category}</p>
                  <p className="text-orange-500 font-semibold text-sm">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              label="Lihat Semua Produk"
              type="primary"
              className="px-6 py-2"
            />
          </div>
        </div>
      </section>

      {/* Benefit Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Kenapa Belanja di Cahaya Bangun Perkasa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 text-left">
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">
                Produk Berkualitas
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kami hanya menyediakan material bangunan yang sudah teruji
                kualitasnya.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">
                Harga Kompetitif
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Harga yang sesuai dengan kualitas dan kebutuhan proyek Anda.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">
                Pengiriman Cepat
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Layanan pengiriman tepat waktu ke seluruh wilayah Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">
                Dukungan Konsultasi
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tim kami siap membantu Anda memilih produk sesuai kebutuhan
                proyek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-primary text-white py-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Butuh Penawaran Khusus?</h2>
        <p className="mb-4">
          Hubungi tim kami untuk mendapatkan harga terbaik.
        </p>
        <Button label="Hubungi Kami" type="secondary" className="px-6 py-2" />
      </section>
    </div>
  );
};
