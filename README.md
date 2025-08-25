# Blog System with Supabase

Complete blog system built with React + Vite + Supabase with admin panel and SEO optimization.

## Features

### Public Routes
- `/blog` - Blog listing with search, pagination, and tag filtering
- `/blog/:slug` - Individual blog post with SEO optimization
- Preview functionality for drafts (authenticated users only)

### Admin Routes (Protected)
- `/blog-admin-access` - Admin login
- `/admin` - Dashboard with post management
- `/admin/posts/new` - Create new post
- `/admin/posts/:id/edit` - Edit existing post

### Database Schema
- Enhanced `blogs` table with JSONB content, tags, SEO fields
- User roles (ADMIN, EDITOR) with proper RLS policies
- Storage bucket for blog images with public access

### Technical Features
- Rich text editor with TipTap
- Image upload with signed URLs
- Full SEO implementation (meta tags, Open Graph, JSON-LD)
- Role-based access control
- Form validation with Zod
- Responsive design with Tailwind

## Setup

1. Apply the database migration from the Supabase dashboard
2. Create admin user: `blog@tutorsec.com` with role 'ADMIN'
3. Configure storage bucket policies
4. Set authentication redirect URLs in Supabase

## Security
- RLS policies prevent unauthorized access
- Admin routes have `noindex` meta tags
- Preview functionality requires authentication
- Proper role-based permissions

The blog system is production-ready with complete CRUD operations, SEO optimization, and secure access control.