import React from 'react';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify-icons/ri/twitter-fill';
import facebookFill from '@iconify-icons/ri/facebook-fill';
import instagramFill from '@iconify-icons/ri/instagram-fill';
import './Team.css';

export default function Team() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nuestro Equipo</h2>
          <p>Somos una organización que depende directamente de nuestros desarrolladores, así que nuestro equipo se ve conformado por ellos y nuestro líder que hace de esta empresa un lugar grato donde laborar.</p>
        </div>
        <div className="row">
          <div className="col-lg-3" />
          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay={100} id="member">
              <div className="member-info">
                <h4>Atl Edrei Cruz Castillo</h4>
                <span>CEO &amp; Head developer</span>
                <p>Técnico en programación, certificado por diferentes organizaciones, distingiudo por su pasión al desarrollo y su distinguble edad de inicio.</p>
                <div className="social">
                  <a href="https://twitter.com/EdreiCCB"><Icon icon={twitterFill} className="ri-twitter-fill" id="socialIcon" /></a>
                  <a href="https://www.facebook.com/edrei.cruz.9/"><Icon icon={facebookFill} className="ri-facebook-fill" id="socialIcon" /></a>
                  <a href="https://www.instagram.com/soloedrei/"><Icon icon={instagramFill} className="ri-instagram-fill" id="socialIcon" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}
