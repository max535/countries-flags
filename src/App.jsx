import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
    return (
        <>
            <Header />
            <Main>
                <Controls />
            </Main>
        </>
    );
}
