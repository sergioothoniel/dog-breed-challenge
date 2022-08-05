/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "../../components/input"

describe("Input Component", () => {
	test("should be able to render an input", () => {
        
		render(<Input inputType="email" labelName="Email" name="email" register={() => {}}/>);
		
		const labelElement = screen.getByText("Email");
		const emailField = screen.getByDisplayValue("");

		fireEvent.change(emailField, { target: { value: "test@example.com" }})	
        expect(emailField).toHaveValue("test@example.com")            
        expect(labelElement).toBeInTheDocument()                 
	})
})