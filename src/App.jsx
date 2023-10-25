import './App.css'
import React, { useState } from "react";

import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch'
import Header from '/src/components/Header'
import Modal from '/src/components/Modal';
import Data from '/src/assets/data.json'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredData, setFilteredData] = useState(Data);

  const handleShowModal = (item) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleSearch = (searchTerm) => {
  if (searchTerm.trim() === "") {
    setFilteredData(Data);
  } else {
    const filtered = Data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }
};


  return (
    <div>
      <Header onSearch={handleSearch} />
      <h1>Lab 03</h1>
      <section id="grid">
        <div id="image-grid">
          {filteredData.map((item) => (
            <div key={item._id}>
              <img
                src={item.image_url}
                alt={item.title}
                onClick={() => handleShowModal(item)}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Keyword: {item.keyword}</p>
              <p>Horns: {item.horns}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <Modal onClose={handleCloseModal}>
          <TransformWrapper defaultScale={1} defaultPostionX={100} defaultPostionY={200}>
          <TransformComponent>
          <img
            src={selectedImage.image_url}
            alt={selectedImage.title}
          />
          </TransformComponent>
          </TransformWrapper>
        </Modal>
      )}
    </div>
    
  );
}

export default App;
