import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
  const [selectedRatings, setSelectedRatings] = useState('');
  const [selectedDurations, setSelectedDurations] = useState([]);

  const handleRatingChange = (value) => {
    setSelectedRatings(value);
    onFilterChange({ rating: value, duration: selectedDurations });
  };

  const handleDurationChange = (value) => {
    const updated = selectedDurations.includes(value)
      ? selectedDurations.filter(d => d !== value)
      : [...selectedDurations, value];
    setSelectedDurations(updated);
    onFilterChange({ rating: selectedRatings, duration: updated });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h3>Ratings</h3>
        {['4.5', '4.0', '3.5', '3.0'].map((rating, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="rating"
              checked={selectedRatings === rating}
              onChange={() => handleRatingChange(rating)}
            />
            {'⭐'.repeat(5 - idx)} & up
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3>Video Duration</h3>
        {[
          { label: '0–1 Hour', value: 'short' },
          { label: '1–3 Hours', value: 'medium' },
          { label: '3–6 Hours', value: 'long' },
          { label: '6–17 Hours', value: 'extended' },
        ].map((d, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={selectedDurations.includes(d.value)}
              onChange={() => handleDurationChange(d.value)}
            />
            {d.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
