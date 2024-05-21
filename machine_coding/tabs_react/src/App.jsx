import { useState } from "react"
import Tabs from "../components/tabs"

function App() {
	const [currentTab, setCurrentTab] = useState(1);

	const onChangeTab = (index) => setCurrentTab(index);

	return (
		<>
			<Tabs currentTab={currentTab} onChangeTab={onChangeTab}>
				<Tabs.HeaderContainer>
					<Tabs.Tab label='first' index={1} />
					<Tabs.Tab label='second' index={2} />
					<Tabs.Tab label='third' index={3} />
				</Tabs.HeaderContainer>
				<Tabs.ContentContainer>
					<Tabs.TabContent index={1}>
						This is first tab
					</Tabs.TabContent>
					<Tabs.TabContent index={2}>
						This is second tab
					</Tabs.TabContent>
					<Tabs.TabContent index={3}>
						This is third tab
					</Tabs.TabContent>
				</Tabs.ContentContainer>
			</Tabs>
		</>
	)
}

export default App
