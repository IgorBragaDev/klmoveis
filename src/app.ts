import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import userRouter from './routes/user.routes';
import { handleErrors } from './middlewares/handleError.middleware';
import loginRouter from './routes/login.routes';
import categoryRoutes from './routes/category.routes';
import realStateRoutes from './routes/realState.routes';
import scheduleRoutes from './routes/schedule.routes';

const app = express();
app.use(express.json());


app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/categories", categoryRoutes)
app.use("/realEstate", realStateRoutes)
app.use("/schedules", scheduleRoutes)

app.use(handleErrors)
export default app;