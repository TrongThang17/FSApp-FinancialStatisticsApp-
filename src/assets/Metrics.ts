import {Dimensions} from 'react-native';
// import {isTablet} from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

export default {
  screen: {
    width,
    height,
  },
  // isTablet: isTablet(),
};

/*
  ### height / width
  IPhone 13 Pro Max                     926 / 428
  Iphone 12 Pro Max                     926 / 428
  Iphone XS Max / 11 Pro Max / 11       896 / 414
  Iphone 12 Pro / 12                    844 / 390
  Iphone 12 Mini / 11 Pro               812 / 375
  Iphone 6P / 7P / 8P                   736 / 414
  Iphone SE 2 / 6 / 6S / 7 / 8          667 / 375
  Iphone SE 1 / 5S / Ipod               568 / 320
  J3 2016 / J7 Prime                    640 / 360
  Custom phone                          737 / 392
  Nokia 5.1                             640 / 360.5
  A51                                   832 / 411
*/
