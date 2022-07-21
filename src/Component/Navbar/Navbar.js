import React from 'react'
import logo from '../Image/logo.svg'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
import {
  Pizza,
  Sushi,
  Polli,
  Ceti,
  Wok,
  Soup,
  Calat,
  Detsert,
  Tea,
  Gif,
} from '../SvgImage/svg'
import { BsFillTelephoneFill, BsBagFill, BsPersonFill } from 'react-icons/bs'

const foot = [
  { id: 1, img: <Pizza className="product_item_image" />, text: 'Пицца' },
  { id: 2, img: <Sushi className="product_item_image" />, text: 'Суши' },
  { id: 3, img: <Polli className="product_item_image" />, text: 'Роллы' },
  { id: 4, img: <Ceti className="product_item_image" />, text: 'Сеты' },
  { id: 5, img: <Wok className="product_item_image" />, text: 'Wok' },
  { id: 6, img: <Soup className="product_item_image" />, text: 'Супы' },
  { id: 7, img: <Calat className="product_item_image" />, text: 'Салаты' },
  { id: 8, img: <Detsert className="product_item_image" />, text: 'Десерты' },
  { id: 9, img: <Tea className="product_item_image" />, text: 'Напитки' },
  { id: 10, img: <Gif className="product_item_image" />, text: 'Акции' },
]
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo_box">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <NavLink className="Navlink" to="/">
            О нас
          </NavLink>
          <NavLink className="Navlink" to="/dastabka">
            Доставка и оплата
          </NavLink>
          <NavLink className="Navlink" to="/kantact">
            Контакты
          </NavLink>
          <NavLink className="Navlink" to="/bonus">
            Бонусы
          </NavLink>
          <NavLink className="Navlink" to="/vakansia">
            Вакансии
          </NavLink>
        </ul>
        <div className="phone_number">
          <div className="phone">
            <BsFillTelephoneFill className="icon" />
            <p>+7 (495) 617-14-24</p>
          </div>
          <div className="clock">c 10:00 до 23:00</div>
        </div>
        <div className="shopping">
          <div className="summa">
            <p>0 ₽</p>

            <div>
              <BsBagFill className="icon" />
              <div id="nol">0</div>
            </div>
          </div>
          <div className="person">
            <BsPersonFill className="icon" />
          </div>
        </div>
      </nav>
      <div className="product_image">
        {foot?.map((footItem) => {
          return (
            <div className="praduct_item" key={footItem.id}>
              <div className="image_box">{footItem.img}</div>
              <div className="image_name">{footItem.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
