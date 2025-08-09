import React from 'react';

const ReadingListPage = () => {
  const readingList = [
    {
      title: "The element of computing systems: Building a modern computer from first principle",
      author: "Noam Nisan and Shimon Schocken",
      category: "computer science",
      progress: "In progress "
    },
    {
      title: "The elegant universe: superstring, hidden dimensions and the quest for the ultimate theory ",
      author: "Brain Greene",
      category: "Physics (Quantum)",
      progress: "Part 1: The edge of knowlegde "
    },
 {
      title: "Understanding Distributed systems",
      author: "Roberto vitillo",
      category: "system design",
      progress: "Revising "
    },
  
  ];
  const LearningList = [
    {
      title: "Rust for blockchain application development",
      author: "Akil Sharma",
      category: "blockchain"
    },
    {
      title: "Introduction to compiler and language design ",
      author: "Prof. Douglass Thain",
      category: "Compilers",
      link: "https://www3.nd.edu/%7Edthain/compilerbook/compilerbook.pdf"
    },
  {
      title: "Ethereum Yellow paper",
      author: "Dr. Gavin Hood",
      category: "blockchain, Ethereum",
      link: "https://ethereum.github.io/yellowpaper/paper.pdf"
    },

 {
      title: "Rust Compiler development guide",
      category: "Rust, Compiler ",
      author: "Rust community", 
      link: "https://rustc-dev-guide.rust-lang.org/overview.html"
    },
{
      title: "The Rust programming language",
      category: "Rust ",
      author: "Rust community", 
      link: "https://doc.rust-lang.org/stable/book/"
    },
  
 
  
  ];


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-6 text-center">Currently Reading</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {readingList.map((book, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg border border-blue-400">
            <h2 className="text-xl font-semibold mb-2">
              {book.link ? (
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                  {book.title}
                </a>
              ) : (
                <span className="text-white">{book.title}</span>
              )}
            </h2>
            <p className="text-gray-300 mb-1">Author: {book.author}</p>
            <p className="text-gray-400 text-sm">category: {book.category}</p>
            <p className="text-gray-400 text-sm">Progress: {book.progress}</p>
          </div>
        ))}
      </div>
    <h2 className="text-2xl text-white font-semibold mb-6 mt-4 text-center">Learning resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LearningList.map((book, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg border border-blue-400">
            <h2 className="text-xl font-semibold mb-2">
              {book.link ? (
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                  {book.title}
                </a>
              ) : (
                <span className="text-white">{book.title}</span>
              )}
            </h2>
            <p className="text-gray-300 mb-1">Author: {book.author}</p>
            <p className="text-gray-400 text-sm">category: {book.category}</p>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default ReadingListPage;
