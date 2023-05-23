import App from "./App";

const app = new App({ port: 3000 });

app.connectDb().startServer();
