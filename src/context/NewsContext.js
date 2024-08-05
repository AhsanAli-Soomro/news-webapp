"use client"
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-08-04&to=2024-08-04&sortBy=popularity&apiKey=4a96fed001a148f8ac0a32cfdb858ae6');
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, selectedArticle, setSelectedArticle }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
