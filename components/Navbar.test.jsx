import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders application title", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(
      screen.getByText("User Directory")
    ).toBeInTheDocument();
  });

  test("renders users button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Users")
    ).toBeInTheDocument();
  });

  test("renders logout button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Logout")
    ).toBeInTheDocument();
  });
});