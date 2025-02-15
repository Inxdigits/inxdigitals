import React from 'react'
import './Hero_gradient.css'
import image_1 from '../../assets/image_1.png';
import image_2 from '../../assets/image_2.png';
import image_3 from '../../assets/image_3.png';
import image_4 from '../../assets/image_4.png';
import image_5 from '../../assets/image_5.png';
import image_6 from '../../assets/image_6.png';
import image_7 from '../../assets/image_7.png';


const Hero_gradient = () => {
    const images = [
       { src: image_1, size: 'large' },
       { src: image_2, size: 'medium' },
       { src: image_3, size: 'small' },
       { src: image_4, size: 'large' },
       { src: image_5, size: 'medium' },
       { src: image_6, size: 'small' },
       { src: image_7, size: 'large' },
    ];

  return (
    <div className='image_container'>
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img.src}
                    alt={'image ${index +1}'}
                    className ={'image ${img.size}'}
                />
            ))}
            <button className="get_started">Get Started</button>
    </div>
  );
};

export default Hero_gradient