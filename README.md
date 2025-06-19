# React + Vite

npm install

run file - npm run dev

This Website Created With GenAI 
Most of the Code creating with GenAI 

GenAI - ChatGPT, Grok

The code above defines a React context and provider for managing toast notifications in an application. It uses React’s Context API to allow any component in the component tree to trigger toast messages without prop drilling. The ToastContext is created using createContext(), and the ToastProvider component wraps its children with this context, exposing an addToast function.

Inside ToastProvider, the toasts state holds an array of active toast notifications. The addToast function allows new toasts to be added, each with a unique id, a message, a type (such as "info" or "error"), a duration for how long the toast should be visible, and an optional undoAction callback. The removeToast function removes a toast by its id.

A useEffect hook watches the toasts array. When a toast is present, it sets a timer to automatically remove the first toast after its specified duration, ensuring toasts disappear after a set time. The provider renders a container with all current toasts, passing necessary props to each Toast component, including handlers for closing and undoing actions. The useToast custom hook is exported for easy access to the addToast function from any component within the provider. This setup makes it simple to show and manage toast notifications throughout the app.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
