import {Dimensions, StyleSheet} from 'react-native';

export const onboardingStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width + 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  emblem: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    color: '#ffffff',
    position: 'absolute',
    zIndex: 5,
    top: 20,
    left: 20,
  },
  subject: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '600',
    color: '#373737',
  },
  desc: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
    color: '#373737',
  },
  button: {
    backgroundColor: '#067164',
    width: 'auto',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
});
