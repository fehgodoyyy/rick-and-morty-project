import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";
import useRickAndMortyHook from "../../hooks/useRickAndMorty";
import Header from "../Header";

const FavoritesList = () => {
  const { favorites, handleFavoriteRemoved } = useRickAndMortyHook();

  return (
    <>
      <Styled.mainFav>
        <Header />
        <div className={`boxContainerCharacters`}>
          {favorites.map((favorite: any) => (
            <div className="boxCharacter" key={favorite.id}>
              <button onClick={() => handleFavoriteRemoved(favorite.id)}>
                <Star size={32} fill="#ff0" stroke="#ff0" />
              </button>
              <Link to={`/${favorite.id}`}>
                <img
                  src={favorite.image}
                  alt={`${favorite.name}`}
                  width={300}
                  height={300}
                />
                <div className="nameCharacter">
                  <h2>{favorite.name}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="buttonsFooter favPage">
          <div className="buttonHome">
            <Link to={"/"}>Página inicial</Link>
          </div>
        </div>
      </Styled.mainFav>
    </>
  );
};

export default FavoritesList;
