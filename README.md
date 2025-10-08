# William Saunderson - Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS for William Saunderson, a Software Engineering student at Belgium Campus ITVersity.

## 🚀 Features

- **Modern Design**: Clean, professional design with subtle blue/gray/white color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Interactive elements with Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Fast Loading**: Optimized images and performance

## 📱 Sections

- **Hero Section**: Professional introduction with call-to-action
- **About**: Personal story, education, and interests
- **Skills**: Programming languages, tools, and competencies
- **Projects**: Showcase of 6 academic and personal projects
- **Experience**: Leadership roles and achievements
- **Contact**: Contact form and social links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for social media and UI elements

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd william-saunderson-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Option 1: Deploy to Netlify

1. Build the project
   ```bash
   npm run build
   ```

2. Deploy to Netlify
   - Drag and drop the `build` folder to [Netlify](https://netlify.com)
   - Or connect your GitHub repository for automatic deployments

### Option 2: Deploy to Vercel

1. Install Vercel CLI
   ```bash
   npm i -g vercel
   ```

2. Deploy
   ```bash
   vercel
   ```

### Option 3: Deploy to GitHub Pages

1. Install gh-pages
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json
   ```json
   "homepage": "https://yourusername.github.io/william-saunderson-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
william-saunderson-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal details (name, email, phone)
- Social media links
- Education history
- Skills and technologies
- Projects showcase
- Experience and achievements

### Modify Colors

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... other shades
  }
}
```

### Add New Projects

Add new projects to the `projects` array in `portfolioData.js`:
```javascript
{
  title: "Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/username/project",
  demoUrl: "https://project-demo.netlify.app",
  image: "https://images.unsplash.com/..."
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Mobile First**: Optimized for mobile devices
- **Image Optimization**: Compressed images for faster loading
- **Code Splitting**: Automatic code splitting with React

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: liamsaunderson2004@gmail.com
- **Phone**: +27 67 041 1937
- **LinkedIn**: [William Saunderson](https://www.linkedin.com/in/william-saunderson-84427b292/)
- **GitHub**: [3Po1nt](https://github.com/3Po1nt)

---

**Built with ❤️ by William Saunderson**