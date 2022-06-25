import { Routes, Route } from "react-router-dom";

import { HomePage, NewRecruitmentPage } from "./pages";
import { SideBar, Footer } from "./components";

const App = () => {

    return (
        <>
        <SideBar />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/new-recruitment" element={<NewRecruitmentPage />}/>
            </Routes>
        </main>
        <Footer />
        </>
    );
};

export default App;
