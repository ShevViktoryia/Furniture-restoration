import { useState, useEffect } from 'react';
import DesktopManual from './DesktopManual/DesktopManual' 
import MobileManual from "./MobileManual/MobileManual";

const Manual = () => {
  const [state, setMobileManual] = useState({mobileManual: false});
  const { mobileManual } = state;
  useEffect(() => {
    const setResponsiveWarranty = () => window.innerWidth < 1200 ? setMobileManual((prevState) => ({ ...prevState, mobileManual: true })) : setMobileManual((prevState) => ({ ...prevState, mobileManual: false }));

    setResponsiveWarranty();
    window.addEventListener("resize", () => setResponsiveWarranty());

    return () => {
      window.removeEventListener("resize", () => setResponsiveWarranty());
    }
  }, []);
  return (
    <>
      {mobileManual ? <MobileManual /> : <DesktopManual />}
    </>
  )
}

export default Manual