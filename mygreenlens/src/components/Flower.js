import React, { useState } from 'react';
import './watering.css'; // Importing the CSS file

function FlowerGame() {
  const [flowerStage, setFlowerStage] = useState(0);
  const [score, setScore] = useState(0);
  const [isWatering, setIsWatering] = useState(false);

  const stages = [
    { image: 'https://cdn.pixabay.com/photo/2017/03/22/02/23/seedling-2163773_640.png', description: 'Seedling' },
    { image: 'https://www.pngkey.com/png/full/655-6552907_seedling-clipart-plant-shoot.png', description: 'Budding' },
    { image: 'https://thumb.ac-illust.com/7c/7c04630e45eb2b2b0edc2e9b5a6e34f8_t.jpeg', description: 'Full Bloom' },

    // Add URLs for other stages
  ];

  const growFlower = () => {
    if (flowerStage < stages.length - 1) {
      setFlowerStage(prevStage => prevStage + 1);
      setScore(prevScore => prevScore + 1);
      setIsWatering(true);

      // Turn off watering animation after 1 second
      setTimeout(() => {
        setIsWatering(false);
      }, 1000);
    } else {
      // Reset the flower stage if it has reached full bloom
      setFlowerStage(0);
      setScore(prevScore => prevScore + 1);
      setIsWatering(true);

      // Turn off watering animation after 1 second
      setTimeout(() => {
        setIsWatering(false);
      }, 1000);
    }
  };

  return (
    <div>
      <h1>Click the Button Every Time You Recycle!</h1>
      <div style={{ textAlign: 'center' }}>
        <button onClick={growFlower}>Grow Flower</button>
        <div>Things Recycled: {score}</div>
        <div>Stage: {stages[flowerStage].description}</div>
        {isWatering && <div className="watering-animation" />}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          src={stages[flowerStage].image}
          alt="flower"
          style={{ width: '200px', height: '200px' }}
        />
      </div>
    </div>
  );
}

export default FlowerGame;
