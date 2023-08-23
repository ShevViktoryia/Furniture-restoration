import './MobileHeader.css'
import { useState } from "react"
import { MenuContext } from "../../../context/MenuContext";
import CustomLink from '../../CustomLink/CustomLink'

const MobileHeader = () => {
  const [open, setOpen] = useState(MenuContext);
  const handleMenuOpen = () => {
    setOpen(open === 'open' ? 'close' : 'open');
  }
  return (
    <header className="header_mobile">
      <div className="wrapper">
        <div className="header_wrapper_mobile">
          <ul className="burder_icon" onClick={handleMenuOpen}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <nav className="header_block mobile" id={open}>
            <CustomLink to="/master-classes">Мастер-классы</CustomLink>
            <CustomLink to="/custom-made-furniture">Мебель на заказ</CustomLink>
            <CustomLink to="/">Контакты</CustomLink>
            <CustomLink to="/about-us">О нас</CustomLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader