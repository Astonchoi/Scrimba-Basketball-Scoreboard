# Basketball Scoreboard

A simple, interactive basketball scoreboard web application from Scrimba that allows you to track scores for two teams (HOME and GUEST) with a fun confetti celebration when a team reaches 10 points.

## Features

- **Score Tracking**: Add 1, 2, or 3 points to either team's score
- **Visual Design**: Dark blue theme with a retro scoreboard aesthetic
- **Custom Font**: Uses the CursedTimer font for an authentic scoreboard look
- **Confetti Celebration**: Automatic confetti animation when a team reaches 10 points
- **New Game**: Reset both scores to start a fresh game

## How to Use

1. Open `index.html` in your web browser
2. Click the `+1`, `+2`, or `+3` buttons to add points to the respective team
3. When a team reaches 10 points, a confetti celebration will automatically trigger
4. Click the "new game" button to reset both scores to 0

## Project Structure

```
Scrim-s04k019/
├── index.html          # Main HTML structure
├── index.css           # Styling and layout
├── index.js            # Score tracking and confetti logic
├── CursedTimerUlil-Aznm.ttf  # Custom scoreboard font
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling with custom fonts and animations
- **JavaScript**: Score tracking and interactivity
- **tsparticles/confetti**: Confetti animation library (loaded via CDN)

## Browser Compatibility

Works in all modern web browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- Custom fonts (@font-face)
