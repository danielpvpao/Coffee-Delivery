import { useContext } from 'react';
import Logo from '../../../assets/Logo (1).svg'
import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CoffeeContext } from '../../../contexts/CoffeeContext';
import { useNavigate } from "react-router-dom"

export function Header() {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/Checkout"); 
  };
  const { SelectedCoffes } = useContext(CoffeeContext)
    return(
    <HeaderContainer>
      <div>
      <img src={Logo} alt="" />
    <nav>
      <span>
            <MapPin size={22} weight='fill'/>
            <p>
            Porto Alegre, RS
            </p>
      </span>
      <button onClick={handleClick}>
                <ShoppingCart size={22} weight="fill"  />
                {SelectedCoffes.length !==0 && <div>{SelectedCoffes.length}</div>}
      </button>
   </nav>
      </div>
    </HeaderContainer>
    )   
}
