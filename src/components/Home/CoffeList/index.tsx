import { CoffeCard } from "./CoffeCard";
import { CoffeListContainer } from "./styles";
import Image1 from "../../../assets/Coffe1Img.svg";
import Image2 from "../../../assets/Coffee.svg";
import Image3 from "../../../assets/Image.svg";
import Image4 from "../../../assets/Image (1).svg";
import Image5 from "../../../assets/Coffee (1).svg";
import Image6 from "../../../assets/Coffee (2).svg";
import Image7 from "../../../assets/Coffee (3).svg";
import Image8 from "../../../assets/Image (2).svg";
import Image9 from "../../../assets/Coffee (4).svg";
import Image10 from "../../../assets/Coffee (5).svg";
import Image11 from "../../../assets/Coffee (6).svg";
import Image12 from "../../../assets/Coffee (7).svg";
import Image13 from "../../../assets/Coffee (8).svg";
import Image14 from "../../../assets/Coffee (9).svg";

export function CoffeList() {
    return (
        <>
            <CoffeListContainer>
                <h1>Nossos cafés</h1>

                <section>
                    <div className="ConnectionDiv">
                        <CoffeCard
                            TagText="TRADICIONAL"
                            Title="Expresso Tradicional"
                            subtitle="O tradicional café feito com água quente e grãos moídos"
                            Image={Image1}
                            Price={5.00}
                            id={1}
                        />
                        <CoffeCard 
                            TagText="TRADICIONAL"
                            Title="Expresso Americano"
                            subtitle="Expresso diluído, menos intenso que o tradicional"
                            Image={Image2} 
                            Price={4.50}
                            id={2}
                        />
                    </div>
                    <div className="ConnectionDiv">
                        <CoffeCard 
                            TagText="TRADICIONAL"
                            Title="Expresso Cremoso"
                            subtitle="Café expresso tradicional com espuma cremosa"
                            Image={Image3}         
                            Price={5.50}
                            id={3}
                        />
                        <CoffeCard 
                            TagText="TRADICIONAL"
                            TagText2="GELADO"
                            Title="Expresso Gelado"
                            subtitle="Bebida preparada com café expresso e cubos de gelo"
                            Image={Image4} 
                            Price={6.00}
                            id={4}
                        />
                    </div>
                </section>

                <section>
                    <div className="ConnectionDiv">
                        <CoffeCard
                            TagText="TRADICIONAL"
                            TagText2="COM LEITE"
                            Title="Café com leite"
                            subtitle="Meio a meio de expresso tradicional com leite vaporizado"
                            Image={Image5}
                            Price={7.00}
                            id={5}
                        />
                        <CoffeCard
                            TagText="TRADICIONAL"
                            TagText2="COM LEITE"
                            Title="Latte"
                            subtitle="Uma dose de café expresso com o dobro de leite e espuma cremosa"
                            Image={Image6}
                            Price={8.00}
                            id={6}
                        />
                    </div>
                    <div className="ConnectionDiv">
                        <CoffeCard
                            TagText="TRADICIONAL"
                            TagText2="COM LEITE"
                            Title="Capuccino"
                            subtitle="Bebida com canela feita de doses iguais de café, leite e espuma"
                            Image={Image7}
                            Price={8.50}
                            id={7}
                        />
                        <CoffeCard
                            TagText="TRADICIONAL"
                            TagText2="COM LEITE"
                            Title="Macchiato"
                            subtitle="Café expresso misturado com um pouco de leite quente e espuma"
                            Image={Image8}
                            Price={7.50}
                            id={8}
                        />
                    </div>
                </section>

                <section>
                    <div className="ConnectionDiv">
                        <CoffeCard
                            TagText="TRADICIONAL"
                            TagText2="COM LEITE"
                            Title="Mocaccino"
                            subtitle="Café expresso com calda de chocolate, pouco leite e espuma"
                            Image={Image9}
                            Price={9.90}
                            id={9}
                        />
                        <CoffeCard
                            TagText="ESPECIAL"
                            TagText2="COM LEITE"
                            Title="Chocolate Quente"
                            subtitle="Bebida feita com chocolate dissolvido no leite quente e café"
                            Image={Image10}
                            Price={12.00}
                            id={10}
                        />
                    </div>
                    <div className="ConnectionDiv">
                        <CoffeCard
                            TagText="ESPECIAL"
                            TagText2="ALCOÓLICO"
                            TagText3="GELADO"
                            Title="Cubano"
                            subtitle="Drink gelado de café expresso com rum, creme de leite e hortelã"
                            Image={Image11}
                            Price={26.40}
                            id={11}
                        />
                        <CoffeCard
                            TagText="ESPECIAL"
                            Title="Havaiano"
                            subtitle="Bebida adocicada preparada com café e leite de coco"
                            Image={Image12}
                            Price={15.60}
                            id={12}
                        />
                    </div>
                </section>

                <section>
                    <div className="ConnectionDiv">
                        <CoffeCard
                            TagText="ESPECIAL"
                            Title="Árabe"
                            subtitle="Bebida preparada com grãos de café árabe e especiarias"
                            Image={Image13}
                            Price={22.30}
                            id={13}
                        />
                        <CoffeCard
                            TagText="ESPECIAL"
                            TagText2="ALCOÓLICO"
                            Title="Irlandês"
                            subtitle="Bebida a base de café, uísque irlandês, açúcar e chantilly"
                            Image={Image14}
                            Price={25.40}
                            id={14}
                        />
                    </div>
                </section>
                
            </CoffeListContainer>
        </>
    );
}
