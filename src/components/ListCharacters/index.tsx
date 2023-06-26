import { ChangeEvent, useState, useEffect } from "react";
import * as Styled from "./styles";
import { Star } from "@phosphor-icons/react";
import useRickAndMortyHook from "../../hooks/useRickAndMorty";
import { Link } from "react-router-dom";

const ListCharacters = () => {
  const {
    dataApi,
    setFavoriteList,
    favoriteList,
    toggleFavorite,
    favorites,
    updateFavoriteSelect,
  } = useRickAndMortyHook();
  const [filteredData, setFilteredData] = useState(dataApi);
  const [searchValue, setSearchValueLocal] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValueLocal(event.target.value);
  };

  useEffect(() => {
    setFavoriteList(favorites);
    updateFavoriteSelect();
  }, []);

  useEffect(() => {
    setFilteredData(
      dataApi.filter((item: any) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, dataApi]);

  return (
    <>
      <Styled.boxListCharacters>
        <div className="titleBox flex">
          <div className="title">
            <h1>Personagens</h1>
          </div>
          <div className="form">
            <div className="boxInput">
              <form>
                <input
                  type="text"
                  placeholder="Busque um personagem.."
                  value={searchValue}
                  onChange={handleInputChange}
                  data-testid="search-input"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="boxContainerCharacters" data-testid="filtered-data">
          {filteredData?.map((item: any) => (
            <div className="boxAllItem" key={item.id}>
              <button onClick={() => toggleFavorite(item)}>
                <Star
                  size={32}
                  fill={`${
                    favoriteList.some((f: { id: number }) => f.id === item.id)
                      ? "#ff0"
                      : "#fff"
                  }`}
                  stroke={`${
                    favoriteList.some((f: { id: number }) => f.id === item.id)
                      ? "#ff0"
                      : "#fff"
                  }`}
                />
              </button>
              <Link to={`/${item.id}`}>
                <div className="boxCharacter">
                  <img
                    src={item.image}
                    alt={`${item.name}`}
                    width={300}
                    height={300}
                  />
                  <div className="nameCharacter">
                    <h2>{item.name}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Styled.boxListCharacters>
    </>
  );
};

export default ListCharacters;
