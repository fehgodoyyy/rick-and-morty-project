import { useEffect } from "react";
import useRickAndMortyHook from "../../hooks/useRickAndMorty";
import * as Styled from "./styles";
import { Star } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header";

const CharacterSelected = () => {
  const {
    setIdCharacter,
    formatDate,
    idCharacter,
    toggleFavoritePageFav,
    favoriteSelect,
    characterSelectedInfo,
    updateFavoriteSelect,
  } = useRickAndMortyHook();

  const { idCharacterSelect } = useParams();

  useEffect(() => {
    setIdCharacter(Number(idCharacterSelect));
  }, [idCharacterSelect]);

  useEffect(() => {
    updateFavoriteSelect();
  }, [idCharacter]);

  return (
    <>
      <Styled.boxCharacterSe>
        <Header />
        <div className="boxInfoMain">
          <div className="boxInfoDetailsLeft">
            <div className="name">
              <h2>{characterSelectedInfo?.name}</h2>
            </div>
            <div className="info">
              <h2>Gênero: {characterSelectedInfo?.gender}</h2>
            </div>
            <div className="info">
              <h2>Origem: {characterSelectedInfo?.origin?.name}</h2>
            </div>
            <div className="info">
              <h2>Localização: {characterSelectedInfo?.location?.name}</h2>
            </div>
            <div className="info">
              <h2>Espécie: {characterSelectedInfo?.species}</h2>
            </div>
            <div className="info">
              <h2
                className={`${
                  characterSelectedInfo?.status === "Alive" ? "ativo" : "morto"
                }`}
              >
                Status: {characterSelectedInfo?.status}
              </h2>
            </div>
            {characterSelectedInfo?.created && (
              <div className="info">
                <h2>Criado em: {formatDate(characterSelectedInfo.created)}</h2>
              </div>
            )}
          </div>
          <div className="boxInfoDetailsRight">
            <div className="buttonFavorite">
              <button onClick={toggleFavoritePageFav}>
                <Star
                  size={32}
                  fill={`${favoriteSelect ? "#ff0" : "#fff"}`}
                  stroke={`${favoriteSelect ? "#ff0" : "#fff"}`}
                />
              </button>
            </div>
            <div className="boxCharacter" key={characterSelectedInfo?.id}>
              <img
                src={
                  characterSelectedInfo?.image
                    ? characterSelectedInfo.image
                    : ""
                }
                alt={`${characterSelectedInfo?.name}`}
                width={300}
                height={300}
              />
              <div className="nameCharacter">
                <h2>{characterSelectedInfo?.name}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonsFooter">
          <div className="buttonHome">
            <Link to={"/"} data-testid="link-homepage">
              Página inicial
            </Link>
          </div>
        </div>
      </Styled.boxCharacterSe>
    </>
  );
};

export default CharacterSelected;
