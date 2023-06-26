import { render, screen } from "@testing-library/react";
import { ProviderRickAndMorty } from "../../context/ContextRickAndMorty";
import { MemoryRouter } from "react-router-dom";
import FavoritesList from "./index";

describe("FavoriteList Component", () => {
  test("displays the correct title", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <FavoritesList />
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
          <FavoritesList />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/página inicial/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });

  test("displays the logo image", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <FavoritesList />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );
    const logoElement = screen.getByAltText(/rick and morty logo/i);
    expect(logoElement).toBeInTheDocument();
  });
});
