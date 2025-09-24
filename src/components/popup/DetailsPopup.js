const DetailsPopup = ({ open, close, data }) => {
  const {
    title = "Project",
    category = "Case Study",
    description = [],
    details = [],
    cover = "img/portfolio/6.jpg",
    gallery = [],
  } = data || {};

  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              close();
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url={cover}
                style={{ backgroundImage: `url(${cover})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{title}</h3>
              <span>{category}</span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                {description.length > 0 ? (
                  description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>
                    I help teams design, build, and launch performant web
                    experiences using modern JavaScript frameworks.
                  </p>
                )}
              </div>
              {details.length > 0 && (
                <div className="detailbox">
                  <ul>
                    {details.map((item, index) => (
                      <li key={index}>
                        <span className="first">{item.label}</span>
                        <span>
                          {item.isLink ? (
                            <a
                              href={item.value}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.linkLabel || item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {gallery.length > 0 && (
              <div className="additional_images">
                <ul>
                  {gallery.map((image, index) => (
                    <li key={index}>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src="img/thumbs/4-2.jpg" alt="image" />
                          <div
                            className="main"
                            data-img-url={image}
                            style={{ backgroundImage: `url(${image})` }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
