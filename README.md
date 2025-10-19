# JSON Viewer 🧩

A beautiful, modern JSON parser and formatter built with React. Parse, validate, and format your JSON with an intuitive dark-themed interface featuring animated gradients and smooth interactions.

![JSON Viewer](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

- **Real-time JSON Parsing** - Instantly parse and format your JSON
- **Error Detection** - Clear error messages when JSON is invalid
- **Beautiful Dark UI** - Animated gradient background with dark blues, blacks, and greenish tones
- **Side-by-Side Layout** - Input on the left, formatted output on the right
- **One-Click Copy** - Copy formatted JSON to clipboard with visual feedback
- **Syntax Highlighting** - Color-coded output for better readability
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Glassmorphism Effects** - Modern UI with backdrop blur and transparency

## 🚀 Demo

[Live Demo](https://ayuboketch.github.io/json-viewer/)

## 📸 Screenshots

<img width="1637" height="837" alt="Screenshot 2025-10-19 at 15 20 20" src="https://github.com/user-attachments/assets/454a46d0-44c2-4529-8516-4470c542e652" />

## 🛠️ Technologies Used

- **React** - Frontend framework
- **CSS3** - Styling with animations and glassmorphism
- **JavaScript ES6+** - Modern JavaScript features
- **Clipboard API** - Copy to clipboard functionality

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/json-viewer.git
cd json-viewer
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

## 🎯 Usage

1. **Paste your JSON** into the input field on the left
2. **Click "Parse JSON"** to validate and format
3. **View the formatted output** on the right side
4. **Click "Copy"** to copy the formatted JSON to your clipboard
5. If there's an error, you'll see a detailed error message

### Example Input:
```json
{"name":"John","age":30,"city":"New York"}
```

### Example Output:
```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

## 📁 Project Structure

```
json-viewer/
├── public/
├── src/
│   ├── App.js          # Main component
│   ├── App.css         # Styling and animations
│   ├── parserLogic.js  # JSON parsing logic
│   └── index.js        # Entry point
├── package.json
└── README.md
```

## 🎨 Features in Detail

### Animated Background
The background features a dynamic gradient that shifts between dark blues, blacks, and greenish tones, creating a modern and engaging visual experience.

### Error Handling
When invalid JSON is detected, the app provides clear error messages that help users identify and fix issues like:
- Missing commas
- Unclosed brackets
- Invalid quotes
- Syntax errors

### Copy Functionality
The copy button provides instant visual feedback, changing to "✓ Copied!" for 2 seconds after successfully copying to clipboard.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Minify JSON option
- [ ] Download formatted JSON as file
- [ ] Syntax highlighting with line numbers
- [ ] Dark/Light theme toggle
- [ ] JSON tree view
- [ ] Compare two JSON objects
- [ ] Validate against JSON Schema

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@ayuboketch](https://github.com/yourusername)
- LinkedIn: [Ayub Oketch](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Inspired by modern JSON viewing tools
- Built with Create React App
- Design inspired by glassmorphism and dark UI trends

---

⭐ If you found this project helpful, please give it a star!
