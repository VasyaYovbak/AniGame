import {Injectable} from '@angular/core';
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
  set active(value: Theme) {
    this._active = value;
  }
  private _active: Theme;
  private _availableThemes: Theme[] = [NarutoTheme, OnePieceTheme, FateStayNightTheme, BleachTheme, VagabondTheme];

  get active() {
    return this._active;
  }

  get availableThemes(){
    return this._availableThemes;
  }

  constructor() {
  }

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
