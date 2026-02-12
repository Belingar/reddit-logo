# Reddit Clone — Logo z uporabo Canvas in SVG

[![Licenca: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Projekt, navdihnjen z Redditom, ki prikazuje dve metodi za risanje logotipa: **Canvas** in **SVG**.  
To skladišče prikazuje, kako implementirati Redditov logotip dinamično z uporabo HTML5 `<canvas>` in statično z vgrajenim `<svg>`, ob ohranjanju odzivnosti in celovitosti postavitve.

---

## 📌 Kazalo vsebine

- index.html
- css/
  -style.css
  -logo.svg
- images/
  -reddit-logo.png
- javascript/
  -reddit-logo.js
  -logo.svg
  -script.js


---

## 📸 Demo

> Reddit podobna postavitev glave z možnostmi za risanje logotipa.

*Canvas risanje: dinamično in s pomočjo skripte*  
*SVG risanje: odzivno, dostopno in enostavno za stilizacijo s CSS*

---

## 🚀 Značilnosti

Projekt prikazuje izris Reddit z uporabo Bezierjevih krivulj v jeziku HTML5.
Logotip je izdelan na dva različna načina:

🔹z uporabo HTML5 Canvas API-ja in funkcije bezierCurveTo()
🔹z uporabo SVG grafike (<svg> in <path>)

---

## Tehnologije
🔹HTML5
  -<canvas>
  -<svg>
🔹JavaScript
  -bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

## 🛠️ Začetek

Sledite tem korakom, da zaženete projekt lokalno.

### 📋 Pogoji

Poskrbite, da imate sodoben spletni brskalnik:
- Chrome, Firefox, Safari, Edge

⚠️ Ni potrebno nameščati dodatnih knjižnic ali gradbenih orodij.

---

### ⬇️ Namestitev

1. Klonirajte skladišče:
    ```bash
    git clone https://github.com/your-username/reddit-clone.git
    ```

2. Pojdite v mapo projekta:
    ```bash
    cd reddit-clone
    ```

3. Odprite `index.html` v vašem brskalniku:
    ```bash
    open index.html
    ```

ALI uporabite lokalni strežnik, če želite:
```bash
npm install -g http-server
http-server .
