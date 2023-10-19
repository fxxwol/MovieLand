import { FooterItem, FooterWrap, Rights } from 'components/Footer/Footer.styled';

export default function Footer() {
  return (
    <FooterItem>
      <Rights>
        <b> &#169; 2023 | All Rights Reserved</b>{' '}
      </Rights>
      <FooterWrap>
        <p>
          <b>Developed by Roksolana Protsiv</b>{' '}
        </p>
        <a href="https://github.com/fxxwol" target="blank">
          <img
            src={require('../../img/GITHUB-LOGO.png')}
            alt="GitHub"
            width={60}
          />
        </a>
      </FooterWrap>
    </FooterItem>
  );
}
