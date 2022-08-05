/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen } from "@testing-library/react";
import Button from "../../components/button"

describe("Butto Component", () => {
	test("should be able to render a button", () => {
        
		render(<Button>Test</Button>);
		
		const buttonElement = screen.getByRole("button");
        const textButton = screen.getByText("Test")
	                   
        expect(buttonElement).toBeInTheDocument() 
        expect(textButton).toBeInTheDocument()                 
	})
})