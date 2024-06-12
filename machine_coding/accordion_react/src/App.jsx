import { AccordionContainer } from "./accordion";

function App() {
	return (
		<>
			<AccordionContainer>
				<AccordionContainer.Accordion label='Hello first heading' open={true} >
					Hello
				</AccordionContainer.Accordion>
				<AccordionContainer.Accordion label='Hello second heading' open={true} >
					second data
				</AccordionContainer.Accordion>
			</AccordionContainer>
		</>
	);
}

export default App;
