# E-Commerce

E-commerce is a frontend project made with React by fetching data from an e-commerce service.

# Dependencies Used In The Project
- Redux Toolkit
- React Redux
- React Icons
- React Router
- formik & yup
- React Toastify
- js-cookie
- axios
- Material UI

# Architectural Structure
- React with Hooks for rendering UI components, with DevTools support.
- React Router for SPA routing.
- Semantic UI.
- Vite module bundling.
- Redux to manage states.
- Error handling with Redux.
- Determining routes using router dome.
- Http request using axios.
- Proxy settings were made with vite.config

In this project, proxy settings were made to establish a connection with the service. Then, the connection with the service was established and the necessary data was retrieved and formatted on the pages. The http method was used with the axios library to communicate with the service. The Redux library was used to keep the states. Routes and paths were kept in a single file. The props method was used to transmit states between components.

# Installation
Ensure that `node.js` is installed on your system first.
Clone the git repo and execute install dependencies from npm to get ready:

```sh
npm create vite@latest
cd e-commerce
npm install
npm run dev
```

## Directory Structure

| Path.                                           | Description                                                     |
|-------------------------------------------------|-----------------------------------------------------------------|
| `/src/`                                         | The folder for your source files.                                |
| `/src/components`                              |  Components such as basket, footer, header, loading...                    |
| `/src/config`                             |  Required config settings axios, urlx, routes.                                        |
| `/src/css`                               | - CSS files.                                                         |
| `/src/errors`                     | - Error components.                                       |
| `/src/pages`                               | Pages such as auth, login, register, checkout, home, product-list...          |
| `/src/redux`                               | Redux states and http requests.                                                |
| `/src/redux/store`                                      | Redux configs.        |


# Screenshots




