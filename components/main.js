import React, {useState,useEffect,useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';
// import {useFonts} from 'expo-font'
import {  useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
// import * as SplashScreen from 'expo-splash-screen'


export default function App() {
  
  
  // const [isLoaded] = useFonts({
  //   "mrt-mid": require("./assets/fonts/Corbel.ttf"),
  //   "mrt-bold": require("./assets/fonts/Corbel Bold.ttf"),
  // });
  
  // useEffect(() => {
  //   async function prepare ( ) {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const handleOnLayout = useCallback(async () => {
  //   if (isLoaded) {
  //     await SplashScreen.hideAsync(); //hide the splashscreen
  //   }
  // }, [isLoaded]);

  // if (!isLoaded) {
  //   return null;
    
  // }

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    // <View style={styles.container} unLayout={handleOnLayout}>
    <View style={styles.container} >
       <View style={{backgroundColor:'#f5f5f5',width:'100%',height:5,button:0,display:'flex',flexDirection:'row',alignSelf:'center',justifyContent:'space-evenly'}}/>
      <View style={styles.container_child}>
        <View style={styles.header}>

          <View style={styles.header_first_box}>
            <Image
            source={require('../assets/svg/menu.png')} // Utiliza la prop source para especificar la ruta de la imagen
            style={{ width: 14, height: 14,left:25,position:'absolute' }} // Define el estilo de la imagen (ancho y alto)
            />
            <Text style={{color:'#340068',fontSize:20,fontWeight:'700',fontFamily:'Inter_400Regular'}}>SMART WATER</Text>
          </View>

          <View style={styles.header_second_box}>
            <Text style={styles.Registrar_nuevo_venta}>Registrar nuevo venta</Text>
          </View>
        </View>


<View style={styles.primera_main_box}>
    <Image
      source={require('../assets/svg/user.png')} // Utiliza la prop source para especificar la ruta de la imagen
      style={{ width: 20, height: 20,position:'absolute' }} // Define el estilo de la imagen (ancho y alto)
      />
    <View style={styles.primera_main_box_text_child}>
      <Text style={{color:'#171717',left:34,fontSize:16,fontWeight:'400',fontFamily:'Inter_400Regular'}}>Numero de cliente</Text>
      <View style={{backgroundColor:'#171717',width:291,height:1,left:32}}/>

    </View>
</View>

<View style={styles.segunda_main_box}>
    <Image
      source={require('../assets/svg/botella.png')} // Utiliza la prop source para especificar la ruta de la imagen
      style={{ width: 20, height: 20,position:'absolute' }} // Define el estilo de la imagen (ancho y alto)
      />
    <View style={styles.primera_main_box_text_child}>
      <Text style={{color:'#171717',left:34,fontSize:16,fontWeight:'400',fontFamily:'Inter_400Regular'}}>Producto</Text>
      <View style={{backgroundColor:'#171717',width:291,height:1,left:32}}/>

    </View>
 
    <Image
      source={require('../assets/svg/flecha.png')} // Utiliza la prop source para especificar la ruta de la imagen
      style={{ width: 12, height: 12,top:7,position:'absolute',right:-30 }} // Define el estilo de la imagen (ancho y alto)
      />
 
</View>

<View style={styles.tercera_main_box}>
    <Image
      source={require('../assets/svg/cantidad.png')} // Utiliza la prop source para especificar la ruta de la imagen
      style={{ width: 20, height: 20,position:'absolute' }} // Define el estilo de la imagen (ancho y alto)
      />
    <View style={styles.primera_main_box_text_child}>
      <Text style={{color:'#171717',left:34,fontSize:16,fontWeight:'400',fontFamily:'Inter_400Regular'}}>Cantidad</Text>
      <View style={{backgroundColor:'#fff',width:291,height:1,left:32}}/>   
    </View>
<View style={{display:'flex',flexDirection:'row',position:'absolute',right:-30}}>
   
{/* <View style={styles.float}> */}
    <Image
      source={require('../assets/svg/menos2.png')} // Utiliza la prop source para especificar la ruta de la imagen
      style={{ width: 30,height: 30,}} // Define el estilo de la imagen (ancho y alto)
      />
      {/* </View> */}
      
      <Text style={{color:'#404040',marginLeft:7,marginRight:7,fontSize:20,fontWeight:400,fontFamily:'Inter_400Regular'}}>01</Text>
      
      {/* <View style={styles.float}> */}
    <Image
      source={require('../assets/svg/add2.png')} // Utiliza la prop source para especificar la ruta de la imagen
      style={{ width: 30,height: 30,}} // Define el estilo de la imagen (ancho y alto)
      />
      {/* </View> */}
</View>

</View>



<View style={styles.cuarta_main_box}>
    <Image
      source={require('../assets/svg/peso.png')} // Utiliza la prop source para especificar la ruta de la imagen
      style={{ width: 20, height: 20,position:'absolute' }} // Define el estilo de la imagen (ancho y alto)
      />
    <View style={styles.primera_main_box_text_child}>
      <Text style={{color:'#171717',left:34,fontSize:16,fontWeight:'400',fontFamily:'Inter_400Regular'}}>Numero de cliente</Text>
      <View style={{backgroundColor:'#171717',width:291,height:1,left:32}}/>

    </View>

    
</View>





        <View style={styles.boton_mas}>
        <Image
          source={require('../assets/svg/add.png')} // Utiliza la prop source para especificar la ruta de la imagen
          style={{ width: 15, height: 15 }} // Define el estilo de la imagen (ancho y alto)
        />
          {/* <Text style={styles.mas}>+</Text> */}
        </View>

        <Text style={styles.agregar_otro_producto}>Agregar otro producto</Text>

        <View style={styles.boton_vender}>
          <Text style={styles.texto_boton_vender}>
            Vender
          </Text>
        </View>
      </View>

      <View style={{backgroundColor:'#fff',width:'100%',height:55,button:0,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
      <Image source={require('../assets/barra_abajo/copy.png')} style={{ width: 27,height: 27,}} />
      <Image source={require('../assets/barra_abajo/play.png')} style={{ width: 27,height: 27,}} />
      <Image source={require('../assets/barra_abajo/mensaje.png')} style={{ width: 27,height: 27,}} />
      <Image source={require('../assets/barra_abajo/compartir.png')} style={{ width: 27,height: 27,}} />
        
      </View>
    </View>
  );
}//26 35

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_child:{
    backgroundColor: '#FFF',
    width:360,
    height:640,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  boton_vender:{
    width:320,
    height:40,
    position:'absolute',
    top:550,
    left:20,
    borderRadius:20,
    padding:'8px 116px 8px 116px',
    gap:10,
    backgroundColor:'#340068',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center' 
  },
  texto_boton_vender:{
    fontFamily:'Inter_400Regular',
    fontWeight:'700',
    fontSize:20,
    textAlign:'center',

    color:'#fff',
  },
  boton_mas:{
    top:414,
    left:165,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    width:30,
    height:30,
    borderRadius:50,
    backgroundColor:'#fff', shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  // mas:{
  //  fontSize:30,
  //  backgroundColor:'red'
  // },
  agregar_otro_producto:{
    fontFamily:'Inter_400Regular',
    fontWeight:'400',
    fontSize:16,
    top:458,
    width:'100%',
    position:'absolute',
    color:'#171717',
    textAlign:'center',
    textAlignVertical:'center',
  },
  header:{
    position:'absolute',
    top:0,
    height:99,
    width:360,
  },
  header_first_box:{
    width:360,
    height:70,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  header_second_box:{
    width:360,
   
    height:39,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  Registrar_nuevo_venta:{
    fontSize:20,
    fontWeight:'500',
    position:'absolute',
    left:20,
    color:'#340068'
  },
  cuarta_main_box:{
    top:300,
    position:'absolute',
    height:28,
    left:15,
    display: 'flex',
    flexDirection:'column',
  },
  tercera_main_box:{
    top:250,
    position:'absolute',
    height:28,
    left:15,
    display: 'flex',
    flexDirection:'column',
  },
  segunda_main_box:{
    top:200,
    position:'absolute',
    height:28,
    left:15,
    display: 'flex',
    flexDirection:'column',
  },
  primera_main_box:{
    top:150,
    position:'absolute',
    height:28,
    left:15,
    display: 'flex',
    flexDirection:'column',
  },
  primera_main_box_text_child:{
    height:28,
    // backgroundColor:'red'
    display:'flex',
    flexDirection:'column'
  },
  float:{
    width: 26,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000', // Color de la sombra
    shadowOffset: { width: 0, height: '-200px' }, // Desplazamiento de la sombra
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 50, // Radio de desenfoque de la sombra
    elevation: 20, // Efecto de elevación (solo para Android)
  },
});
