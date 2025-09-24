import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";

const Skills = ({ dark }) => {
  const [data, setData] = useState({
    skills: [
      { name: "React.js / Next.js", value: 90, color: "#61DAFB" },
      { name: "JavaScript (ES6+)", value: 85, color: "#F7DF1E" },
      { name: "TypeScript", value: 80, color: "#3178C6" },
      { name: "Tailwind CSS", value: 85, color: "#06B6D4" },
      { name: "Node.js / Express", value: 70, color: "#68A063" },
      { name: "Firebase", value: 75, color: "#FFCA28" },
      { name: "WordPress", value: 65, color: "#21759B" },
      { name: "Docker / CI-CD", value: 60, color: "#2496ED" }
    ]
  });

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
    return () => window.removeEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="dizme_tm_section" id="skills">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Code is Craft</span>
                <h3>Specialties I Bring to Every Project</h3>
                <p>
                  I pair strong fundamentals with a product mindset—shipping resilient,
                  accessible interfaces that are easy to maintain and delightful to use.
                </p>
              </div>
              <div className="dodo_progress wow fadeInUp" data-wow-duration="1s">
                {data.skills.map((skill, i) => (
                  <div
                    className="progress_inner skillsInner___"
                    data-value={skill.value}
                    data-color={skill.color}
                    key={i}
                  >
                    <span>
                      <span className="label">{skill.name}</span>
                      <span className="number">{skill.value}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <img
                src={`img/skills/${dark ? 2 : 1}.jpg`}
                alt="Jobanpreet Singh - Frontend Developer skills visualization"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;