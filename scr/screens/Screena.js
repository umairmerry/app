import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screena() {

  return (

    <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../assests/imagea.png')}>


      <View style={{ marginTop: 60 }}>

        <Image style={{ alignSelf: 'center' }} source={require('../assests/girla.png')}>

        </Image>
      </View>
      <View style={{ marginTop: 115 }}>
        <Text style={{ textAlign: 'center', paddingHorizontal: 16, color: 'white', fontWeight: 'bold' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting indus
          try. Lorem Ipsum has been the
        </Text>
      </View>

      <View>
      </View>
      <View style={{ flexDirection: 'row',justifyContent:'center',marginTop:40}}>
        <Text style={{paddingHorizontal:20}}>
          <Icon name="circle" size={12} color="white" />;
        </Text>
        <Text style={{paddingHorizontal:20}}>
          <Icon name="circle" size={12} color="white" />;
        </Text><Text style={{paddingHorizontal:20}}>
          <Icon name="circle" size={12} color="white" />;
        </Text>
      </View>

      {/* <View style={{height:20,width:20,color:'white'}}>

      </View> */}





    </ImageBackground>

  )
}