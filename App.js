import React ,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const style = {
  fontSize: 38,
};
const NuevoComponente = props => {
  return <Text style={style}>{props.title}</Text>;
};5
const App = () =>{
    const[contador, setcontador] = useState(0);
    const[Minutos, setMinutos] = useState(0);
    useEffect(()=>{
      const interval = setInterval(() =>{
          setcontador(contador + 1);
          if (contador >59){
            setMinutos(Minutos + 1);
            setcontador(0);
            }
        },1000);
        return () => clearInterval(interval);
  }); 
  let Segundos = `${contador}`, Minutos1 = `${Minutos}`;
  if(contador < 10 ){Segundos = `0${contador}`;}
  if(contador < 10 ){Minutos1 = `0${Minutos}`;}
  const Formato =`${Minutos1}:${Segundos}`;
    return(
      <View>
        <NuevoComponente title={Formato}/>
      </View>
    );
};
export default App;