import { useContext, useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CoffeCardContainer } from "./styles";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

interface CoffeCardProps {
  TagText: string;
  TagText2?: string;
  TagText3?: string;
  Title: string;
  Image: string;
  subtitle: string;
  Price: number;
  id: number;
}
export function CoffeCard({
  TagText,
  TagText2,
  TagText3,
  Title,
  subtitle,
  Image,
  Price,
  id,
}: CoffeCardProps) {
  const {
    SelectedCoffes,
    setIsTotalPriceCalculated,
    dispatch
  } = useContext(CoffeeContext);

  const [SelectedCoffeAmount, setSelectedCoffeAmount] = useState(0);
  const Amount = SelectedCoffeAmount;
  const FinalPrice = Price * Amount


  function addCoffeToList() {
    const Coffe = {
      Title,
      FinalPrice,
      Image,
      Price,
      Amount,
      id,
    };
    const existingCoffeIndex = SelectedCoffes.findIndex((coffe) => coffe.id === id);
    if (existingCoffeIndex >= 0) {
      const updatedCoffes = [...SelectedCoffes];
      updatedCoffes[existingCoffeIndex] = {
        ...updatedCoffes[existingCoffeIndex],
        Amount: updatedCoffes[existingCoffeIndex].Amount + Amount,
        FinalPrice: updatedCoffes[existingCoffeIndex].FinalPrice + FinalPrice,
      };
      dispatch({
        type: 'UPDATE-COFFES-IF-IS-AN-EXISTING-COFFE-OF-THE-SAME-TYPE',
        payload: {
          updatedCoffes,
        }
      });
    } else {
      dispatch({
        type: 'CREATE-COFFE',
        payload: {
          Coffe,
        }
      })
    }
  }
  

  function AddOneOnInput() {
    if (SelectedCoffeAmount < 99) {
      setSelectedCoffeAmount(SelectedCoffeAmount + 1);
    }
  }

  function RemoveOneOnInput() {
    if (SelectedCoffeAmount > 0) {
      setSelectedCoffeAmount(SelectedCoffeAmount - 1);
    }
  }

  function returnNumbertoZero() {
    setSelectedCoffeAmount(0);
  }

  return (
    <CoffeCardContainer>
      <div>
        <img src={Image} alt={`Imagem do café ${Title}`} />
        <div className="TagDiv">
          <p className="Tag">{TagText}</p>
          {TagText2 && <p className="Tag">{TagText2}</p>}
          {TagText3 && <p className="Tag">{TagText3}</p>}
        </div>
        <h1>{Title}</h1>
        <p>{subtitle}</p>
        <span>
          <p>
          <strong>R$</strong> {Price.toFixed(2).replace('.', ',')}
          </p>
          <div>
            <div className="Input-number">
              <button onClick={RemoveOneOnInput}>
                <Minus size={14} />
              </button>
              <div className="Number">{SelectedCoffeAmount}</div>
              <button onClick={AddOneOnInput}>
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={() => {
                if (SelectedCoffeAmount !== 0) {
                  addCoffeToList();
                  returnNumbertoZero();
                  setIsTotalPriceCalculated(false);
                }
              }}
            >
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </div>
        </span>
      </div>
    </CoffeCardContainer>
  );
}
