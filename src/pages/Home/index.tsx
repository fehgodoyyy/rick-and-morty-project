import * as Styled from "./styles";
import ListCharacters from "../../components/ListCharacters";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Styled.main>
        <div className="boxContainer">
          <Header />
          <ListCharacters />
        </div>
      </Styled.main>
    </>
  );
};

export default Home;
