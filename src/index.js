import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// GQL/Applo Stuff
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Redux Stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
