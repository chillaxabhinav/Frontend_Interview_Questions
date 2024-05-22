import { AccordionContainer } from "./accordion";

function App() {
	return (
		<>
			<AccordionContainer>
				<AccordionContainer.Accordion label='Hello first heading'>
					Hello
				</AccordionContainer.Accordion>
				<AccordionContainer.Accordion label='Hello second heading'>
					second data
				</AccordionContainer.Accordion>
			</AccordionContainer>
		</>
	);
}

export default App;
