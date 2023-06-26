// import React from "react";
import { render } from "@testing-library/react";
import Home from "./index";
import { ProviderRickAndMorty } from "../../context/ContextRickAndMorty";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  test("displays the correct title", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <Home />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );
    const titleElement = getByText("Rick And Morty API");
    expect(titleElement).toBeInTheDocument();
  });

  test("displays the logo image", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <ProviderRickAndMorty>
          <Home />
        </ProviderRickAndMorty>
      </MemoryRouter>
    );
    const logoElement = getByAltText("Rick and Morty Logo");
    expect(logoElement).toBeInTheDocument();
  });
});
