
export interface Theme {
  name: string;
  properties: any;
}

export const NarutoTheme: Theme = {
  name: "NarutoTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/naruto-and-sasuke.png) no-repeat fixed center 0',
    "--home-header-text-color": '#ffe2e2',
    "--home-header-text-stroke-width": "",
    "--home-header-text-stroke-color": "",

    "--home-button-background": 'rgb(177, 27, 62)',
    "--home-button-text-color": 'white',
    "--home-button-opacity": 0.7,
    "--home-button-hover-opacity": 1,

    "--home-card-image-texts-font-family": "",
    "--home-card-image-text-color": "#ffffff",
    "--home-card-image-text-stroke-width": "",
    "--home-card-image-text-stroke-color": "",

    "--home-card-image-describe-text-color": "#ffffff",
    "--home-card-image-describe-text-stroke-width": "",
    "--home-card-image-describe-text-stroke-color": "",

    "theme-color-1": "rgb(177, 27, 62)", // get from variables later

    // "--home-button-color-gradient": "linear-gradient(to right, $saske-aura, $red-background, $naruto-aura)",
  }
};

export const BleachTheme: Theme = {
  name: "BleachTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/bleach.png) no-repeat fixed center 0',
    "--home-header-text-color": '#ffffff',
    "--home-header-text-stroke-width": "1px",
    "--home-header-text-stroke-color": "#000000",

    "--home-button-background": "#3A3331",
    "--home-button-text-color": 'white',
    "--home-button-opacity": 0.9,
    "--home-button-hover-opacity": 1,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#ffffff",
    "--home-card-image-text-stroke-width": "1px",
    "--home-card-image-text-stroke-color": "#3A3331",


    "--home-card-image-describe-text-color": "#ffffff",
    "--home-card-image-describe-text-stroke-width": "1px",
    "--home-card-image-describe-text-stroke-color": "#3A3331",
  }
};

export const OnePieceTheme: Theme = {
  name: "OnePieceTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/one-piece.jpg) no-repeat fixed center 0',
    "--home-header-text-color": '#F0E8D3',
    "--home-header-text-stroke-width": "1px",
    "--home-header-text-stroke-color": "#000000",

    "--home-button-background": "#891211",
    "--home-button-text-color": 'white',
    "--home-button-opacity": 0.7,
    "--home-button-hover-opacity": 0.9,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#F0E8D3",
    "--home-card-image-text-stroke-width": "0.5px",
    "--home-card-image-text-stroke-color": "#3A3331",


    "--home-card-image-describe-text-color": "#F0E8D3",
    "--home-card-image-describe-text-stroke-width": "0.5px",
    "--home-card-image-describe-text-stroke-color": "#3A3331",
  }
};


export const VagabondTheme: Theme = {
  name: "VagabondTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/vagabond.jpg) no-repeat fixed center 0',
    "--home-header-text-color": '#000000',
    "--home-header-text-stroke-width": "0.1px",
    "--home-header-text-stroke-color": "#ffffff",

    "--home-button-background": "#27336F",
    "--home-button-text-color": 'white',
    "--home-button-opacity": 0.7,
    "--home-button-hover-opacity": 0.9,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#000000",
    "--home-card-image-text-stroke-width": "0.15px",
    "--home-card-image-text-stroke-color": "#ffffff",


    "--home-card-image-describe-text-color": "#000000",
    "--home-card-image-describe-text-stroke-width": "0.2px",
    "--home-card-image-describe-text-stroke-color": "#ffffff",
  }
};

export const FateStayNightTheme: Theme = {
  name: "FateStayNightTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/fate-stay-night.jpg) no-repeat fixed center 0',
    "--home-header-text-color": "",//"#f4f5c2",//"#000000",//"#CC533E",//"#d5d5d7",//"#95957c",//"#2d2d25",//'#000000',//"#C4B8BE",//"#8EB9E3",//'#C3BDBF',
    "--home-header-text-stroke-width": "1px",
    "--home-header-text-stroke-color": "#000000",

    "--home-button-background": "#dfe0ba",
    "--home-button-text-color": '#000000',
    "--home-button-opacity": 0.6,
    "--home-button-hover-opacity": 0.9,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#e3e4bc",//"#f4f5c2",
    "--home-card-image-text-stroke-width": "0.5px",
    "--home-card-image-text-stroke-color": "#000000",


    "--home-card-image-describe-text-color": "#dfe0ba",
    "--home-card-image-describe-text-stroke-width": "0.5px",
    "--home-card-image-describe-text-stroke-color": "#000000",
  }
};

