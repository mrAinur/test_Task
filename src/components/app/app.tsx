import Header from "../app-header/header";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import style from "./app.module.css";
import SearchPage from "../../pages/search-page/search-page";
import PersonalPage from "../../pages/personal-page/personal-page";
import Footer from "../footer/footer";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import { notFoundDefaultText } from "../../utils/constants";
import ServerError from "../../pages/server-error/server-error";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <main className={style.app}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/character/:name" element={<PersonalPage />} />
          <Route path="/err" element={<ServerError />} />
          <Route
            path="*"
            element={<NotFoundPage text={notFoundDefaultText} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
