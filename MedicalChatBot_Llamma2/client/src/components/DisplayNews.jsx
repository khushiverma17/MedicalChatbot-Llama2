import React, { useContext, useEffect } from "react";
import { NewsContext } from "../ContexApi/Newsprovider";
const DisplayNews = () => {
  const { news } = useContext(NewsContext);
  console.log(news);
  // useEffect(() => {
  //   fetchnews();
  // }, []);
  return (
    <>
      <section className="container mt-4">
        <div className="row text-center">
          <h1> Latest News</h1>
          {news.length > 0 ? (
            news.map((article, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt={article.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.content}</p>
                    <span className="badge bg-primary">{article.name}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No news available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default DisplayNews;
