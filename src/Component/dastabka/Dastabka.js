import React from 'react'
import '../dastabka/Dastabka.css';
import Sushi from "../Image/sushi.svg";
import Sushi1 from "../Image/sushi1.svg";
import Sushi2 from "../Image/sushi2.svg";
import Sushi3 from "../Image/sushi3.svg";
import Sushi4 from "../Image/sushi4.svg";
import Sushi5 from "../Image/sushi5.svg";
import Sushi6 from "../Image/sushi6.svg";
import Sushi7 from "../Image/sushi7.svg";
import Sushi8 from "../Image/sushi8.svg";
import Sushi9 from "../Image/sushi9.svg";
import Sushi10 from "../Image/sushi10.svg";
import Sushi11 from "../Image/sushi11.svg";
import Sushi15 from "../Image/sushi15.svg";



function Dastabka() {
  
  return(
    <div className='Dastabka'>
      <p>Главная //<strong>Суши</strong></p>
    <h1>Суши</h1>
    <div className="brend">
      <div className="brend_photo">
       <img src={Sushi} alt="" /><p>Лосось</p>
      </div>
      <div className="brend_photo">
      <img src={Sushi1} alt="" /><p>Тунец</p>
      </div>
      <div className="brend_photo">
      <img src={Sushi2} alt="" /><p>Угорь</p>
      </div>
      <div className="brend_photo">
      <img src={Sushi3} alt="" /><p>Креветка</p>
      </div>
      <div className="brend_photo">
      <img src={Sushi4} alt="" /><p>Краб</p>
      </div>
      <div className="brend_photo">
      <img src={Sushi5} alt="" /><p>Мидии</p>
      </div>
      </div>
      <div className="brendone">
      <div className="brend_photoo">
      <img src={Sushi6} alt="" /><p>Острое</p>
      </div>
      <div className="brend_photoo">
      <img src={Sushi7} alt="" /><p>Запеченный</p>
      </div>
      <div className="brend_photoo">
      <img src={Sushi8} alt="" /><p>Vegan</p>
      </div>
      <div className="brend_photoo">
      <img src={Sushi9} alt="" /><p>ТОП</p>
      </div>
      <div className="brend_photoo">
      <img src={Sushi10} alt="" /><p>Новинки</p>
      </div>
      <div className="brend_photoo">
      <img src={Sushi11} alt="" /><p>Скидки</p>
      </div>
      <div className="dropdown">
     <p>Сортировка</p>
     <select name="" id="">
       <option value="">По умолчанию</option>
       <option value="">По умолчанию</option>
       <option value="">По умолчанию</option>
       <option value=""></option>
     </select>
     
      </div>
      </div>


    
   
  </div>
  )
}

export default Dastabka
