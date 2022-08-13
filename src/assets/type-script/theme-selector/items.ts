import {OptionState} from "src/app/components/circle-selector/circle-selector.models";

const Naruto: OptionState = {
  name: "Naruto",
  data: {
    img: '../../assets/themes/naruto/theme-selector.jpeg',
    imagePositionX: 45,
    imagePositionY: 100,
    backgroundSize: 25
  }
}

const Bleach: OptionState = {
  name: "Bleach",
  data: {
    img: '../../assets/themes/bleach/theme-selector.jpeg',
    imagePositionX: 3,
    imagePositionY: -15,
    backgroundSize: 31,
    imageRotateDeg: -10
  }
}

const OnePiece: OptionState = {
  name: "OnePiece",
  data: {
    img: '../../assets/themes/one-piece/theme-selector.jpeg',
    imagePositionX: 48,
    imagePositionY: -2,
    backgroundSize: 25,
    imageRotateDeg: -13
  }
}

const Vagabond: OptionState = {
  name: "Vagabond",
  data: {
    img: '../../assets/themes/vagabond/theme-selector.jpeg',
    imagePositionX: 4,
    imagePositionY: -8,
    backgroundSize: 30,
    imageRotateDeg: -11
  }
}

const FateStay: OptionState = {
  name: "FateStayNight",
  data: {
    img: '../../assets/themes/fate-stay-night/theme-selector.jpeg',
    imagePositionY: -14,
    backgroundSize: 31,
    imageRotateDeg: -3
  }
}

export const ThemeStates = [Naruto, Bleach, OnePiece, Vagabond, FateStay];
