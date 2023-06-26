import { render, screen } from "@testing-library/react";
import { ProviderRickAndMorty } from "../../context/ContextRickAndMorty";
import { MemoryRouter } from "react-router-dom";
import CharacterSelected from "./index";

describe("CharacterSelected Component", () => {
  test("displays the correct title", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <CharacterSelected />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );
    const h1Element = screen.getByText("Rick And Morty API");
    expect(h1Element).toBeInTheDocument();
  });

  test("renders link to homepage", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <CharacterSelected />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );

    const linkElement = screen.getByTestId("link-homepage");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });

  test("displays the logo image", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <CharacterSelected />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );
    const logoElement = screen.getByAltText(/rick and morty logo/i);
    expect(logoElement).toBeInTheDocument();
  });
  test("renders the correct number of h2 elements", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <CharacterSelected />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );

    const h2Elements = screen.getAllByRole("heading", { level: 2 });

    expect(h2Elements.length).toBe(7);
  });
});
