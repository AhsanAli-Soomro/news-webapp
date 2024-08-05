"use client";
import React, { useContext } from 'react';
import Link from 'next/link';
import { NewsContext } from '../../context/NewsContext';

const Home = () => {
    const { news, setSelectedArticle } = useContext(NewsContext);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-teal-700">News Articles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {news.map((article, index) => (
                    <div className='rounded-b-lg border border-t-0 bg-white hover:shadow-lg hover:shadow-teal-700 transition ease-in-out duration-300'>
                        <div
                            key={index}
                            className="p-4 pb-0"
                        >
                            <img
                                src={article.urlToImage || '/No_Image.jpg'}
                                alt={article.title}
                                className="w-full h-48 object-cover mb-4 rounded-t-lg"
                            />
                            <h2 className="text-xl font-semibold mb-2 text-teal-700 truncate">{article.title}</h2>
                            <p className="text-gray-700 mb-4 line-clamp-2">{article.description}</p>
                            <p className="text-sm text-gray-500 mb-2 line-clamp-1">By {article.author}</p>
                            <p className="text-sm text-gray-500 mb-2">
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                        <Link href="/Articles">
                            <p
                                onClick={() => setSelectedArticle(article)}
                                className="text-teal-950 p-4 rounded-b-lg bg-teal-100 block text-center"
                            >
                                Read more
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
