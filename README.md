# Aradhye Swarup - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a full-stack developer. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Engaging animations and micro-interactions
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Detailed project presentations with live demos
- **Skills Timeline**: Visual representation of my journey
- **Dark/Light Mode**: Theme toggle functionality
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Custom component library with shadcn/ui
- **Email Service**: Formspree for contact form functionality
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
portfolio-new/
├── src/
│   ├── components/
│   │   ├── portfolio/     # Portfolio-specific components
│   │   └── ui/           # Reusable UI components
│   ├── assets/           # Images and static files
│   ├── lib/              # Utilities and services
│   └── pages/            # Page components
├── public/               # Public assets
└── docs/                 # Documentation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-new.git
   cd portfolio-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your Formspree endpoint
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 Contact Form Setup

The portfolio includes a functional contact form that sends emails directly to your inbox. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.

## 🎨 Customization

### Colors and Themes
- Update color schemes in `tailwind.config.ts`
- Modify theme variables in `src/index.css`

### Content
- Update personal information in component files
- Replace project images in `src/assets/project-previews/`
- Modify skills and timeline data

### Styling
- Customize animations in Framer Motion components
- Adjust responsive breakpoints in Tailwind classes
- Modify component styling in individual files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables

## 📊 Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Special thanks to the open-source community and the amazing tools that made this portfolio possible. The development process was enhanced with assistance from Lovable, helping to streamline the implementation of modern web development best practices and ensuring a polished user experience.

---

**Connect with me:**
- [LinkedIn](https://linkedin.com/in/aradhyeswarup)
- [GitHub](https://github.com/cjaradhye)
- [Email](mailto:aradhye.swarup@gmail.com)

*Built with ❤️ and modern web technologies*
