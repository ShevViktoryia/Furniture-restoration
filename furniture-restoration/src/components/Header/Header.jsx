import { useState, useEffect } from "react"
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import { MenuContext } from '../../context/MenuContext';

const Header = () => {
  const [state, setState] = useState({headerMobile: false});
  const { headerMobile } = state;
  const [open, setOpen] = useState("close");

  useEffect(() => {
    const setResponsiveness = () => window.innerWidth < 768 ? setState((prevState) => ({ ...prevState, headerMobile: true })) : setState((prevState) => ({ ...prevState, headerMobile: false }));

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  return (
    <MenuContext.Provider value={{open, setOpen}}>
      {headerMobile ? <MobileHeader /> : <DesktopHeader />}
    </MenuContext.Provider>
  )
}

export default Header