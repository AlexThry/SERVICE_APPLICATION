import React from 'react';
import Shape from '../objects/Shape';

type BlurryShapesBackgroundProps = {
  shapes: Shape[];
};

const BlurryShapesBackground: React.FC<BlurryShapesBackgroundProps> = ({ shapes }) => {
  return (
    <div style={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, left: 0, overflow: 'hidden', zIndex: -10}}>
      {shapes.map((shape, index) => {
        const {
          type = 'circle',
          height = 200,
          width = 200,
          color = 'rgba(255, 0, 150, 0.5)',
          blur = 50,
          top = 0,
          left = 0,
          rotation = 0
        } = shape;

        const shapeStyle: React.CSSProperties = {
          position: 'absolute',
          width: type === 'circle' ? width : `${width}px`,
          height: type === 'circle' ? height : `${height}px`,
          backgroundColor: color,
          filter: `blur(${blur}px)`,
          top: `${top}px`,
          left: `${left}px`,
          borderRadius: type === 'circle' ? '50%' : '0',
          zIndex: -10,
          transform: `rotate(${rotation}deg)`,
          pointerEvents: 'none'
        };

        return <div key={index} style={shapeStyle}></div>;
      })}
    </div>
  );
};

export default BlurryShapesBackground;
