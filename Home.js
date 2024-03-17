import React from 'react'



function Home() {
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
        <input type="text"  className="input" placeholder="search"/>
        <button><img src="/Icon/Picture/search.png" alt=""></img></button>

        </div>
      </div>
    </div>
  );
}

export default Home