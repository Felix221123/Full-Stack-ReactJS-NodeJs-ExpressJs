# React Vite Template with Cypress, Vitest, and Tailwind CSS

This is a React template project using Vite, Vitest for unit testing, and Tailwind CSS for styling. This template aims to provide a quick start for developing React applications with modern tooling and best practices.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Vitest**: A fast unit test framework.
- **Tailwind CSS**: A utility-first CSS framework.

## Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to get up and running:

### 1. Clone the Repository

```sh
git clone https://github.com/Felix221123/React-Vite-Vitest-Boilerplate.git
cd React-Vite-Vitest-Boilerplate
```

### 2. Install Dependencies

Using npm:

```sh
npm install
```

Or using yarn:

```sh
yarn install
```

### 3. Start the Development Server

Using npm:

```sh
npm run dev
```

Or using yarn:

```sh
yarn dev
```

This will start the Vite development server and you can view the application in your browser by copying and pasting the 

## Running Tests

### Unit Tests with Vitest

To run unit tests using Vitest, use the following command:

Using npm:

```sh
npm run test
```

```sh
npm run test:ui
```

Or using yarn:

```sh
yarn test
```

## Tailwind CSS

This project includes Tailwind CSS for styling. To use Tailwind CSS classes in your components, simply include the classes in the `className` attribute.

For example:

```tsx
export const Button() {
  return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button>;
}
```

### Tailwind CSS Configuration

Tailwind CSS is configured in the `tailwind.config.js` file. You can customize the Tailwind configuration according to your needs.

### Building for Production

To build the project for production, use the following command:

Using npm:

```sh
npm run build
```

Or using yarn:

```sh
yarn build
```

This will create an optimized production build in the `dist` directory.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

---

Happy coding!


