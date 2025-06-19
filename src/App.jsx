import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ContentCard from "./components/ContentCard";
import ContentWrapper from "./components/ContentWrapper";
import { Route, Routes } from "react-router";
import InfoPage from "./components/pages/Infopage";
import data from "./data.json";

function App() {
  
  return (
    <>
      <Navbar />
      <section className="container">
        <Routes>
          <Route
            index="/"
            element={
              <>
                <Sidebar />
                <ContentWrapper>
                  {data.map((data) => (
                    <ContentCard
                      id={data.id}
                      name={data.name}
                      house={data.house}
                      year={data.year}
                    />
                  ))}
                </ContentWrapper>
              </>
            }
          />
          <Route path="/:postId" element={<InfoPage />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
