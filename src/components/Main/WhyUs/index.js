import React from 'react';
export default function WhyUS() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3><strong>¿A qué nos dedicamos?</strong></h3>
              <p>
                Somos una consultoria dedicada al desarrollo de aplicaciones web, paginas web, marketing digital, redes sociales y diseño gráfico. Con nosotros encontrarás la mejor solución para los problemas digitales en tu empresa.
                Te ayudaremos a optimizar tu negocio, a crecer tu empresa o a tener mayor impacto en clientes.
              </p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a data-toggle="collapse" className="collapse" href="#accordion-list-1" style={{ display: 'block' }}><span>01</span> Desarrollo WEB <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
                    <p>
                      Nuestro fuerte y especialidad. El <strong>Desarrollo Web</strong>, ofrecemos servicios desde crear tu página web junto con un alojamiento en <strong>precios competitivos</strong> hasta el desarrollo de un portal entero para tu empresa el cual facilmente se puede migrar a una aplicación de escritorio o una aplicación móvil.
                      <br /> Tenemos las mejores <strong>soluciones web</strong> para tu empresa o negocio.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#accordion-list-2" className="collapsed"><span>02</span> Diseño Gráfico <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
                    <p>
                      Contamos con diseñadores gráficos los cuales te darán un trabajo limpio, eficaz y atractivo por un <strong>precio altamente competitivo</strong> dentro del mercado. No dudes ponerte en contacto con nosotros.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#accordion-list-3" className="collapsed"><span>03</span> Presupuestos Flexibles <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="accordion-list-3" className="collapse" data-parent=".accordion-list">
                    <p>
                      Nuestros clientes son <strong>importantes para nosotros</strong>, asi que hemos diseñado un modelo de trabajo, el cual funciona a través de <strong>tarifas flexibles</strong>. Al finalizar un proyecto, guardamos el contacto de nuestro cliente y le asignamos una tarifa.
                      Las tarifas dependen de las <strong>horas trabajadas</strong> en el proyecto o la magnitud del proyecto, tomando en cuenta los futuros proyectos que el cliente pueda requerrir y la frecuencia en la que contrata nuestros servicios.
                      <br />
                      Nuestra tarifa preferencial ronda los <strong>6 USD/hora</strong> sin embargo, gracias al sistema de referidos, podrías ser elegible a una <strong>tarifa aún más competitiva.</strong>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url(../../img/why-us.png)' }} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
        </div>
      </div>
    </section>
  )
}