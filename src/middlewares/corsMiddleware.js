import cors from 'cors';

const corsOptions = {
  origin: 'https://m5-front-end-psi.vercel.app', 
  methods: ['GET', 'POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

const corsMiddleware = cors(corsOptions);
export default corsMiddleware;