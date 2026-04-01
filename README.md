# Task Manager - Professional To-Do List Application

A modern, feature-rich React-based task management application with a professional monochrome design.

## Features

**Core Functionality**
-  Create new tasks
-  Edit existing tasks
-  Delete tasks
-  Mark tasks as completed
-  Real-time statistics dashboard

**Design**
- Professional monochrome theme
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Modern gradient accents
- Accessible UI components

**Technology Stack**
- React 18.2.0
- ES6+ JavaScript
- CSS3 with Flexbox & Grid
- React Hooks (useState)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── TodoForm.js       # Task input form component
│   ├── TodoItem.js       # Individual task component
│   └── TodoList.js       # Task list container component
├── App.js                # Main application component
├── App.css               # Application styling
├── index.js              # React entry point
└── index.css             # Global styles
```

## Component Architecture

### App.js (Main)
- State management for tasks and editing
- Statistics calculation
- Event handlers delegation

### TodoForm.js
- Handles task input
- Form submission
- Input validation

### TodoList.js
- Separates pending and completed tasks
- Maps tasks to TodoItem components

### TodoItem.js
- Individual task rendering
- Edit/Delete/Complete actions
- Inline editing mode

## Learning Outcomes Achieved

**React Component Structure**
- Functional components
- Component composition
- Props passing

**State Management**
- useState hook
- Multiple state updates
- State immutability

**Event Handling**
- onClick events
- onChange events
- Form submission handling

**Array Operations**
- map() for rendering
- filter() for categorization
- Spread operator for updates

**Conditional Rendering**
- Ternary operators
- CSS class toggling
- Component visibility

**CSS Mastery**
- Gradient backgrounds
- Flexbox layouts
- Grid layouts
- Responsive design
- Transitions & animations

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production.

### `npm test`
Launches the test runner.

## Styling Details

### Color Palette (Monochrome)
- **Primary Dark**: #1a1a1a
- **Primary Gray**: #2c2c2c
- **Light Gray**: #f5f5f5
- **Light Surface**: #ffffff
- **Border Gray**: #d0d0d0

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Headings: Bold, letter-spaced
- Body: Regular weight, readable line-height

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Local storage persistence
- Search functionality
- Task categories/tags
- Task deadlines
- Dark mode toggle
-  Progressive Web App

## License

This project is open source and available under the MIT License.

## Author

## Assignment Information


**Title:** To-Do List Application (React JS)

## Author

Eissa Iqbal
