import { Header } from './Header';

import { MovieCard } from './MovieCard';

import { MovieProps } from '../App';

import '../styles/content.scss';

interface ContentProps {
  selectedGenreTitle: string;
  movies: MovieProps[];
}

export function Content({ selectedGenreTitle, movies }: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenreTitle={selectedGenreTitle} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
