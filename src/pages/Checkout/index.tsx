import { useForm, SubmitHandler } from "react-hook-form";
import {
  BaseInput,
  ButtonContainer,
  CheckoutContainer,
  ConfirmOrderButton,
  FormContainer,
  FormContainerAndP,
  InputContainer,
  PaymentContainer,
  SelectedCoffeesContainer,
  TotalItems,
} from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { SelectedCoffe } from "./SelectedCoffe";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

interface DataProps {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function Checkout() {
  const { register, handleSubmit } = useForm<DataProps>();
  const Navigate = useNavigate();
  const {
    SelectedCoffes,
    setTotalPrice,
    TotalPrice,
    setData,
    activeButton,
    setActiveButton,
    isTotalPriceCalculated,
    setIsTotalPriceCalculated,
  } = useContext(CoffeeContext);

  useEffect(() => {
    const stateJson = JSON.stringify(SelectedCoffes);
    localStorage.setItem('@Coffe-Delivery:Selected-Coffes-1.0.0', stateJson);
  }, [SelectedCoffes]);

  const handlePaymentClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const onSubmit: SubmitHandler<DataProps> = (data: DataProps) => {
    if (SelectedCoffes.length > 0) {
      setData(data);
      Navigate("/Success");
    }
  };
  

  const setTotalPriceOnFirstTime = () => {
    const total = SelectedCoffes.reduce((accumulator, coffe) => {
      return accumulator + coffe.FinalPrice;
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    if (!isTotalPriceCalculated) {
      setTotalPriceOnFirstTime();
      setIsTotalPriceCalculated(true);
    }
  }, [isTotalPriceCalculated, setTotalPriceOnFirstTime, setIsTotalPriceCalculated]);

  return (
    <CheckoutContainer>
      <section>
        <FormContainerAndP>
          <p>Complete seu pedido</p>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="H1AndP">
                <MapPinLine size={22} />
                <span>
                  <h1>Endereço de entrega</h1>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </span>
              </div>
              <InputContainer>
                <BaseInput
                  as={InputMask}
                  mask="99999-999"
                  {...register("cep", { required: true })}
                  className="input1"
                  placeholder="CEP"
                />
                <BaseInput
                  className="input2"
                  maxLength={50}
                  type="text"
                  {...register("rua", { required: true })}
                  placeholder="RUA"
                />
                <div className="Inputs2">
                  <BaseInput
                    as={InputMask} 
                    mask="999"
                    {...register("numero", { required: true })}
                    className="input3"
                    placeholder="Número"
                  />
                  <BaseInput
                    maxLength={50}
                    className="input4"
                    type="text"
                    {...register("complemento")}
                    placeholder="Complemento (opcional)"
                  />
                </div>
                <div className="Inputs3">
                  <BaseInput
                    maxLength={20}
                    className="input5"
                    type="text"
                    {...register("bairro", { required: true })}
                    placeholder="Bairro"
                  />
                  <BaseInput
                    maxLength={25}
                    className="input6"
                    type="text"
                    {...register("cidade", { required: true })}
                    placeholder="Cidade"
                  />
                  <BaseInput
                    className="input7"
                    maxLength={2}
                    type="text"
                    {...register("uf", { required: true })}
                    placeholder="UF"
                  />
                </div>
              </InputContainer>
            </form>
            <PaymentContainer>
              <div className="H1AndP">
                <CurrencyDollar size={22} />
                <span>
                  <h1>Pagamento</h1>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </span>
              </div>
              <ButtonContainer>
                <button
                  className={activeButton === "Cartão de Crédito" ? "active" : ""}
                  onClick={() => handlePaymentClick("Cartão de Crédito")}
                >
                  <CreditCard size={16} /> CARTÃO DE CRÉDITO
                </button>
                <button
                  className={activeButton === "Cartão de débito" ? "active" : ""}
                  onClick={() => handlePaymentClick("Cartão de débito")}
                >
                  <Bank size={16} /> CARTÃO DE DÉBITO
                </button>
                <button
                  className={activeButton === "Dinheiro" ? "active" : ""}
                  onClick={() => handlePaymentClick("Dinheiro")}
                >
                  <Money size={16} /> DINHEIRO
                </button>
              </ButtonContainer>
            </PaymentContainer>
          </FormContainer>
        </FormContainerAndP>
        <SelectedCoffeesContainer>
          <p className="FirstItemP">Cafés selecionados</p>
          <div>
            <div>
              <SelectedCoffe />
              <TotalItems>
                <p>
                Total de itens <span>{TotalPrice.toFixed(2).replace('.', ',')}</span>{" "}
                </p>
                <p>
                  Entrega <span>R$ 3,50</span>{" "}
                </p>
                <p className="lastItem">
                Total <span>{(TotalPrice + 3.5).toFixed(2).replace('.', ',')}</span>
                </p>
              </TotalItems>
              <ConfirmOrderButton onClick={handleSubmit(onSubmit)}>
                CONFIRMAR PEDIDO
              </ConfirmOrderButton>
            </div>
          </div>
        </SelectedCoffeesContainer>
      </section>
    </CheckoutContainer>
  );
}
