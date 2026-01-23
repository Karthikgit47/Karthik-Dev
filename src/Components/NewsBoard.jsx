import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  const [articles, setarticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url).then(respose => respose.json()).
    then(data=> setarticles(data.articles));
  },[category])

  return (
    <div>
       <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        {articles?.map((news, index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}



export default NewsBoard




