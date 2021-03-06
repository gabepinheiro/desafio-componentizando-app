import { GenreProps } from "../resources/types";
import { Button } from "./Button";

type SidebarProps = {
  genres: GenreProps[];
  onSelectedGenre: (id: number) => void;
};

export function Sidebar({ genres, onSelectedGenre }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectedGenre(genre.id)}
            selected={genre.selected}
          />
        ))}
      </div>
    </nav>
  );
}
