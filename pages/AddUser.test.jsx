import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddUser from "./AddUser";

describe("AddUser Component", () => {
  test("renders add user heading", () => {
    render(
      <BrowserRouter>
        <AddUser />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /add user/i,
      })
    ).toBeInTheDocument();
  });

  test("renders save button", () => {
    render(
      <BrowserRouter>
        <AddUser />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("button", {
        name: /save/i,
      })
    ).toBeInTheDocument();
  });
});