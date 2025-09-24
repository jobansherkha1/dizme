import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  const [popup, setPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: "All", value: "*" },
    { label: "Product Platforms", value: "web-apps" },
    { label: "Design Systems", value: "design-systems" },
    { label: "Headless CMS", value: "headless" },
    { label: "Marketing Sites", value: "marketing" },
  ];

  const projects = [
    {
      title: "Jobfree.dev Talent Platform",
      category: "Product Platform",
      filter: "web-apps",
      image: "img/portfolio/portf.png",
      cover: "img/portfolio/portf.png",
      description: [
        "Led the end-to-end build of Jobfree.dev’s hiring workspace using Next.js 13, Supabase, and Tailwind CSS.",
        "Delivered real-time candidate pipelines, AI-assisted resume summaries, and a design system that keeps the experience consistent across tenants.",
      ],
      details: [
        { label: "Client", value: "Jobfree.dev" },
        { label: "Role", value: "Lead Frontend Engineer" },
        { label: "Stack", value: "Next.js 13, Supabase, Tailwind CSS" },
        { label: "Timeline", value: "2023 – Present" },
        {
          label: "Link",
          value: "https://jobfree.dev",
          linkLabel: "jobfree.dev",
          isLink: true,
        },
      ],
      gallery: ["img/portfolio/12.png", "img/portfolio/13.png", "img/portfolio/14.png"],
    },
    {
      title: "India Index Research Portal",
      category: "Headless CMS",
      filter: "headless",
      image: "img/portfolio/nshop.png",
      cover: "img/portfolio/nshop.png",
      description: [
        "Migrated a 10k+ entry WordPress site to a headless Next.js experience backed by WPGraphQL and Meilisearch.",
        "Implemented ISR, advanced search, and localization while reducing initial page load from 4.2s to 0.8s.",
      ],
      details: [
        { label: "Client", value: "The India Index" },
        { label: "Role", value: "Frontend Consultant" },
        { label: "Stack", value: "Next.js, WPGraphQL, Meilisearch" },
        { label: "Timeline", value: "2022" },
      ],
      gallery: ["img/portfolio/10.jpg", "img/portfolio/11.jpg", "img/portfolio/9.png"],
    },
    {
      title: "Uplift Design System",
      category: "Design Systems",
      filter: "design-systems",
      image: "img/portfolio/tech.png",
      cover: "img/portfolio/tech.png",
      description: [
        "Crafted a reusable component library for a fintech team with Storybook, Radix UI, and Tailwind CSS.",
        "Documented accessibility patterns, theming tokens, and automated visual regression testing to keep releases stable.",
      ],
      details: [
        { label: "Client", value: "Confidential Fintech" },
        { label: "Role", value: "UI Engineer" },
        { label: "Stack", value: "Storybook, Radix UI, Tailwind CSS" },
        { label: "Timeline", value: "2023" },
      ],
      gallery: ["img/portfolio/7.jpg", "img/portfolio/8.jpg", "img/portfolio/6.jpg"],
    },
    {
      title: "Northstar Analytics Dashboard",
      category: "Product Platform",
      filter: "web-apps",
      image: "img/portfolio/14.png",
      cover: "img/portfolio/14.png",
      description: [
        "Built a data-rich analytics dashboard with dynamic filters, offline caching, and exportable insights.",
        "Introduced Zustand state management, chart virtualization, and testing pipelines that cut regression bugs by 60%.",
      ],
      details: [
        { label: "Client", value: "Northstar Insights" },
        { label: "Role", value: "Senior Frontend Developer" },
        { label: "Stack", value: "React, Zustand, Chart.js" },
        { label: "Timeline", value: "2021 – 2022" },
      ],
      gallery: ["img/portfolio/5.jpg", "img/portfolio/4.jpg", "img/portfolio/3.jpg"],
    },
    {
      title: "Lighthouse Clinics Marketing Site",
      category: "Marketing Site",
      filter: "marketing",
      image: "img/portfolio/ecomme.png",
      cover: "img/portfolio/ecomme.png",
      description: [
        "Designed and developed a conversion-focused marketing site with Next.js, Sanity CMS, and localized content blocks.",
        "Implemented A/B testing hooks and analytics dashboards that improved sign-up conversion by 28%.",
      ],
      details: [
        { label: "Client", value: "Lighthouse Clinics" },
        { label: "Role", value: "Frontend Developer" },
        { label: "Stack", value: "Next.js, Sanity CMS, Tailwind CSS" },
        { label: "Timeline", value: "2021" },
        {
          label: "Link",
          value: "https://lighthouseclinics.com",
          linkLabel: "lighthouseclinics.com",
          isLink: true,
        },
      ],
      gallery: ["img/portfolio/1.jpg", "img/portfolio/2.jpg", "img/portfolio/4.jpg"],
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setPopup(true);
  };

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup
        open={popup}
        data={selectedProject}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>Selected Projects & Case Studies</h3>
            <p>
              A snapshot of products, systems, and marketing sites I&apos;ve crafted
              for startups and growth teams.
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              {filters.map((item) => (
                <li key={item.value}>
                  <a
                    className={`c-pointer ${activeBtn(item.value)}`}
                    onClick={handleFilterKeyChange(item.value)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {projects.map((project, index) => (
                <li className={`${project.filter} grid-item`} key={index}>
                  <div className="inner">
                    <div
                      className="entry dizme_tm_portfolio_animation_wrap"
                      data-title={project.title}
                      data-category={project.category}
                    >
                      <a
                        className="portfolio_popup"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openProject(project);
                        }}
                      >
                        <img src="img/thumbs/42-56.jpg" alt={`${project.title} thumbnail`} />
                        <div className="main" data-img-url={project.image} />
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{project.title}</h3>
                      <span>{project.category}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
