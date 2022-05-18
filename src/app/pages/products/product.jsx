import React from 'react';

export default function Product({ name, image, size, styles, colors }) {
  return (
    <div className='product'>
      <div className='name'>{name}</div>
      {colors.map((color) => (
        <div className='color'>
          <img width={100} src={color.image} alt={`image for ${name}`} />
        </div>
      ))}
    </div>
  );
}
