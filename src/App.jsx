import React from 'react';
import logo from './images/logo.png';
import { Wrap } from './components/Wrap';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { MovieList } from './components/movie/MovieList';
import { MovieListHeader } from './components/movie/MovieListHeader';
import { MoviePlaceholder } from './components/movie/MoviePlaceholder';
import { Search } from './components/Search';

const App = () => {
  return (
    <Wrap>
      <Header>
        <Logo src={logo} />
        <Search placeholder="Search for movies" />
      </Header>
      <MovieListHeader>My Watchlist</MovieListHeader>
      <MovieList>
        <MoviePlaceholder />
      </MovieList>
    </Wrap>
  );
};

export default App;
