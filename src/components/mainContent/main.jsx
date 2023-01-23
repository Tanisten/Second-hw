import React from "react";
 


import { Movie } from "../MovieItem/Movie";

import "./main.css";

const MainContent = (props) => {
  const movieListDefault = props.movieList;

 
  const deleteHandler = (id) => {
   
    const newMovies = movieListDefault.filter((element) => {
      return id !== element.id;
    });
    props.onNewMovieAdd(newMovies);
    
    return newMovies;
  };

  return (
    <div>
      {movieListDefault.map((e) => {
        return (
          <Movie

          onConfirm={deleteHandler}
          key={e.title}
          title={e.title}
          url={e.img}
          rating={e.rating}
          id={e.id}
          
          />
        )
      })}
    </div>
  );
};

export default MainContent;
