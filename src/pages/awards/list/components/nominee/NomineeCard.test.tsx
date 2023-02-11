import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Nominee } from "models/nominee";
import { renderWithRematchStore } from "utils/testUtils";
import NomineeCard from "./NomineeCard";

const categoryId = "best-picture";
const nominee: Nominee = {
  title: "Nomadland",
  photoUrL: "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg",
  id: "nomadland"
};

describe("Testing NomineeCard component", () => {
  beforeEach(() => {
    renderWithRematchStore(<NomineeCard categoryId={categoryId} nominee={nominee} />);
  });

  it("renders nominee card component", () => {
    const nomineeTitleElement = screen.getByText(/Nomadland/i);

    expect(nomineeTitleElement).toBeInTheDocument();
  });

  it("selects nominee when select button is clicked", () => {
    const buttonElement = screen.getByText("Select");

    userEvent.click(buttonElement);

    const unSelectButton = screen.getByText("Unselect");
    expect(unSelectButton).toBeInTheDocument();
  });

  it("unselects nominee when select button is DOUBLE clicked", () => {
    const buttonElement = screen.getByText("Select");

    userEvent.click(buttonElement);
    userEvent.click(buttonElement);

    const unSelectButton = screen.getByText("Select");
    expect(unSelectButton).toBeInTheDocument();
  });
});
