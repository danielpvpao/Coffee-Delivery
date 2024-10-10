import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BaseArticle, HomeContainer } from "./styles";
import Image from "../../assets/Imagem.svg";
import { CoffeList } from "./CoffeList";

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <div>
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </p>
            <div className="Iconsdiv">
              <div>
                <BaseArticle className="CartArticle">
                  <div className="svgContainer">
                    <ShoppingCart size={16} weight="fill" />
                  </div>
                  Compra simples e segura
                </BaseArticle>
                <BaseArticle className="TimerArticle">
                  <div className="svgContainer">
                    <Timer size={16} weight="fill" />
                  </div>
                  Entrega rápida e rastreada
                </BaseArticle>
              </div>
              <div>
                <BaseArticle className="PackageArticle">
                  <div className="svgContainer">
                    <Package size={16} weight="fill" />
                  </div>
                  Embalagem mantém o café intacto
                </BaseArticle>
                <BaseArticle className="CoffeArticle">
                  <div className="svgContainer">
                    <Coffee size={16} weight="fill" />
                  </div>
                  O café chega fresquinho até você
                </BaseArticle>
              </div>
            </div>
          </div>
        </div>
        <img src={Image} alt="" />
      </HomeContainer>
      <CoffeList />
    </>
  );
}
