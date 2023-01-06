export interface Theme {
  name: string;
  properties: any;
}

export const NarutoTheme: Theme = {
  name: "NarutoTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/naruto-and-sasuke.png) no-repeat fixed center 0',
    "--primary-button-background": "rgb(177, 27, 62)",
    "--primary-button-text-color": '#ffffff',

    // navigation
    "--themes-text-color": "#ffffff",
    "--profile-icon-color": "#ffffff",
    "--flame-hair-color": "#9b00b8",

    // home images
    "--home-fight-icon-name": "naruto-fight-scene",
    "--home-achievement-icon-name": "naruto-achievement",
    "--home-lore-icon-name": "naruto-lore",

    "--home-header-text-color": '#ffe2e2',
    "--home-header-text-stroke-width": "",
    "--home-header-text-stroke-color": "",

    "--home-button-background": 'rgb(177, 27, 62)',
    "--home-button-text-color": '#ffffff',
    "--home-button-opacity": 0.7,
    "--home-button-hover-opacity": 1,

    "--home-card-image-texts-font-family": "",
    "--home-card-image-text-color": "#ffffff",
    "--home-card-image-text-stroke-width": "",
    "--home-card-image-text-stroke-color": "",

    "--home-card-image-describe-text-color": "#ffffff",
    "--home-card-image-describe-text-stroke-width": "",
    "--home-card-image-describe-text-stroke-color": "",
    // "theme-color-1": "rgb(177, 27, 62)" // add alike variables later on

    // login page:
    "--login-button-background": "rgb(177, 27, 62)",
    "--login-button-text-color": '#ffffff',
    "--login-button-opacity": 0.8,
    "--login-button-hover-opacity": 1,

    // rooms page:
    "--rooms-button-opacity": 0.9,
    "--rooms-button-hover-opacity": 1,

    // profile page:
    "--profile-button-opacity": 0.9,
    "--profile-button-hover-opacity": 1,

    // line charts:
    "--chart-line-color": "#9b00b8",
    "--chart-point-color": "rgb(177, 27, 62)",
    "--chart-point-border-color": "rgb(177, 27, 62)",
    "--chart-point-hover-color": "#000000",
  }
};

export const BleachTheme: Theme = {
  name: "BleachTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/bleach.png) no-repeat fixed center 0',
    "--primary-button-background": "#3A3331",
    "--primary-button-text-color": '#ffffff',

    // navigation
    "--themes-text-color": "#000000",
    "--profile-icon-color": "#000000",
    "--flame-hair-color": "#f19218",

    // home images
    "--home-fight-icon-name": "bleach-fight-scene",
    "--home-achievement-icon-name": "bleach-achievement",
    "--home-lore-icon-name": "bleach-lore",

    "--home-header-text-color": '#ffffff',
    "--home-header-text-stroke-width": "1px",
    "--home-header-text-stroke-color": "#000000",

    "--home-button-background": "#3A3331",
    "--home-button-text-color": '#ffffff',
    "--home-button-opacity": 0.9,
    "--home-button-hover-opacity": 1,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#ffffff",
    "--home-card-image-text-stroke-width": "1px",
    "--home-card-image-text-stroke-color": "#3A3331",


    "--home-card-image-describe-text-color": "#ffffff",
    "--home-card-image-describe-text-stroke-width": "1px",
    "--home-card-image-describe-text-stroke-color": "#3A3331",

    "--navigation-text-color": "#ffffff",
    // login page:
    "--login-button-background": "#3A3331",
    "--login-button-text-color": '#ffffff',
    "--login-button-opacity": 0.8,
    "--login-button-hover-opacity": 1,

    // rooms page:
    "--rooms-button-opacity": 0.95,
    "--rooms-button-hover-opacity": 1,

    // profile page:
    "--profile-button-opacity": 0.85,
    "--profile-button-hover-opacity": 1,

    // line charts:
    "--chart-line-color": "#f19218",
    "--chart-point-color": "#000000",
    "--chart-point-border-color": "#ffffff",
    "--chart-point-hover-color": "#f19218",
  }
};

export const OnePieceTheme: Theme = {
  name: "OnePieceTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/one-piece.jpg) no-repeat fixed center 0',
    "--primary-button-background": "#891211",
    "--primary-button-text-color": '#ffffff',

    // navigation
    "--themes-text-color": "#f0e8d3",
    "--profile-icon-color": "#f0e8d3",
    "--flame-hair-color": "#a40e04",

    // home images
    "--home-fight-icon-name": "one-piece-fight-scene",
    "--home-achievement-icon-name": "one-piece-achievement",
    "--home-lore-icon-name": "one-piece-lore",

    "--home-header-text-color": '#F0E8D3',
    "--home-header-text-stroke-width": "1px",
    "--home-header-text-stroke-color": "#000000",

    "--home-button-background": "#891211",
    "--home-button-text-color": '#ffffff',
    "--home-button-opacity": 0.7,
    "--home-button-hover-opacity": 0.9,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#F0E8D3",
    "--home-card-image-text-stroke-width": "0.5px",
    "--home-card-image-text-stroke-color": "#3A3331",


    "--home-card-image-describe-text-color": "#F0E8D3",
    "--home-card-image-describe-text-stroke-width": "0.5px",
    "--home-card-image-describe-text-stroke-color": "#3A3331",

    "--navigation-text-color": "#ffffff",
    // login page:
    "--login-button-background": "#891211",
    "--login-button-text-color": '#ffffff',
    "--login-button-opacity": 0.9,
    "--login-button-hover-opacity": 1,

    // rooms page:
    "--rooms-button-opacity": 0.9,
    "--rooms-button-hover-opacity": 1,

    // profile page:
    "--profile-button-opacity": 0.8,
    "--profile-button-hover-opacity": 1,

    // line charts:
    "--chart-line-color": "#891211",
    "--chart-point-color": "#ffffff",
    "--chart-point-border-color": "#891211",
    "--chart-point-hover-color": "#e7b638",
  }
};


export const VagabondTheme: Theme = {
  name: "VagabondTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/vagabond.jpg) no-repeat fixed center 0',
    "--primary-button-background": "#27336F",
    "--primary-button-text-color": '#ffffff',

    // navigation
    "--themes-text-color": "#ffffff",
    "--profile-icon-color": "#ffffff",
    "--flame-hair-color": "#18A5FE",

    // home images
    "--home-fight-icon-name": "vagabond-fight-scene",
    "--home-achievement-icon-name": "vagabond-achievement",
    "--home-lore-icon-name": "vagabond-lore",

    "--home-header-text-color": '#000000',
    "--home-header-text-stroke-width": "0.1px",
    "--home-header-text-stroke-color": "#ffffff",

    "--home-button-background": "#27336F",
    "--home-button-text-color": '#ffffff',
    "--home-button-opacity": 0.7,
    "--home-button-hover-opacity": 0.9,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#000000",
    "--home-card-image-text-stroke-width": "0.15px",
    "--home-card-image-text-stroke-color": "#ffffff",

    "--home-card-image-describe-text-color": "#000000",
    "--home-card-image-describe-text-stroke-width": "0.2px",
    "--home-card-image-describe-text-stroke-color": "#ffffff",

    "--navigation-text-color": "#ffffff",

    // login page:
    "--login-button-background": "#27336F",
    "--login-button-text-color": '#ffffff',
    "--login-button-opacity": 0.7,
    "--login-button-hover-opacity": 1,

    // rooms page:
    "--rooms-button-opacity": 0.9,
    "--rooms-button-hover-opacity": 1,

    // profile page:
    "--profile-button-opacity": 0.9,
    "--profile-button-hover-opacity": 1,

    // line charts:
    "--chart-line-color": "#18A5FE",
    "--chart-point-color": "#ffffff",
    "--chart-point-border-color": "#27336F",
    "--chart-point-hover-color": "#ffffff",
  }
};

export const FateStayNightTheme: Theme = {
  name: "FateStayNightTheme",
  properties: {
    "--primary-image": 'url(assets/primary-images/fate-stay-night.jpg) no-repeat fixed center 0',
    "--primary-button-background": "#dfe0ba",
    "--primary-button-text-color": '#000000',
    // navigation
    "--themes-text-color": "#ffffff",
    "--profile-icon-color": "#ffffff",
    "--flame-hair-color": "#ea5104",

    // home page:

    // home images
    "--home-fight-icon-name": "fate-stay-night-fight-scene",
    "--home-achievement-icon-name": "fate-stay-night-achievement",
    "--home-lore-icon-name": "fate-stay-night-lore",

    "--home-header-text-color": "#f4f5c2",
    "--home-header-text-stroke-width": "1px",
    "--home-header-text-stroke-color": "#000000",

    "--home-button-background": "#dfe0ba",
    "--home-button-text-color": '#000000',
    "--home-button-opacity": 0.6,
    "--home-button-hover-opacity": 0.9,

    "--home-card-image-texts-font-family": "Fredoka One, fantasy",
    "--home-card-image-text-color": "#e3e4bc",
    "--home-card-image-text-stroke-width": "0.5px",
    "--home-card-image-text-stroke-color": "#000000",

    "--home-card-image-describe-text-color": "#dfe0ba",
    "--home-card-image-describe-text-stroke-width": "0.5px",
    "--home-card-image-describe-text-stroke-color": "#000000",

    "--navigation-text-color": "#ffffff",

    // login page:
    "--login-button-background": "#ff5a00",
    "--login-button-text-color": '#ffffff',
    "--login-button-opacity": 0.8,
    "--login-button-hover-opacity": 1,

    // rooms page:
    "--rooms-button-opacity": 0.9,
    "--rooms-button-hover-opacity": 1,

    // profile page:
    "--profile-button-opacity": 0.8,
    "--profile-button-hover-opacity": 1,

    // line charts:
    "--chart-line-color": "#ff5a00",
    "--chart-point-color": "#f4f5c2",
    "--chart-point-border-color": "#f4f5c2",
    "--chart-point-hover-color": "#000000",
  }
};

