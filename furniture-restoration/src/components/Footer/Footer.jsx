import { useState, useEffect } from 'react';
import DesktopFooter from './DesktopFooter/DesktopFooter' 
import MobileFooter from "./MobileFooter/MobileFooter";

const Footer = () => {
  const [state, setMobileFooter] = useState({mobileFooter: false});
  const { mobileFooter } = state;
  useEffect(() => {
    const setResponsiveWarranty = () => window.innerWidth < 1200 ? setMobileFooter((prevState) => ({ ...prevState, mobileFooter: true })) : setMobileFooter((prevState) => ({ ...prevState, mobileFooter: false }));

    setResponsiveWarranty();
    window.addEventListener("resize", () => setResponsiveWarranty());

    return () => {
      window.removeEventListener("resize", () => setResponsiveWarranty());
    }
  }, []);
  return (
    <>
      {mobileFooter ? <MobileFooter /> : <DesktopFooter />}
    </>
  )
}

export default Footer