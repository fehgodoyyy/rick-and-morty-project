import { render, screen } from "@testing-library/react";
import { ProviderRickAndMorty } from "../../context/ContextRickAndMorty";
import { MemoryRouter } from "react-router-dom";
import Header from "./index";

describe("Header Component", () => {
  test("displays the correct title", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <Header />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );
    const h1Element = screen.getByText("Rick And Morty API");
    expect(h1Element).toBeInTheDocument();
  });

  test("displays the logo image", () => {
    render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <Header />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );
    const logoElement = screen.getByAltText(/rick and morty logo/i);
    expect(logoElement).toBeInTheDocument();
  });
});
