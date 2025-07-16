# React Blog - Modern Stack with Atomic Design

A modern React blog application built with React 18, RSBuild, and Atomic Design architecture.

## 🚀 Technologies

- **React 18.3.1** - Latest React with concurrent features
- **RSBuild 1.0.12** - Fast build tool and dev server
- **React Router 6.26.2** - Client-side routing
- **Bootstrap 5.3.3** - Modern CSS framework  
- **Styled Components 6.1.13** - CSS-in-JS styling
- **Vitest** - Fast unit testing framework

## 🏗️ Architecture

This project follows **Atomic Design** principles for component organization:

### Component Structure

```
src/components/
├── atoms/           # Basic building blocks
│   ├── Title/       # PageTitle, PopularPostsTitle, LatestPostsTitle
│   └── Button/      # PrimaryButton, AsideButton
├── molecules/       # Combinations of atoms
│   ├── Card/        # ImageCard, HorizontalCard, ImageTitleCard, TransparentCard
│   ├── Pagination/  # PaginationStyled
│   └── SearchForm/  # SearchForm component
├── organisms/       # Complex UI sections
│   ├── Header/      # Navigation header
│   ├── Footer/      # Site footer
│   ├── Aside/       # Sidebar components
│   └── Section/     # Content sections
└── templates/       # Page layouts (for future use)
```

### Benefits of Atomic Design

- **Modularity**: Components are organized by complexity and reusability
- **Maintainability**: Clear separation of concerns
- **Scalability**: Easy to add new components following established patterns
- **Consistency**: Shared design tokens and patterns across the application
- **Reusability**: Atoms and molecules can be composed into different organisms

## 📦 Available Scripts

### Development
```bash
npm start          # Start development server at http://localhost:3000
npm run build      # Build for production to dist/ folder
npm run preview    # Preview production build
```

### Testing
```bash
npm test           # Run tests with Vitest
npm run test:ui    # Run tests with UI interface
```

### Deployment
```bash
npm run deploy     # Deploy to GitHub Pages
```

## 🔧 Development

The development server uses RSBuild for fast hot reload and modern development experience.

```bash
npm install        # Install dependencies
npm start         # Start development server
```

## 🏗️ Build System

This project uses **RSBuild** instead of Create React App for:
- ⚡ Faster build times
- 🔧 Modern tooling (Rspack)
- 🎯 Better tree shaking
- 📦 Smaller bundle sizes
- 🔄 Improved hot reload

## 📁 Project Structure

```
src/
├── components/     # Atomic Design components
├── pages/         # Page components  
├── assets/        # Static assets
├── functions/     # Utility functions
├── styles.js      # Global styles
├── routes.js      # Application routing
└── App.js        # Main application component
```

## 🎨 Styling

The project uses a combination of:
- **Bootstrap 5** for layout and utilities
- **Styled Components** for custom component styling
- **CSS-in-JS** for dynamic styling

## 🌐 Deployment

The project is configured for deployment to GitHub Pages:

```bash
npm run build     # Build the project
npm run deploy    # Deploy to GitHub Pages
```

## 📸 Preview

![Blog Homepage](https://github.com/user-attachments/assets/e7cb9e76-9304-4aed-875a-54b5cbc4c9fc)

## 🔄 Migration Notes

This project has been migrated from:
- React 16.13.1 → 18.3.1
- Create React App → RSBuild
- React Router 5 → 6
- Old component structure → Atomic Design

All modern React patterns and best practices have been implemented.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
