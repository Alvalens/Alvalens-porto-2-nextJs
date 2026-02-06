# Changelog

## [1.0.0] - 2026-02-06

Initial stable release.

### Performance

- **Navbar animation**: Replaced spring clip-path with tween easing, removed double `backdrop-blur-sm`, moved variant objects outside component to avoid per-render recreation
- **Skills section**: Converted individual tag delays to `staggerChildren` orchestration, removed `backdrop-blur-lg` from skill cards, simplified hover effects from `rotateY + scale` to `scale` only
- **Font loading**: Migrated from CSS `@import url()` to `next/font/google` (Poppins, Jost) for self-hosted fonts with `font-display: swap`
- **Chat widget**: Deferred Intelliticks script loading via `requestIdleCallback` with 5s timeout fallback
- **Image optimization**: Migrated all `next/legacy/image` usage to `next/image` with proper `fill`, `sizes`, and blur placeholders

### Features

- **Sidebar active indicator**: Smooth sliding pill animation using Framer Motion `layoutId` instead of static CSS class toggle
- **Scroll indicator**: Animated vertical line on home page first load, auto-dismisses on scroll
- **Project image loading**: Skeleton overlay with blur placeholder and smooth opacity transition for project detail gallery
- **Back navigation**: Project detail page uses `router.back()` to preserve scroll position

### SEO

- Added per-page `title` and `description` metadata to `/about`, `/projects`, and `/projects/[slug]`
- Added `generateMetadata` for dynamic project detail pages
- Added JSON-LD Person structured data schema in root layout
- Fixed `metadataBase` warning by adding canonical URL
- Fixed duplicate/miscased `site_name` in OpenGraph metadata

### Accessibility

- Added `aria-label` to navbar burger button
- Added `aria-label` to all 4 sidebar navigation buttons
- Added `aria-label` to all 5 social icon links on contact section
- Added `aria-label` to project detail back button

### Bug Fixes

- Fixed stagger animation not replaying on skills category switch (added `key` prop to force remount)
- Fixed legacy `layout`/`objectFit` image prop warnings across 6 files
- Removed orphaned `li.active:after` CSS rule that drew unwanted underline on sidebar icons
- Moved nprogress CSS import into `TopProgressbar.jsx` component

### Responsiveness

- Root font-size uses `clamp(13px, 0.89vw, 17px)` for smooth scaling across zoom levels (100%-150%)
- Hero container uses viewport-relative width (`w-[82%] max-w-screen-2xl`) instead of fixed `container`
- Section images use `md:h-[60vh]` with vertical centering for consistent layout across zoom levels
