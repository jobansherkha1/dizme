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
                      <Counter end={1.5} decimals={1} />
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
                      <Counter end={15} />
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
                <span>I'm a Frontend Developer</span>
                <h3>I Build Fast, Scalable Web Experiences</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  Hi! I'm Jobanpreet Singh, a passionate React & Next.js developer based in Brampton, Canada. 
                  With expertise in modern JavaScript frameworks, I specialize in creating performant, 
                  accessible web applications. My focus is on delivering clean code, optimized UX, 
                  and seamless integrations for startups and businesses.
                </p>
                <p className="mt-3">
                  My toolkit includes React, Next.js, TypeScript, Tailwind CSS, and Firebase. 
                  I also have experience with WordPress customization and backend technologies like Node.js.
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