/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen } from "@testing-library/react";
import Card from "../../components/card"

describe("Card Component", () => {
	test("should be able to render a card", () => {
        
		render(<Card imgURL="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>);
		
		const imageElement = screen.getByRole("img"); 
        const figureElement = screen.getByRole("figure")      
	                   
        expect(imageElement).toBeInTheDocument() 
        expect(figureElement).toBeInTheDocument()                 
	})
})