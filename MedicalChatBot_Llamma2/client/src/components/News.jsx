import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../ContexApi/Newsprovider";

const News = () => {
  const { news, loading } = useContext(NewsContext); // Use context data
  const [displayNews, setDisplayNews] = useState([]); // Renamed state

  // Use effect to update state when news is available
  useEffect(() => {
    if (!loading && news.length > 0) {
      setDisplayNews(news.slice(0, 3)); // Show top 3 news articles
    }
  }, [loading, news]); // Dependencies: re-run when loading or news changes

  return (
    <div className="page-section bg-light mt-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container p-3">
          <h1 className="text-center">Latest News</h1>
          <div className="row mt-5">
            {displayNews.map((data, index) => (
              <div key={index} className="col-md-12 col-lg-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={data.image_url}
                    className="card-img-top"
                    alt="Loading..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-12 text-center mt-4">
              <Link to="/news" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
