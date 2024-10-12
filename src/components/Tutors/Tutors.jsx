import css from './Tutors.module.css'
import border from '../../assets/images/border.png';
import border1 from '../../assets/images/border_blue.png'; // Додаємо всі зображення
import border2 from '../../assets/images/border_white_blue.png';
import border3 from '../../assets/images/border_pink.png';
import border4 from '../../assets/images/border_white_pink.png';
import { useEffect, useState } from 'react';

const Tutors = () => {
    const images = [border, border1, border2, border3, border4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);
    
  return (
    <ul className={css.tutor_list}  style={{ 
        backgroundImage: `url(${images[currentImageIndex]})`
      }}>
        <li  className={css.tutor_item}><p>32,000+</p><span>Experienced tutors</span></li>
        <li className={css.tutor_item}><p>300,000+</p><span>5-star tutor reviews</span></li>
        <li className={css.tutor_item}><p>120+</p><span>Subjects taught</span></li>
        <li className={css.tutor_item}><p>200+</p><span>Tutor nationalities</span></li>
    </ul>
  )
}

export default Tutors