import { render, screen } from "@testing-library/react";
import ListCharacters from "./index";
import { ProviderRickAndMorty } from "../../context/ContextRickAndMorty";

describe("ListCharacters Component", () => {
  test("renders input with placeholder 'Busque um personagem..'", () => {
    // Renderiza o componente
    render(
      <ProviderRickAndMorty>
        <ListCharacters />
      </ProviderRickAndMorty>
    );

    // Verifica se o input com o placeholder correto está presente
    const inputElement = screen.getByPlaceholderText("Busque um personagem..");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.getAttribute("type")).toBe("text");
  });
});
