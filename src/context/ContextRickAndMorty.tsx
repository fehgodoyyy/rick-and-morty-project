import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Character } from "../types/allTypes";

const ContextRickAndMorty = createContext<any>({});

export function ProviderRickAndMorty({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dataApi, setDataApi] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [idCharacter, setIdCharacter] = useState<number>(0);
  const [selectedItemCharacter, setSelectedItemCharacter] =
    useState<Character | null>(null);
  const [favoriteList, setFavoriteList] = useState<Character[]>([]);
  const [favoriteSelect, setFavoriteSelect] = useState(false);

  const loadMoreDataOnScroll = () => {
    const isScrolledToBottom =
      Math.round(document.documentElement.scrollTop) +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight;

    if (isScrolledToBottom) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const updateFavoriteSelect = () => {
    const isFavorite = favoriteList.some(
      (f: Character) => f.id === idCharacter
    );
    setFavoriteSelect(isFavorite);
  };

  const toggleFavorite = (item: Character) => {
    const favorites = [...favoriteList];
    const index = favorites.findIndex((f) => f.id === item.id);

    if (index === -1) {
      favorites.push(item);
    } else {
      favorites.splice(index, 1);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteList(favorites);
  };

  const getCharacterSelectedInfo = () => {
    return dataApi.find(
      (objeto: Character) => objeto.id === Number(idCharacter)
    );
  };

  const toggleFavoritePageFav = () => {
    setFavoriteSelect(!favoriteSelect);

    setFavoriteList((prevFavorites: Character[]) =>
      prevFavorites.filter((favorite: Character) => favorite.id !== idCharacter)
    );

    const favorites = [...favoriteList];
    const characterSelectedInfo = getCharacterSelectedInfo();

    if (
      characterSelectedInfo !== null &&
      typeof characterSelectedInfo !== "undefined"
    ) {
      const index = favorites.findIndex(
        (f) => f.id === characterSelectedInfo.id
      );

      if (index === -1) {
        favorites.push(characterSelectedInfo);
      } else {
        favorites.splice(index, 1);
      }
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteList(favorites);
  };

  const handleFavoriteRemoved = (id: number) => {
    setIdCharacter(id);
    const updatedFavorites = favorites.filter(
      (favorite: any) => favorite.id !== id
    );
    setFavoriteList(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as Character[];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );

      if (currentPage === 1) {
        setDataApi(result.data.results);
      } else {
        setDataApi((prevData) => [...prevData, ...result.data.results]);
      }
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", loadMoreDataOnScroll);

    return () => {
      window.removeEventListener("scroll", loadMoreDataOnScroll);
    };
  }, []);

  return (
    <ContextRickAndMorty.Provider
      value={{
        loadMoreDataOnScroll,
        dataApi,
        selectedItemCharacter,
        setSelectedItemCharacter,
        idCharacter,
        setIdCharacter,
        favoriteList,
        setFavoriteList,
        toggleFavorite,
        favorites,
        formatDate,
        toggleFavoritePageFav,
        favoriteSelect,
        setFavoriteSelect,
        updateFavoriteSelect,
        characterSelectedInfo: getCharacterSelectedInfo(),
        handleFavoriteRemoved,
      }}
    >
      {children}
    </ContextRickAndMorty.Provider>
  );
}

export default ContextRickAndMorty;
