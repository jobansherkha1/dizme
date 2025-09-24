import Counter from "./Counter";

const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="Jobanpreet Singh - Frontend Developer" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={4.5} decimals={1} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Experience
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={45} />
                    </h3>
                    <span className="name">
                      Completed
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>I&apos;m a Frontend Developer</span>
                <h3>Building Accessible, High-Impact Web Apps</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  Hi! I&apos;m Jobanpreet Singh, a product-minded engineer based in Brampton, Canada.
                  With 4+ years of experience, I translate complex requirements into performant React & Next.js interfaces
                  that scale with teams and traffic. I obsess over component architecture, design systems,
                  and Core Web Vitals to deliver experiences people love to use.
                </p>
                <p className="mt-3">
                  My daily toolkit includes React, Next.js, TypeScript, Tailwind CSS, and Firebase,
                  backed by experience in Node.js, GraphQL, and WordPress when projects call for it.
                  Outside of client work I share UI engineering tips, mentor new developers, and build
                  tools for the Jobfree.dev community.
                </p>
              </div>
              <div className="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                <a className="anchor" href="#contact">
                  <span>View My Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="decorative brush" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="decorative brush" />
        </div>
      </div>
    </div>
  );
};

export default About;