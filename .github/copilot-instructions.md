# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js project built with TypeScript and Tailwind CSS, using the App Router architecture. The website is for "Shilps Art" - a vibrant, modern art instruction platform that helps students bring their inner vision to life through personal fine arts instruction.

## Development Guidelines
- Use TypeScript for all new files
- Follow React functional component patterns with hooks
- Use Tailwind CSS for styling
- Implement responsive design principles
- Use the App Router for routing (app directory structure)
- Place components in the `src/components` directory
- Use proper TypeScript types and interfaces
- Follow ESLint configuration for code quality

## Brand Identity & Design System
### Color Palette
- **Primary Colors**: Emerald-500, Purple-500, Coral-500, Blue-500
- **Secondary Colors**: Pink-500, Yellow-400, Orange-500
- **Accent Colors**: Emerald-300, Purple-300, Coral-300, Blue-300
- **Text Colors**: Charcoal (custom), White, White/90, White/80
- **Background Colors**: White, gradient backgrounds from primary colors

### Typography
- **Fredoka**: Playful, rounded font for headings and large text (`font-fredoka`)
- **Poppins**: Clean, modern font for body text and navigation (`font-poppins`)
- **Caveat**: Handwritten style for testimonials and special text (`font-caveat`)
- Default body font is Poppins

### Animation & Effects
- **Sparkle Effects**: Use `sparkle-effect` class for magical elements
- **Color Explosion**: Use `color-explosion` class for vibrant animations
- **Bounce 3D**: Use `bounce-3d` class for interactive elements
- **Pulsing**: Use `pulse-1`, `pulse-2`, `pulse-3`, `pulse-4` for sequential animations
- **Rainbow Gradients**: Use `rainbow-gradient` class for colorful backgrounds
- **Smooth Transitions**: Always use `transition-all duration-300` or similar
- **Hover Effects**: Scale transforms (`hover:scale-105`, `hover:scale-110`)
- **NO SHADOWS**: Avoid box-shadow effects on pulsing elements

### Visual Style Guidelines
- Use vibrant gradient backgrounds (`bg-gradient-to-br`, `bg-gradient-to-r`)
- Include emojis in text content for personality (🎨, ✨, 🌈, 🚀, 💖, etc.)
- Use `bg-clip-text text-transparent` for gradient text effects
- Implement smooth section transitions with gradient overlays
- Use rounded corners (`rounded-full`, `rounded-xl`)
- Apply sparkle and color explosion effects to key elements

## Code Style Preferences
- Use arrow functions for components
- Prefer named exports for components
- Use descriptive variable and function names
- Include proper TypeScript types for props and state
- Use Tailwind utility classes instead of custom CSS where possible
- Implement proper error handling and loading states

## Content & Messaging Guidelines
### Brand Voice
- Encouraging and magical
- Focus on personal artistic vision
- Emphasis on transformation and potential
- Use positive, uplifting language

### Content Patterns
- Include emojis in headings and key text
- Use transformation-focused messaging
- Highlight personal attention and unique approach
- Reference "inner vision" and "bringing creativity to life"
- Use action-oriented CTAs with magical language

### Accessibility Requirements
- Ensure proper text contrast against gradient backgrounds
- Use semantic HTML structure
- Include proper alt text for images
- Maintain keyboard navigation support
- Test color combinations for readability

## Component Guidelines
### Buttons
- Use gradient backgrounds with hover effects
- Include transform hover animations
- Apply rounded-full styling
- Use appropriate font classes (font-poppins for most)

### Cards
- Use white backgrounds with gradient borders/shadows
- Include hover scale effects
- Apply rounded-xl styling
- Use sparkle-effect class for interactive elements

### Sections
- Implement gradient backgrounds
- Use smooth transitions between sections
- Include decorative elements (emojis, gradients)
- Apply proper spacing and responsive design

### Navigation
- Use gradient text for brand name
- Apply hover color transitions
- Include emoji icons in navigation items
- Use consistent font-poppins styling
