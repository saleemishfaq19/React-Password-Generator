Password Generator

A simple React application that generates random, customizable passwords. Built with React and styled with Tailwind CSS.

Features

- Generate random passwords instantly
- Adjustable password length (8 to 32 characters)
- Optional inclusion of numbers (0-9)
- Optional inclusion of special characters (!@#$%^&*(){}~`)
- One-click copy to clipboard
- Auto-regenerates whenever settings change

## Tech Stack

- React (Hooks: useState, useEffect, useCallback, useRef)
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd password-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── App.jsx        # Main component with password generator logic
│   ├── main.jsx       # React entry point
│   ├── index.css      # Global styles with Tailwind
│   └── App.css        # Component-specific styles
├── index.html
└── package.json
```

## How It Works

The app uses the `useCallback` hook to memoize the password generation function, which runs automatically via `useEffect` whenever the length, number, or character options change. The `useRef` hook provides direct DOM access to the input field for the copy-to-clipboard functionality.

### Key Hooks Used

- **useState**: Manages length, toggle states, and generated password
- **useCallback**: Memoizes the password generator to prevent unnecessary re-renders
- **useEffect**: Triggers password regeneration when dependencies change
- **useRef**: References the input element for selection and copy actions

## Usage

1. Adjust the slider to set your desired password length
2. Toggle the "Number" checkbox to include digits
3. Toggle the "Character" checkbox to include special symbols
4. Click "copy" to copy the generated password to your clipboard

## License

This project is open source and available under the MIT License.

---

Want me to save this as a `README.md` file in the project?