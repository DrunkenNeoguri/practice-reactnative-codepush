import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {onboardingStyles} from './styles';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import {IMAGES} from '../../assets/images/images';

export default function OnboardingScreen() {
  return (
    <View style={onboardingStyles.screen}>
      <View style={onboardingStyles.image}>
        <Text style={onboardingStyles.emblem}>TableNow</Text>
        <AutoHeightImage
          width={Dimensions.get('screen').width}
          source={IMAGES.onboarding}
        />
      </View>
      <View style={{flex: 1, margin: 24, gap: 24}}>
        <Text style={onboardingStyles.subject}>
          Book your table in few clicks
        </Text>
        <Text style={onboardingStyles.desc}>
          Hundreds of restaurants with the best reviews are waiting for you.
        </Text>
        <Pressable style={onboardingStyles.button}>
          <Text style={onboardingStyles.buttonText}>Find a restaurant</Text>
        </Pressable>
      </View>
    </View>
  );
}
