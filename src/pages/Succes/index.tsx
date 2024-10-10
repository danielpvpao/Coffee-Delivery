import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Ilustration from '../../assets/Illustration.svg'
import { BaseWithH1, MainContainer } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
export function Succes(){
    const { Data, activeButton } =  useContext(CoffeeContext)
    return(
        <MainContainer>
            <section>
            <BaseWithH1>
                <h1>Uhu! Pedido confirmado</h1>
                <p className='FirstP'>Agora é só aguardar que logo o café chegará até você</p>
                <span>
                    <div className='ComplementarDiv'>
                    <article>
                        <MapPin className='SVG1' size={16} weight='fill'  />
                        <div>
                            <p>
                            Entrega em <strong>{`${Data.rua}, ${Data.numero}`}</strong>
                            </p>
                        <p>
                            {`${Data.bairro} - ${Data.cidade}, ${Data.uf}`}
                        </p>
                        </div>
                    </article>
                    <article>
                    <Timer className='SVG2' size={16}   />
                    <div>
                        <p>
                        Previsão de entrega

                        </p>
                        <p>
                           <strong>20 min - 30 min</strong> 
                        </p>
                    </div>
                    </article>
                    <article>
                    <CurrencyDollar className='SVG3' size={16}  />
                    <div>
                        <p>
                        Pagamento na entrega
                        </p>
                        <p>
                        <strong>{activeButton}</strong>
                        </p>
                    </div>
                    </article>
                    </div>
                </span>
            </BaseWithH1>
            <img src={Ilustration} alt="" />
            </section>
        </MainContainer>
    )
}