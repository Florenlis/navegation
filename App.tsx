import { Dispatch, SetStateAction, useState } from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import {Slide1} from './src/screens/Slide1'
import { Slide2 } from './src/screens/Slide2';
import { Slide3 } from './src/screens/Slide3';
import { Slide4 } from './src/screens/Slide4';

export interface Ipagina{
setpageI: Dispatch<SetStateAction<number>>

}

export default function app(){
  const[page, setPage] = useState(1)
if (page == 1) {
  return <Slide1 setpageI={setPage} />
}else if (page == 2) {
  return <Slide2 setpageI={setPage} />
}else if (page == 3) {
  return <Navigation/>
   
}
}