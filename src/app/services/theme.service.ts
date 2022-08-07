import { Injectable } from '@angular/core';
import {
  BleachTheme,
  FateStayNightTheme,
  NarutoTheme,
  OnePieceTheme,
  Theme,
  VagabondTheme
} from "../../assets/interfaces/ThemeInterface";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme;
  // private availableThemes: Theme[] = [NarutoTheme, OnePieceTheme];

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
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
