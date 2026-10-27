# React Weather Dashboard

A single-page React application that interfaces with the OpenWeatherMap REST API to display real-time weather metrics, local atmospheric conditions, and forecasts based on user search queries.

**Live Deployment:** https://react-weather-dashboard-swart.vercel.app

---

## Overview

The application allows users to search for cities globally and retrieve current meteorological data. It handles asynchronous API requests, parses JSON payloads, and conditionally renders components based on network states (loading, success, error).

### Key Features
- Real-time weather lookup using OpenWeatherMap Current Weather Data API.
- Displays core metrics: temperature, feels-like temperature, humidity, and wind speed.
- Dynamic UI changes reflecting weather conditions (clear, cloudy, rainy, snowy).
- Input validation and defensive error handling for invalid city queries or failed network requests.
- Fully responsive layout built with custom CSS flexbox/grid.

---

## Technical Stack

- **Frontend:** React.js (Hooks: `useState`, `useEffect`)
- **Styling:** CSS3 (Responsive Design)
- **Data Source:** OpenWeatherMap API
- **Deployment:** Vercel

---

## Project Structure

```text
src/
├── components/
│   ├── SearchBox.jsx     # Handles user input and search submissions
│   ├── WeatherCard.jsx   # Renders temperature, conditions, and icons
│   └── InfoBox.jsx       # Displays secondary metrics (humidity, wind)
├── App.jsx               # Top-level state and API coordination
├── index.css             # Layout and responsive styling
└── main.jsx              # React entry point

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gsreecharan/react-weather-dashboard.git
   cd react-weather-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your API key:
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Author

- **G. Sree Charan** — [GitHub](https://github.com/gsreecharan)
