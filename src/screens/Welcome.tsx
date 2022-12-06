import React, {useRef, useEffect} from 'react'
import { View, Text, Center } from 'native-base'
import AnimatedLottieView from "lottie-react-native";
import Button from '../components/Button';

export function Welcome() {
  const animationRef = useRef<AnimatedLottieView>(null)

  useEffect(() => {
    animationRef.current?.play()
  }, [])

  return (
    <View flex={1} bgColor='bgType.water' >
      
      <Center h='70%' >
        <View>
          <View w={200} h={300} bgColor='type.water' rounded={100}>
            <AnimatedLottieView autoPlay={true} source={require('../assets/Lottie/67858-pokemon.json')} loop={true} />
          </View>
        </View>

        <Text fontSize={40} color='background.100' mt={19} >Bem Vindo</Text>

        <Text fontSize={16} color='background.100' mt={19} >Encontre todos os pokemons em um só lugar</Text>
      </Center>


      <Center h='30%' bgColor='background.100' borderTopLeftRadius={20} borderTopRightRadius={20} p={20} >
        <Button title="Iniciar" />
      </Center>

    </View>
  )
}