# Minim Theme

A minimal Drupal 11 base theme utilizing the Minim CSS framework with atomic design principles and modern build tools.

## 🎨 Overview

Minim is a lightweight, component-based Drupal theme that emphasizes clean design and developer experience. Built with atomic design methodology and powered by PostCSS for modern CSS development.

### Key Features

- **Atomic Design Architecture** - Organized component structure from atoms to organisms
- **Modern CSS Build Pipeline** - PostCSS with Lightning CSS for optimal performance  
- **Component-First Development** - Utilizes Drupal's Single Directory Components (SDC)
- **Minimal Dependencies** - Clean, lightweight foundation
- **Drupal 11 Compatible** - Built for the latest Drupal core

## 🏗️ Architecture

### Atomic Design Structure

```
source/
├── 00-core/          # Core styles and Minim CSS framework
│   ├── _minim.css/   # External Minim CSS framework
│   └── nucleus/      # Base styles and variables
├── 01-atoms/         # Basic building blocks (buttons, inputs, labels)
├── 02-molecules/     # Simple groups of atoms
├── 03-organisms/     # Complex components
├── 04-symbiosis/     # Layout components
└── 05-synergy/       # Page-level templates
```

### Theme Regions

- **Branding** - Site logo and branding elements
- **Navigation** - Main navigation menu
- **Focus** - Featured content area
- **Hero** - Hero banner section
- **Highlight** - Highlighted content
- **Content** - Main content area
- **Sidebar** - Sidebar content
- **Footer** - Footer content
- **Buffer** - Additional content buffer

## 🚀 Installation

### Prerequisites

- Drupal 11 with Components module
- Git (for cloning dependencies)
- Node.js 23+ (auto-installed via NVM, or manual installation)

### One-Command Installation

The theme includes an automated installation script that handles everything:

```bash
cd web/themes/custom/minim
bash install.sh
```

**What the script does:**
- 🔍 Validates you're in the correct directory
- 📦 Clones the Minim CSS framework (if not already present)
- ⚙️ Sets up Node.js 23 (via NVM if available, otherwise checks system)
- 📦 Installs all npm dependencies
- 🔨 Builds theme assets
- ✅ Provides next steps for theme activation

### Enable Theme in Drupal

After installation, activate the theme:

```bash
drush theme:enable minim
drush config:set system.theme default minim
```

### Manual Installation (Alternative)

If you prefer manual setup or the script fails:

1. **Install Node.js (if needed):**
   ```bash
   # With NVM (recommended)
   nvm install 23 && nvm use 23
   
   # Or download from https://nodejs.org/
   ```

2. **Clone Minim CSS framework:**
   ```bash
   git clone https://github.com/michaelpadiernos/minim.css.git ./source/00-core/_minim.css
   ```

3. **Install dependencies and build:**
   ```bash
   npm install
   npm run run
   ```

### Troubleshooting Installation

If you encounter issues:

```bash
# Make script executable
chmod +x install.sh

# Run with bash explicitly
bash install.sh

# Install Gulp CLI globally if needed
npm install -g gulp-cli

# Check Node.js version
node --version  # Should be 23+
```

## 🛠️ Development

### Build Process

The theme uses Gulp with PostCSS for processing styles and JavaScript:

```bash
# One-time build
npm run run
# or
gulp run

# Type check + build (recommended for development)
npm run build

# Type checking only
npm run type-check

# Watch for changes during development
gulp watch

# Default task (build + watch)
gulp
```

### PostCSS Plugins

The build pipeline includes:

- **Lightning CSS** - Fast CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixes
- **CSS Nano** - CSS minification
- **PostCSS Nesting** - CSS nesting support
- **PostCSS Mixins** - Reusable CSS mixins
- **Custom Properties** - CSS custom properties support
- **Font Magician** - Automatic font loading
- **Brand Colors** - Predefined brand color palette

### File Structure

```
minim/
├── assets/
│   ├── css/
│   │   ├── minim.theme.css     # Compiled CSS
│   │   └── minim.theme.css.map # Source map
│   └── js/
│       └── minim.theme.js      # Compiled JavaScript
├── source/
│   ├── minim.source.css        # Main CSS entry point
│   ├── minim.source.js         # Main JS entry point
│   └── [atomic structure]/
├── minim.info.yml              # Theme definition
├── minim.libraries.yml         # Asset libraries
├── gulpfile.js                 # Build configuration
└── package.json                # Dependencies
```

### Component Development

Create new components following atomic design principles:

1. **Atoms** (`01-atoms/`) - Basic elements like buttons, inputs
2. **Molecules** (`02-molecules/`) - Simple component groups
3. **Organisms** (`03-organisms/`) - Complex UI sections
4. **Symbiosis** (`04-symbiosis/`) - Layout components
5. **Synergy** (`05-synergy/`) - Page templates

Each component should include:
- CSS styles
- Twig templates (if applicable)
- Component definition files

### CSS Development

The theme uses modern CSS features:

```css
/* Custom properties */
:root {
  --primary-color: #007acc;
  --font-size-base: 1rem;
}

/* Nesting support */
.component {
  color: var(--primary-color);
  
  &:hover {
    opacity: 0.8;
  }
  
  &__element {
    font-size: var(--font-size-base);
  }
}

/* Mixins */
@mixin button-style {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
}
```

## 🎯 Usage

### Enabling Components

The theme integrates with Drupal's Components module for SDC support:

```yaml
# In your component's definition
dependencies:
  - components:components
```

### Theme Libraries

Include theme assets in your templates:

```twig
{# Attach global styling #}
{{ attach_library('minim/global-styling') }}
```

### Custom Styling

Add custom styles by extending the source files:

1. Create new files in the appropriate atomic level
2. Import them in `source/minim.source.css`
3. Run the build process

### JavaScript Integration

Add JavaScript functionality:

1. Edit `source/minim.source.js`
2. Build with `gulp run`
3. JavaScript will be minified and included automatically

## 🔧 Configuration

### Theme Settings

The theme includes dependency on `body_roles_classes` for enhanced styling options:

```yaml
dependencies:
  - components:components
  - body_roles_classes:body_roles_classes
```

### Build Configuration

Customize the build process in `gulpfile.js`:

```javascript
// Modify processors array to add/remove PostCSS plugins
const processors = [
  postcss_autoprefixer,
  postcss_brands,
  // ... other plugins
]
```

### Font Integration

The theme uses PostCSS Font Magician for automatic font loading. Configure fonts in your CSS:

```css
body {
  font-family: 'Source Sans Pro', sans-serif; /* Automatically loaded */
}
```

## 📦 Dependencies

### Theme Dependencies
- `components:components` - Single Directory Components support
- `body_roles_classes:body_roles_classes` - Enhanced body classes

### Build Dependencies
- **Node.js 23+** - Runtime environment (auto-installed by script)
- **Gulp 5.x** - Task runner
- **PostCSS** - CSS processing with 15+ plugins
- **Lightning CSS** - Fast CSS optimization
- **TypeScript** - Type checking for JavaScript modules

### CSS Framework
- **Minim CSS** - Minimal CSS framework (auto-cloned by install script)

## 🚀 Production

### Optimization

The build process includes:

- **CSS minification** with CSS Nano
- **JavaScript uglification** 
- **Autoprefixing** for browser compatibility
- **Source maps** for debugging

### Performance Features

- Minimal CSS footprint
- Optimized asset delivery
- Modern CSS features for better performance
- Tree-shaking for unused styles

### Browser Support

The theme supports modern browsers with automatic fallbacks via:
- Autoprefixer for CSS prefixes
- PostCSS Preset Env for feature polyfills
- Lightning CSS optimizations

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
3. **Make changes following atomic design principles**
4. **Build and test your changes**
5. **Submit a pull request**

### Coding Standards

- Follow Drupal CSS coding standards
- Use atomic design methodology
- Include source maps for debugging
- Test across target browsers

### Component Guidelines

- Keep components focused and reusable
- Follow naming conventions
- Include proper documentation
- Test component variations

## 📚 Resources

- **Minim CSS Framework:** https://github.com/michaelpadiernos/minim.css
- **Atomic Design:** https://atomicdesign.bradfrost.com/
- **Drupal Components:** https://www.drupal.org/project/components
- **PostCSS Documentation:** https://postcss.org/

## 📄 License

ISC License - see package.json for details.

---

**Author:** M. Padiernos  
**Version:** 1.0.0  
**Drupal Compatibility:** 11.x
