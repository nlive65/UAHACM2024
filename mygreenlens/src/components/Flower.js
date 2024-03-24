import React, { useState } from 'react';
import './watering.css'; // Importing the CSS file
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FlowerGame() {
  const [flowerStage, setFlowerStage] = useState(0);
  const [score, setScore] = useState(0);
  const [isWatering, setIsWatering] = useState(false);
  const [flowersGrown, setFlowersGrown] = useState([]);

  const stages = [
    { image: 'https://developer.helpscout.com/images/seed.png', description: 'Seed' },
    { image: 'https://cdn.pixabay.com/photo/2017/03/22/02/23/seedling-2163773_640.png', description: 'Seedling' },
    { image: 'https://www.pngkey.com/png/full/655-6552907_seedling-clipart-plant-shoot.png', description: 'Budding' },
    { image: 'https://thumb.ac-illust.com/7c/7c04630e45eb2b2b0edc2e9b5a6e34f8_t.jpeg', description: 'Full Bloom' },
    // Add URLs for other stages
  ];

  const flowers = [
    { image: 'https://thumb.ac-illust.com/7c/7c04630e45eb2b2b0edc2e9b5a6e34f8_t.jpeg', name: 'Sunflower' },
    { image: 'https://i.pinimg.com/736x/06/e9/ac/06e9ac4858945e0a81e867b219d693b2.jpg', name: 'Tulip' },
    { image: 'https://static.vecteezy.com/system/resources/previews/008/505/482/original/daisy-flower-clipart-png.png', name: 'Daisy' },
    // Add more flowers as needed
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
      // Add a random flower to the garden if it has reached full bloom
      const randomFlowerIndex = Math.floor(Math.random() * flowers.length);
      const newFlower = { image: flowers[randomFlowerIndex].image, name: flowers[randomFlowerIndex].name };
      setFlowersGrown(prevFlowers => [...prevFlowers, newFlower]);
      
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
      <h1><b>Click the Button Every Time You Recycle!</b></h1>
      <h4>This is how you can track how many items you have recycled. Each time you grow a 
        recycle four times you grow a flower for you garden!
      </h4>
      <Row><Placeholder style={{background:"#94aa5b", borderColor:"#94aa5b"}} xs={12} size="lg" />
    </Row> 
      <div style={{ textAlign: 'center', marginTop: '90px' }}>
        <button onClick={growFlower}>I recycled!</button>
        <div>Recycled Items: {score}</div>
        <div>Stage: {stages[flowerStage].description}</div>
        {isWatering && <div className="watering-animation" />}
      </div>
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <img
          src={stages[flowerStage].image}
          alt="flower"
          style={{ width: '200px', height: '200px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '80px' }}>
        {/* Render flowers in garden */}
        {flowersGrown.map((flower, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={flower.image}
              alt={flower.name}
              style={{ width: '100px', height: '100px' }}
            />
            <div>{flower.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowerGame;
