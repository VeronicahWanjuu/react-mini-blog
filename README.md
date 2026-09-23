# Dev Insights - Mini Blog

A React mini blog built with TypeScript and Vite as part of a
front-end development module. The app displays a list of developer
blog posts with styling, conditional rendering, and component
optimization.

## How to Install and Run

1. Clone the repository
   git clone https://github.com/VeronicahWanjuu/react-mini-blog.git

2. Navigate into the project
   cd react-mini-blog

3. Install dependencies
   npm install

4. Start the development server (uses Vite)
   npm run dev

5. Open your browser at http://localhost:5173

## Project Structure

src/
├── components/
│   ├── Header.tsx
│   ├── Post.tsx
│   ├── PostList.tsx
│   └── withLogger.tsx
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── Post.css
│   └── PostList.css
├── App.tsx
└── main.tsx

## Component Choices

I chose functional components for all parts of this project because
they are simpler, easier to read, and work naturally with React hooks.
Class components require more boilerplate and the "this" keyword can
cause confusion. The React team recommends functional components for
new projects.

## Styling Methods Used

1. External CSS files — each component has its own dedicated CSS file
   in the src/styles/ folder for clean separation of concerns.

2. Inline styles — used in Post.tsx to conditionally change the
   border-left color based on the post author.

## Conditional Styling

- Posts by author "Veronicah" get a red left border instead of blue.
- Posts published within the last 24 hours show a pulsing "New!" badge.

## Optimization Techniques

- React.memo applied to the Post component to prevent unnecessary
  re-renders when the parent component updates.
- Unique key prop used for each post when rendering the list.

## Higher-Order Component (HOC)

The withLogger HOC wraps a component and logs to the console when
the component mounts and unmounts. It is applied to PostList inside
App.tsx. This is useful for debugging and monitoring component
lifecycle events.

## Challenges and How I Overcame Them

The biggest challenge was getting the withLogger HOC to work with
TypeScript generics. The "T extends object" syntax was new to me and
I had to research how generics work in TypeScript before I could make
it compile without errors. This taught me that TypeScript's type
system is much more powerful than I initially thought.

Setting up the styles folder separately from components also took
some adjusting  making sure all import paths were correct across
every file.

## Libraries Used

- React 18
- TypeScript
- Vite
- ESLint (Oxlint)
