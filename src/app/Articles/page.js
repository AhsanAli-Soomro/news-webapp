"use client"
import React, { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import Link from 'next/link';

const Article = () => {
  const { selectedArticle } = useContext(NewsContext);

  if (!selectedArticle) {
    return (
      <div className="container text-teal-950 mx-auto p-4">
        <p>No article selected. Please go back to the home page.</p>
        <Link className='' href="/">
        <p className="text-teal-950 w-24 block text-center mb-2"> {"<- Go back"}</p>
      </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto pr-24 pl-24 bg-white">
      <Link className='' href="/">
        <p className="text-teal-950 w-24 block text-center mb-2"> {"<- Go back"}</p>
      </Link>
      <h1 className="text-3xl font-bold text-teal-950 mb-4">{selectedArticle.title}</h1>
      <img src={selectedArticle.urlToImage} alt={selectedArticle.title} className="w-full h-96 object-cover mb-4" />
      <p className="text-gray-700 mb-4">{selectedArticle.content}</p>
      <p className="text-sm text-gray-500 mb-2">By {selectedArticle.author}</p>
      <p className="text-sm text-gray-500 mb-2">{new Date(selectedArticle.publishedAt).toLocaleDateString()}</p>

      <Link href={selectedArticle.url} target="_blank">
        <p className="text-teal-950 p-4 mb-4 rounded-b-lg bg-teal-100 block text-center">Read the full article</p>
      </Link>
    </div>
  );
};

export default Article;
