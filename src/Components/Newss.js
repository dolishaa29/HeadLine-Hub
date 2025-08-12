import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const Newss = (props) => {
  const [articles, setArticles] = useState([]); 
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (Page) => {
    setLoading(true); 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${Page}&category=${props.category}&apiKey=bad4f08eec4d4b7e9b1808833f57e9ab`;
    const data = await fetch(url);
    const parse = await data.json();
    setArticles(parse.articles);
    setLoading(false);
  };

  useEffect(() => {fetchArticles(page);} , [page]); 
   

  const capitalizeFirstLetter=(string)=>
    {
      return string.charAt(0).toUpperCase()+string.slice(1);
    } 

  
  const handleNextClick = async () => {
    const newPage = page + 1;
    setPage(newPage); 
  };

  const handlePreviousClick = async () => {
    const newPage = page - 1;
    setPage(newPage); 
  };

  return (
    <div className="container my-3">
      <h1 className='text-center color-"red"'> Top Headlines on {capitalizeFirstLetter(props.category)} Category</h1>
      <div className='text-center'>
        {loading ? <Spinner /> : null}
      </div>
      
      <div className="row">{articles && articles.length > 0 ? (articles.map((index) => (
        <div className="col-md-4" key={index.url}><NewsItem title={index.title ? index.title : ''}description={index.description ? index.description.slice(0, 88) : ''}imageUrl={index.urlToImage} newsUrl={index.url} author={index.author} date={index.publishedAt} source={index.source.name} /></div>
        )) ) : <p>No articles Found</p> }
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={handlePreviousClick} >&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={handleNextClick} > Next &rarr; </button>
      </div>
    </div>
  );
};

export default Newss;
