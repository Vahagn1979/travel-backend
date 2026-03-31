import "dotenv/config";
import express from "express";
import path from "path";
import logger from "morgan";
import expressEjsLayouts from "express-ejs-layouts";
import cors from "cors";
// import helmet from "helmet";
import sessionMiddleware from "./middlewares/session.js";
import appRouter from "./routes/index.js";
import setUserMiddleware from "./middlewares/setUser.js";
import notFoundErrorHandler from "./errors/notFoundErrorHandler.js";
import globalErrorHandler from "./errors/globalErrorHandler.js";
import baseUrlMiddleware from "./middlewares/baseUrl.js";

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'unsafe-inline'"],
//         // styleSrc: ["'self'", "'unsafe-inline'"],
//         imgSrc: ["'self'", "data:"],
//       },
//     },
//   }),
// );

app.use(cors());
app.set('trust proxy', true);
app.set('view engine', 'ejs');
app.set("views", path.join(process.cwd(), "views"));
app.set("layout", "base");

app.use(expressEjsLayouts);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(sessionMiddleware());
app.use(setUserMiddleware);
app.use(baseUrlMiddleware);

app.use(appRouter);

app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    
})