import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date,source }) => {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem", boxShadow: "0px 4px 10px rgba(231, 237, 238, 1)" }}>
        <img src={imageUrl} className="card-img-top" alt={title}  />
        <div className="card-body" >
          <h5 className="card-title">{title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span></h5>
          <p className="card-text">{description}....</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
