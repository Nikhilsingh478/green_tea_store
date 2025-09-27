# Organic India Tea E-Commerce Website

## Overview
A modern React-based e-commerce website for organic tea products, built with Vite, TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query for data fetching
- **Build Tool**: Vite with SWC for fast compilation

## Development Setup
- **Host**: 0.0.0.0 (configured for Replit environment)
- **Port**: 5000 (required for Replit frontend)
- **Dev Command**: `npm run dev`
- **Build Command**: `npm run build`
- **Preview Command**: `npm run preview`

## Project Structure
- `src/components/` - Reusable UI components including cart, header, footer
- `src/pages/` - Main application pages (Index, ProductDetail, Admin, Blogs, NotFound)
- `src/assets/` - Product images and blog assets
- `src/data/` - Static product data
- `src/hooks/` - Custom React hooks (cart functionality, mobile detection)
- `public/` - Static assets (favicon, robots.txt)

## Key Features
- Responsive tea product catalog
- Shopping cart functionality
- Product detail pages
- Blog section
- Admin interface
- Search functionality
- Mobile-friendly design

## Recent Changes
- Configured Vite to run on port 5000 with host 0.0.0.0 for Replit environment
- Set up workflow for development server
- Configured deployment for production builds
- Verified application runs successfully in Replit

## Deployment Configuration
- **Target**: Autoscale (suitable for static/frontend applications)
- **Build**: `npm run build` 
- **Run**: `npm run preview`