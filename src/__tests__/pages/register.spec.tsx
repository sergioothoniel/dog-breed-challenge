/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Register from "../../pages/register";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(api)
const mockHistory = jest.fn() 

jest.mock("react-router-dom", async () => ({
	...jest.requireActual("react-router-dom"),
	Link: ({ children }: any) => children,
	useHistory: () => ({
		push: mockHistory,
	}),
}));

describe("Register Page", () => {
	test("should be able to register", async () => {
        apiMock.onPost("register").replyOnce(200, {})
		render(<Register/>);
		
		const labelElement = screen.getByLabelText("Email");
		const emailField = screen.getByDisplayValue("");
		const buttonElement = screen.getByText("Register");
        const tittle = screen.getByText("Dog Breed")

		fireEvent.change(emailField, { target: { value: "test@example.com" }})	
		fireEvent.click(buttonElement)

        await waitFor(() =>{
            expect(emailField).toHaveValue("test@example.com")            
            expect(labelElement).toBeInTheDocument()
            expect(tittle).toBeInTheDocument()
            expect(mockHistory).toHaveBeenCalledWith("/home")
        })
	})
})