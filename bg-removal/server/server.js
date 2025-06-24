import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js';
import connectDB from './configs/mongodb.js';
import imageRouter from './routes/imageRoutes.js';

// App Config
const PORT = process.env.PORT || 4000
const app = express();
await connectDB()
// const allowedorigins = [
//   'https://bg-remover-frontend-chi.vercel.app','http://localhost:5177'
// ];
// Intialize Middlewares
app.use(express.json())
const allowedOrigins = [
  'http://localhost:5173',
  'https://bgremovallllll.vercel.app',
  'https://your-frontend-domain.vercel.app' // if you plan to deploy frontend too
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// API routes
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.get('/', (req,res) => res.send("API Working"))

app.listen(PORT, () => console.log('Server running on port ' + PORT));
