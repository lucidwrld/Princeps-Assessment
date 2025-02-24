/* import { render, screen, fireEvent } from "@testing-library/react";
import CustomersTable from "../components/Table";
import AddCustomers from "../components/CreateButton";
import CreateCustomers from "../components/CreateCustomers";

const mockData = [
  {
    id: "123",
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    telephone: "1234567890",
    status: "active",
    created_at: "2024-02-20T10:00:00Z",
  },
];

test("renders CustomersTable with data", () => {
  render(<CustomersTable selectedColumns={{ Name: true }} data={mockData} refetch={jest.fn()} />);
  
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("john@example.com")).toBeInTheDocument();
  expect(screen.getByText("active")).toBeInTheDocument();
});

test("shows actions menu when ellipsis is clicked", () => {
  render(<CustomersTable selectedColumns={{ Name: true }} data={mockData} refetch={jest.fn()} />);
  
  const ellipsis = screen.getByRole("button");
  fireEvent.click(ellipsis);
  expect(screen.getByText("View")).toBeInTheDocument();
  expect(screen.getByText("Edit")).toBeInTheDocument();
  expect(screen.getByText("Delete")).toBeInTheDocument();
});

// Tests for AddCustomers
test("calls function when AddCustomers button is clicked", () => {
  const mockFunc = jest.fn();
  render(<AddCustomers onFunc={mockFunc} />);
  
  const button = screen.getByText("Add new customer");
  fireEvent.click(button);
  expect(mockFunc).toHaveBeenCalled();
});

// Tests for CreateCustomers
test("submits form when CreateCustomers button is clicked", () => {
  const mockRefetch = jest.fn();
  render(<CreateCustomers refetch={mockRefetch} />);
  
  const submitButton = screen.getByText("Create Customer");
  fireEvent.click(submitButton);
  expect(mockRefetch).not.toHaveBeenCalled(); // Ensures validation works before refetch is called
});
 */