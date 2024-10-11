import { Minus, Plus, Trash } from 'phosphor-react';
import { useContext } from "react";
import { Buttons, H1AndButtons, InputNumber, PriceP, Span } from './styles';
import { CoffeeContext } from '../../../contexts/CoffeeContext';

export function SelectedCoffe() {
  const { SelectedCoffes, setTotalPrice, updateCoffeAmount, RemoveSelectedCoffe, TotalPrice } = useContext(CoffeeContext);
  return (
    <>
      {SelectedCoffes.map((coffe) => {
       const AddOneOnInput = () => {
        if (coffe.Amount < 99) {
          updateCoffeAmount(coffe.id, coffe.Amount + 1);
          setTotalPrice(TotalPrice + coffe.Price);
        }
      };
      
      const RemoveOneOnInput = () => {
        if (coffe.Amount > 1) {
          updateCoffeAmount(coffe.id, coffe.Amount - 1);
          setTotalPrice(TotalPrice - coffe.Price);
        }
      };
      
        
        return (
          <Span key={coffe.id}>
            <img src={coffe.Image} alt={coffe.Title} />
            <H1AndButtons>
              <h1>{coffe.Title}</h1>
              <Buttons>
                <InputNumber>
                  <button type="button" onClick={RemoveOneOnInput}>
                    <Minus size={14} />
                  </button>
                  <div className="Number">{coffe.Amount}</div>
                  <button type="button" onClick={AddOneOnInput}>
                    <Plus size={14} />
                  </button>
                </InputNumber>
                <button className='RemoveCoffeButton' onClick={() => RemoveSelectedCoffe(coffe.id)}>
                  <Trash size={16} />
                  <h2>REMOVER</h2>
                </button>
              </Buttons>
            </H1AndButtons>
            <PriceP>R$ {coffe.Price.toFixed(2).replace('.', ',')}</PriceP>
          </Span>
        );
      })}
    </>
  );
}
