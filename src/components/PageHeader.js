import React from "react";

const PageHeader = ({ pageHeader }) => {
  const { title, breadcrumbs } = pageHeader;
  return (
    <section
      className="container-fluid page-header py-5 mb-5 animated fadeIn"
      style={{
        background:
          "linear-gradient(rgba(15, 66, 41, .6), rgba(15, 66, 41, .6)), url(/images/carousel-1.jpg) center center no-repeat",
      }}
    >
      <div className="container text-center py-5">
        <h1 className="display-3 text-white mb-4 animated slideInDown">
          {title}
        </h1>
        {breadcrumbs && (
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              {breadcrumbs.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${item.active ? "active" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.link ? (
                    <a href={item.link}>{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
