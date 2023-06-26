import { useContext } from "react";
import ContextRickAndMorty from "../context/ContextRickAndMorty";

const useRickAndMortyHook = () => useContext(ContextRickAndMorty);

export default useRickAndMortyHook;
