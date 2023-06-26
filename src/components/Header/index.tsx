import logo from "../../assets/logo.png";
import * as Styled from "./styles";
import useRickAndMortyHook from "../../hooks/useRickAndMorty";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { favorites } = useRickAndMortyHook();
  const location = useLocation();

  return (
    <Styled.Header>
      <div className="titleBoxBackground flex">
        <div className="titleSite">
          <h1>Rick And Morty API</h1>
        </div>
        <div className="logoImage">
          <img src={logo} alt="Rick and Morty Logo" width={120} height={120} />
        </div>
      </div>
      {favorites.length > 0 && !location.pathname.includes("/favorites") ? (
        <div className="boxPageFav">
          <div className="boxLink">
            <Link to={"/favorites"} data-testid="link-favorites">
              Meus Favoritos
            </Link>
          </div>
        </div>
      ) : null}
    </Styled.Header>
  );
};

export default Header;
