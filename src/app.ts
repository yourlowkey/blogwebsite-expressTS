import express from 'express'
import sequelize from './db/config';
import { json, urlencoded } from 'body-parser';
import postRouter from './routes/postRoute';
import { error } from 'console';
const app = express()

app.use(json())

app.use(urlencoded({ extended: true }))

app.use("/posts", postRouter)

app.use((err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    res.status(500).json({ message: err.message })
}
)
sequelize.sync({ force: true }).then(() => {
    console.log("Database connected successfully");
}).catch((err: Error) => {
    console.log("Err", err);

})

app.listen(8080)
