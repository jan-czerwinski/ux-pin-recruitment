import React, { useEffect, useState } from "react";
import { getLandingData, Landing } from "./api/landing";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./Header/Header";
import BulletPoints from "./BulletPoints/BulletPoints";
import Companies from "./Companies/Companies";

function App() {
  const [landingData, setLandingData] = useState<Landing>();
  console.log(process.env.NODE_ENV);

  useEffect(() => {
    const updateLandingData = async () => {
      setLandingData(await getLandingData());
    };
    updateLandingData();
  }, []);
  return landingData ? (
    <div>
      <Navbar />
      <Header headline={landingData.headline} />
      <Companies />
      <hr className="border-t-px mt-20" />
      <BulletPoints bulletPoints={landingData.bulletpoints} />
      <Footer />
    </div>
  ) : (
    <div className="flex justify-center ">trying to load page ... </div>
  );
}

export default App;
