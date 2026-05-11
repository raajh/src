import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Users from "./Users";

describe("Users Component", () => {
  test("renders users heading", () => {
    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Users List")
    ).toBeInTheDocument();
  });
});