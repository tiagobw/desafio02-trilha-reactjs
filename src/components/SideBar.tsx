import { Button } from './Button';

import { GenreResponseProps } from '../App';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  onClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({
  genres,
  onClickButton,
  selectedGenreId
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
