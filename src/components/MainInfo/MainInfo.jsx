import { Link } from 'react-router-dom'
import css from './MainInfo.module.css'
import { useEffect, useState } from 'react';
import yellow from '../../assets/images/hero_yellow.png';
import blue from '../../assets/images/hero_blue.png';
import pink from '../../assets/images/hero_pink.png';
import blueWhite from '../../assets/images/hero_blue_white.png';
import pinkWhite from '../../assets/images/hero_pink_white.png';

const MainInfo = () => {
  const images = [yellow, blue,blueWhite, pink,  pinkWhite];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const buttonColors = [
    'var(--accent-yellow)', 'var(--accent-blue)', 'var(--accent-blue-white)', 'var(--accent-pink)',  'var(--accent-pink-white)'
  ];

  useEffect(() => {
    const colors = [
     'var(--bckgr-blue)', 'var(--bckgr-white-blue)','var(--bckgr-pink)' , 'var(--bckgr-white-pink)','var(--bckgr-yellow)'
  ];
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      document.documentElement.style.setProperty('--dynamic-color', colors[currentImageIndex]);
    }, 2000); 

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
       <section className={css.main_container}>
            <div className={css.main_wrapper}>
        <h1 className={css.main_title}>Unlock your potential with the best <span>language</span> tutors</h1>
            <p className={css.main_text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
              <Link to="/catalog"><button type='button' className={css.main_button} style={{ backgroundColor: buttonColors[currentImageIndex] }}>
                Get started</button>
              </Link>
        </div>
        <div
        className={css.photo_wrapper}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      </section>
  )
}


export default MainInfo