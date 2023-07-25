import React from 'react'
import { FooterItem } from 'styles/Footer.styled';

export default function Footer() {
  return (
    <FooterItem>
      <p>© 2023 | All Rights Reserved | Developed by Roksolana Protsiv</p>
      <a href="https://github.com/fxxwol" target='blank'>
        <img src={require('../img/GITHUB-LOGO.png')} alt="GitHub" width={60}/>
      </a>
    </FooterItem>
  );
}
