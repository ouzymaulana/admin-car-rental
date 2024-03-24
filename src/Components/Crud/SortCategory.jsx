import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function App() {
  const [category, setCategory] = useState("all"); // State untuk menyimpan kategori mobil
  const [cars, setCars] = useState([]); // State untuk menyimpan data mobil

  useEffect(() => {
    // Fungsi untuk memuat data mobil dari API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/cars?category=${category}`
        );
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // Memanggil fungsi untuk memuat data saat komponen dimuat
  }, [category]); // Gunakan category sebagai dependensi, sehingga efek ini dipicu ketika kategori berubah

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory); // Memperbarui state kategori saat tombol sorting ditekan
  };

  return (
    <div>
      {/* Menampilkan data mobil */}
      {data.map((item) => (
        <div key={item.id}>
          {/* Tombol sorting untuk setiap kategori */}
          <Button
            variant="primary"
            onClick={() => handleCategoryChange("null")}
          >
            All
          </Button>
          <Button
            variant="primary"
            onClick={() => handleCategoryChange("small")}
          >
            2 - 4 People
          </Button>
          <Button
            variant="primary"
            onClick={() => handleCategoryChange("medium")}
          >
            4 - 6 People
          </Button>
          <Button
            variant="primary"
            onClick={() => handleCategoryChange("large")}
          >
            6 - 8 People
          </Button>
        </div>
      ))}
    </div>
  );
}

export default SortingCategory;
