import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const Service = ({ dark }) => {
  const [data, setData] = useState([
    {
      title: "React/Next.js Development",
      shortDec: "Building performant, SEO-friendly web applications with modern React ecosystem.",
      price: "45",
      icon: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#61DAFB" d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z"/><path fill="#61DAFB" d="M18.461 3.332L12 14.235l-1.688-2.828-2.735-4.62h-5.9l7.328 12.345 5.592-9.438 1.068-1.724 2.722-4.585z"/></svg>`,
        iconBg: "/img/service/react-bg-light.svg",
        iconBgDark: "/img/service/react-bg-dark.svg"
      },
      fullDec: `<p>Custom React and Next.js solutions including:</p>
                <ul>
                  <li>SSR/SSG implementation</li>
                  <li>Performance optimization (Lighthouse 90+)</li>
                  <li>State management (Redux/Context API)</li>
                  <li>API integrations (REST/GraphQL)</li>
                </ul>`
    },
    {
      title: "Frontend Optimization",
      shortDec: "Improving load times, accessibility (WCAG), and Core Web Vitals.",
      price: "35",
      icon: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#06B6D4" d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z"/><path fill="#06B6D4" d="M18.461 3.332L12 14.235l-1.688-2.828-2.735-4.62h-5.9l7.328 12.345 5.592-9.438 1.068-1.724 2.722-4.585z"/></svg>`,
        iconBg: "/img/service/speed-bg-light.svg",
        iconBgDark: "/img/service/speed-bg-dark.svg"
      },
      fullDec: `<p>Comprehensive performance tuning:</p>
                <ul>
                  <li>Lighthouse audits & fixes</li>
                  <li>Tailwind CSS optimization</li>
                  <li>Bundle size reduction</li>
                  <li>AODA/WCAG compliance</li>
                </ul>`
    },
    {
      title: "WordPress Customization",
      shortDec: "Custom plugins (LearnDash/Tutor LMS) and theme development.",
      price: "30",
      icon: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#21759B" d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z"/><path fill="#21759B" d="M18.461 3.332L12 14.235l-1.688-2.828-2.735-4.62h-5.9l7.328 12.345 5.592-9.438 1.068-1.724 2.722-4.585z"/></svg>`,
        iconBg: "/img/service/wp-bg-light.svg",
        iconBgDark: "/img/service/wp-bg-dark.svg"
      },
      fullDec: `<p>WordPress expertise including:</p>
                <ul>
                  <li>LMS plugin customization</li>
                  <li>Gutenberg block development</li>
                  <li>Headless WordPress with React</li>
                  <li>Plugin security hardening</li>
                </ul>`
    }
  ]);

  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup data={popupdata} open={popup} close={() => setPopup(false)} />
      
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Development Services</span>
            <h3>Specialized Frontend Solutions</h3>
            <p>
              Custom-built applications focused on performance, scalability, 
              and modern user experiences
            </p>
          </div>
          
          <div className="service_list">
            <ul>
              {data.map((service, i) => (
                <li
                  className={`wow ${i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
                  data-wow-duration="1s"
                  key={i}
                  onClick={() => onClick(i)}
                >
                  <div className="list_inner tilt-effect">
                    <span className="icon">
                      {parse(service.icon.svg)}
                      <img
                        className="back"
                        src={dark ? service.icon.iconBgDark : service.icon.iconBg}
                        alt={service.title}
                      />
                    </span>
                    <div className="title">
                      <h3>{service.title}</h3>
                      <span className="price">
                        Starts from <span>${service.price}/hr</span>
                      </span>
                    </div>
                    <div className="text">
                      <p>{service.shortDec}</p>
                    </div>
                    <a className="dizme_tm_full_link" href="#" />
                    <img
                      className="popup_service_image"
                      src={`img/service/1.jpg`}
                      alt={service.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="decorative brush" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="decorative brush" />
        </div>
      </div>
    </div>
  );
};

export default Service;