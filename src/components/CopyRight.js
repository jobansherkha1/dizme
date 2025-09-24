const CopyRight = ({ brandName }) => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Designed &amp; built by{" "}
                <a
                  href="https://jobansingh.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  {brandName && brandName}
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="mailto:hello@jobansingh.dev">Say hello</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jobansingh/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
