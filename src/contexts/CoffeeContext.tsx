import { createContext, ReactNode, useReducer, useState } from "react";  

export const CoffeeContext = createContext({} as CoffeeContextProvider);

interface Coffe {
  TagText?: string;
  TagText2?: string;
  TagText3?: string;
  Title: string;
  subtitle?: string;
  Image: string;
  Price: number;
  id: number;
  FinalPrice: number;
  Amount: number;
}

interface DataProps {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface RemoveSelectedCoffeAction {
  type: 'REMOVE_SELECTED_COFFE';
  payload: {
    newSelectedCoffes: Coffe[];
  };
}

interface UpdateCoffeAmountAction {
  type: 'UPDATE_COFFE_AMOUNT';
  payload: {
    id: number;
    newAmount: number;
  };
}

interface UpdateCoffesIfExistingAction {
  type: 'UPDATE-COFFES-IF-IS-AN-EXISTING-COFFE-OF-THE-SAME-TYPE';
  payload: {
    updatedCoffes: Coffe[];
  };
}

interface CreateCoffeAction {
  type: 'CREATE-COFFE';
  payload: {
    Coffe: Coffe;
  };
}

type Action = 
  | RemoveSelectedCoffeAction 
  | UpdateCoffeAmountAction 
  | UpdateCoffesIfExistingAction 
  | CreateCoffeAction;

interface CoffeeContextProvider {
  SelectedCoffes: Coffe[]; 
  CoffeCardNumber: number;
  TotalPrice: number;
  Number: number;
  activeButton: string;
  Data: DataProps | null;  // Agora permite 'null'
  isTotalPriceCalculated: boolean;
  setCoffeCardNumber: (value: number) => void;
  setTotalPrice: (value: number) => void;
  setNumber: (value: number) => void;
  setActiveButton: (value: string) => void;
  setData: (data: DataProps | null) => void;  // Ajustado para aceitar 'null'
  setIsTotalPriceCalculated: (value: boolean) => void;
  dispatch: (action: Action) => void;
  RemoveSelectedCoffe: (value: number) => void;
  updateCoffeAmount: (id: number, newAmount: number) => void;
}

interface Props {
  children: ReactNode;
}

export function CoffeeContextProvider({ children }: Props) {
  const [SelectedCoffes, dispatch] = useReducer((state: Coffe[], action: Action) => {
    switch (action.type) {
      case 'REMOVE_SELECTED_COFFE':
        return action.payload.newSelectedCoffes; 
      case 'UPDATE_COFFE_AMOUNT':
        return state.map(coffe => 
          coffe.id === action.payload.id
           ? { ...coffe, Amount: action.payload.newAmount } 
          : coffe);
      case 'UPDATE-COFFES-IF-IS-AN-EXISTING-COFFE-OF-THE-SAME-TYPE':
        return action.payload.updatedCoffes;
      case 'CREATE-COFFE':
        return [...state, action.payload.Coffe];
      default:
        return state;
    }
  }, [] as Coffe[], () => {
    const storedStateAsJSON = localStorage.getItem('@Coffe-Delivery:Selected-Coffes-1.0.0');
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }
    return [];
  });
  
  const [CoffeCardNumber, setCoffeCardNumber] = useState<number>(1);
  const [TotalPrice, setTotalPrice] = useState<number>(0);
  const [Number, setNumber] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<string>("Cartão de Crédito");
  const [Data, setData] = useState<DataProps | null>(null);  // Inicializa com 'null'
  const [isTotalPriceCalculated, setIsTotalPriceCalculated] = useState<boolean>(false);
  
  function RemoveSelectedCoffe(id: number) { 
    const newSelectedCoffes = SelectedCoffes.filter((coffe: Coffe) => coffe.id !== id);
    dispatch({
      type: 'REMOVE_SELECTED_COFFE',
      payload: {
        newSelectedCoffes,
      }
    });
    
    const removedCoffe = SelectedCoffes.find((coffe: Coffe) => coffe.id === id);
    if (removedCoffe) {
      if (removedCoffe.Amount === 1) {
        setTotalPrice((state) => state - removedCoffe.Price);
      } else {
        setTotalPrice((state) => state - removedCoffe.FinalPrice);
      }
    }
  }

  function updateCoffeAmount(id: number, newAmount: number) { 
    dispatch({
      type: 'UPDATE_COFFE_AMOUNT',
      payload: {
        id, 
        newAmount
      }
    });
  }

  return (
    <CoffeeContext.Provider
      value={{
        SelectedCoffes,
        TotalPrice,
        setTotalPrice,
        Number,
        setNumber,
        dispatch,
        RemoveSelectedCoffe,
        updateCoffeAmount,
        CoffeCardNumber,
        setCoffeCardNumber,
        Data,
        setData,
        activeButton,
        setActiveButton,
        isTotalPriceCalculated,
        setIsTotalPriceCalculated,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
