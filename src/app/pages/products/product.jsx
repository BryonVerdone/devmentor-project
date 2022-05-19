import React, { useState } from 'react';
import './styles.css';
import ColorOptions from './color-options';
export default function Product({ name, size, styles, colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div className='product'>
      <div className='name'>{name}</div>
      <ColorOptions
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <img
        width={400}
        height={400}
        src={selectedColor.image}
        alt={`image for ${name}`}
      />
    </div>
  );
}
