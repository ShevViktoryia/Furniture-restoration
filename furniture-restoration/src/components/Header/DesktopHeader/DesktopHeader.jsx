import './DesktopHeader.css'
import CustomLink from '../../CustomLink/CustomLink'

const DesktopHeader = () => {

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header_wrapper">
          <nav className="header_block">
            <CustomLink to="/master-classes">Мастер-классы</CustomLink>
            <CustomLink to="/custom-made-furniture">Мебель на заказ</CustomLink>
            <div className="header_logo"><CustomLink to="/Furniture-restoration" /></div>
            <CustomLink to="/">Контакты</CustomLink>
            <CustomLink to="/about-us">О нас</CustomLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default DesktopHeader