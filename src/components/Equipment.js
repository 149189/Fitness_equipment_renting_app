import React from 'react';

function Equipment() {
  return (
    <div className="equipment">
      <h2>Available Equipment</h2>
      <div className="equipment-list">
        {/* Placeholder for Equipment items */}
        <div className="equipment-item">
          <img src="path_to_image1.jpg" alt="Equipment 1" />
          <h3>Treadmill</h3>
          <p>Rent this top-notch treadmill for your cardio workouts.</p>
        </div>
        <div className="equipment-item">
          <img src="path_to_image2.jpg" alt="Equipment 2" />
          <h3>Exercise Bike</h3>
          <p>Stay fit with our high-quality exercise bikes.</p>
        </div>
        <div className="equipment-item">
          <img src="path_to_image3.jpg" alt="Equipment 3" />
          <h3>Weights</h3>
          <p>Strength training equipment for all your needs.</p>
        </div>
        {/* Add more equipment as needed */}
      </div>
    </div>
  );
}

export default Equipment;
