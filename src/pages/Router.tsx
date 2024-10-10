import {Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Checkout } from './Checkout';
import { Succes } from './Succes';
export function Router(){
    return( 
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='/Success' element={<Succes/>}/>
            </Route>
        </Routes>
    );
}