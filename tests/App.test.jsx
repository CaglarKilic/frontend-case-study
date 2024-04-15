import { render, screen, waitFor, act } from "@testing-library/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";

const router = createBrowserRouter(routes);

describe("Home Page directs to offer route", () => {
  it("should render offers", async () => {
    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByRole("banner"));
    expect(screen.getByText("Hello HR Team Member")).toBeInTheDocument();

    await waitFor(() => screen.getByRole("main"));
    const offerDivs = screen.getByRole("main");
    expect(offerDivs.children.length).toBeGreaterThan(0);
  });
});

describe("Clicking an offer link", () => {
  it("should render generated offer", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getByRole("main"));
    const offerLink = screen.getByRole("main").children[0].querySelector("a");

    await act(() => user.click(offerLink));
    expect(screen.getByText("Company Letterhead")).toBeInTheDocument();
  });
});
