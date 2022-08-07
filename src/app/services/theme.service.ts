import { Injectable } from '@angular/core';
import {
  BleachTheme,
  FateStayNightTheme,
  NarutoTheme,
  OnePieceTheme,
  Theme,
  VagabondTheme
} from "../../assets/type-script/interfaces/ThemeInterface";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _active: Theme;
  // private availableThemes: Theme[] = [NarutoTheme, OnePieceTheme];

  get active(){
    return this._active;
  }

  constructor() { }

  setNarutoTheme() {
    this.setActiveTheme(NarutoTheme);
  }

  setOnePieceTheme() {
    this.setActiveTheme(OnePieceTheme);
  }

  setBleachTheme() {
    this.setActiveTheme(BleachTheme);
  }

  setVagabondTheme() {
    this.setActiveTheme(VagabondTheme);
  }

  setFateStayNightTheme() {
    this.setActiveTheme(FateStayNightTheme);
  }

  setActiveTheme(theme: Theme): void {
    this._active = theme;

    Object.keys(this._active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this._active.properties[property]
      );
    });
  }
}
