import React,{useState} from 'react'

import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const FooterBottom = () => {
  const [iconColor, setIconColor] = useState('#fff');

  // const handleHover = () => {
  //   setIconColor('#fff');
  // };

  // const handleLeave = () => {
  //   setIconColor('#6b7688');
  // };



  return (
    <div>
        <div>
        <div className="app__social-footer">
          <div>
            <a href='https://github.com/gaurav07076' target='_blank'>
              <BsGithub />
            </a>
          </div>

          <div>
            <a href='https://www.linkedin.com/in/gaurav-verma-98688a232/' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <div>
            <a href='https://leetcode.com/Gaurav_Verma08/' target='_blank'>
              <FontAwesomeIcon
                icon={faCode}
                size="2x"
                style={{ color: iconColor }}
              />
            </a>
          </div>

          <div>
            <a href='https://www.instagram.com/vgaurav_21/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' target='_blank'>
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom