import React from 'react';

const socialLinks = [
  {
    id: 1,
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%AFu-trung-75859621a/',
  },
  {
    id: 4,
    icon: 'fa-brands fa-facebook',
    link: 'https://www.facebook.com/huutrung.mmt/',
  },
  {
    id: 5,
    icon: 'fa-brands fa-github',
    link: 'https://github.com/xintipi',
  },
];

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.link}
          className="home__social-link"
          target="_blank"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
