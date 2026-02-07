# Dead by Daylight Web App

A **React** web application showcasing the world of *Dead by Daylight*, displaying **characters, killers, survivors**, and **game-related news**. The website supports **multilanguage** (EN/ES) and follows a **Figma design prototype**.

---
🔗 **Repository:**  
https://github.com/Ixf2/Prototipe-DeadByDaylight
---
## 📸 Screenshots
### Home Page
![Home Screenshot](screenshots/home.png)

### Killers Page
![Killers Screenshot](screenshots/killers.png)

### Survivors Page
![Survivors Screenshot](screenshots/survivors.png)

## 📌 Features

- **Home Page**  
  Displays news and articles about DLCs and game updates, including images and descriptions.

- **Killers Section**  
  Showcases killers with cards containing name, image, and description.

- **Survivors Section** *(Coming Soon)*  
  Will follow the same structure as the Killers section.

- **Multilanguage Support**  
  Switch between English and Spanish using `react-i18next`.

- **Reusable Components**
  - Header & Footer
  - Card component for character information

- **Responsive Design**  
  Uses modular CSS and flexible layouts to ensure compatibility across devices.

---

## 📂 Project Structure
├── public

├── src

│   ├── components

│   │   ├── card

│   │   ├── footer

│   │   ├── form

│   │   ├── header

│   │   └── navbar

│   ├── data

│   │   ├── design_web

│   │   ├── images

│   │   │   ├── characters-killers

│   │   │   └── charactert-survivors

│   │   └── json

│   ├── i18n

│   └── pages

│       ├── Home

│       ├── killers

│       ├── legal

│       └── survivors

├── node_modules

└── package.json

---
### Folder Description

- `components/` → Reusable UI components
- `data/images/` → Character images
- `data/json/` → Character information
- `i18n/` → Language configuration files
- `pages/` → Main application pages

---

## ⚙️ Installation and Running

### 1️⃣ Clone the repository

```bash
git clone <REPOSITORY_URL>
cd project-name
```

### 2️⃣ Clone the repository
```bash
npm install
```

### 3️⃣ Run the project
```bash
npm run dev
```

### 4️⃣ Open in browser
```bash
http://localhost:5173
```

### 🌐 Multilanguage Support

This project uses i18next for translations.
*Example*
```
const { t, i18n } = useTranslation();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};
```
*Language Buttons*
```
<button onClick={() => changeLanguage('es')}>🇪🇸 ES</button>
<button onClick={() => changeLanguage('en')}>🇺🇸 EN</button>
```

### 🖼️ References and Resources
- Official Dead by Daylight Website

https://deadbydaylight.com/game/collections/

https://deadbydaylight.com/game/characters/

https://deadbydaylight.com/game/characters/vittorio-toscano/

- Figma Design Prototype

https://www.figma.com/design/x1uXyHXhOGhqXl0zr0RmNz/Design-Web-DBD

### 💻 Technologies
- React 18+

- React Router DOM

- react-i18next

- Vite

- CSS3

---


