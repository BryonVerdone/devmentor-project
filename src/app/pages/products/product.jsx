import React, { useState } from 'react';
import './styles.css';
export default function Product({ name, size, styles, colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div className='product'>
      <div className='name'>{name}</div>
      <div className='colors'>
        Available in:
        {colors.map((color) => (
          <span
            className={`color ${selectedColor === color ? 'selected' : null}`}
            onClick={() => setSelectedColor(color)}
          >
            {color.name}
          </span>
        ))}
      </div>
      <img
        width={400}
        height={400}
        src={selectedColor.image}
        alt={`image for ${name}`}
      />
    </div>
  );
}
