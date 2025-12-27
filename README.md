# 🚧 UNDER CONSTRUCTION: Movie Search Engine Prototype

Welcome to the **Movie Search Engine** project! Our team is actively developing a high-performance, responsive web application for exploring The Movie Database (TMDB).

### 🔗 Live Demo Site
The interface is being updated in real-time. You can track our progress here:
[**VIEW LIVE DEMO**](https://karolina-kulpinska.github.io/deathly-hallows-project/)

---

## 🖼️ Interface Preview

<p align="center">
  <img src="public/image/movies.png" width="32%" alt="Movies Desktop View" />
  <img src="public/image/people.png" width="32%" alt="People Desktop View" />
  <img src="public/image/pagination.png" width="32%" alt="Mobile View" />
</p>

*(Note: Replace the image paths above with your actual file names from the `public` folder to display them correctly.)*

---

## 🏗️ Project Progress & Current Status

We are currently focusing on building a rock-solid logic engine and a seamless user experience.

### 1. 🧠 Core Logic & Optimization (Completed)
* **Intelligent Debouncing:** API calls are delayed by 500ms to reduce server load and improve user experience while typing.
* **State Management:** Powered by **Redux Toolkit** for predictable state and **Redux-Saga** for handling complex asynchronous flows.
* **Secure API Connection:** Stable integration with TMDB using Access Token V4 via Authorization headers.

### 2. 📑 Advanced Pagination System (Completed)
* Full navigation support: **First, Previous, Next, and Last** page buttons.
* **Safety Guard:** Implemented logic to cap results at 500 pages, preventing technical errors from the TMDB API.
* **Mobile Responsiveness:** Pagination labels automatically hide on small screens, displaying only intuitive SVG icons.
* **Grid Alignment:** Centered layout using `grid-column: 1 / -1` for a clean look.

### 3. 👥 Movie & People Modules (In Progress)
* Dynamic lists for Popular Movies and Popular People.
* Comprehensive Loading and Error states (handling 404s and API downtime).
* Context-aware search engine that switches logic based on the active tab.

---

## 🔜 Next Steps
- [ ] Development of detailed Single Movie and Single Person pages.
- [ ] Final polishing of UI tiles and hover effects.
- [ ] Performance optimization and accessibility (a11y) audit.

## 🛠️ Tech Stack
* **React 18** (Hooks, Router)
* **Redux Toolkit & Redux-Saga**
* **Styled-Components** (ThemeProvider)
* **Axios** (API communication)