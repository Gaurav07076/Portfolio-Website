import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faLeetcode } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/gaurav07076' target='-blank'>
        <BsGithub />
      </a>
    </div>
    <a href='https://www.linkedin.com/in/gaurav-verma-98688a232/' target='-blank'>
      <div>
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </a>
    <div>
      <a href='https://www.instagram.com/vgaurav_21/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' target='-blank'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;