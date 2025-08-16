# React Chat Application

A modern React application built with Vite, featuring real-time chat functionality with authentication.
Live App Available at https://workcity-chat-frontend-techiesam.vercel.app

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **Socket.io** - Real-time communication
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create environment file (optional)
```bash
cp .env.example .env
```

Configure your environment variables in `.env`:
```env
VITE_SERVER_URL=<deployed_backend_url>/api
VITE_ENV_SOCKET_URL=<deployed_backend_url>
```

*The app will use fallback values if no environment file is provided.*

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks (e.g., useAppAuth)
├── libs/            # External service configurations
│   ├── socket.js    # Socket.io instance and configuration
│   └── api.js       # API client instance
├── types/           # TypeScript type definitions
└── features/        # Feature-based modules
    ├── auth/        # Authentication related components and logic
    └── chat/        # Chat functionality components and logic
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SERVER_URL=<deployed_backend_url>/api
VITE_ENV_SOCKET_URL=<deployed_backend_url>
```

Replace `<deployed_backend_url>` with your actual backend server URL.

**Note:** The application will fallback to default values if these environment variables are not provided, allowing for local development without requiring a `.env` file.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Features

- **Authentication** - User login and registration
- **Real-time Chat** - Live messaging with Socket.io
- **Modern UI** - Clean interface built with Tailwind CSS and shadcn/ui
- **Type Safety** - Full TypeScript support
- **Responsive Design** - Works on desktop and mobile devices

## Development

The project follows a feature-based folder structure where each feature contains its own components, hooks, and logic. Common utilities and configurations are stored in the `libs` folder.

### Key Files

- `libs/socket.js` - Socket.io client configuration
- `libs/api.js` - HTTP client setup
- `hooks/useAppAuth.js` - Authentication state management
- `types/` - TypeScript definitions for the application
