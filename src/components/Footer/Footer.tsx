import './Footer.scss';

import {
  siFacebook,
  siX,
  siTiktok,
  siInstagram,
  siYoutube,
  siTelegram,
} from 'simple-icons';

const Footer = () => {
  const socialNetworks = [
    {
      name: 'Facebook',
      icon: siFacebook,
      url: 'https://www.facebook.com/groups/consejosnoiroom',
    },
    {
      name: 'X',
      icon: siX,
      url: 'https://x.com/consejosnoiroom',
    },
    {
      name: 'TikTok',
      icon: siTiktok,
      url: 'https://www.tiktok.com/@qrsnoiroom',
    },
    {
      name: 'Instagram',
      icon: siInstagram,
      url: 'https://www.instagram.com/consejosnoiroom/',
    },
    {
      name: 'Telegram',
      icon: siTelegram,
      url: 'https://t.me/LosConsejosDeHomeroGrupo',
    },
  ];

  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>🧅 ShrekDex</h2>

          <p>
            La colección completa del universo
            de Shrek.
          </p>
        </div>

        <div className="footer-social">

          <h3>Consejos Noiroom</h3>

          <div className="socials">

            {socialNetworks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                title={social.name}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d={social.icon.path} />
                </svg>
              </a>
            ))}

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p className="signature">
          Aporte compilado y página creada por Tona
        </p>

        <p>
          Consejos Noiroom © 2026
        </p>

      </div>

    </footer>
  );
};

export default Footer;