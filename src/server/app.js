/*
*
* *** App File ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

// NPM Dependencies
import express from 'express';
import morgan from 'morgan';
import path from 'path';

// Import API Routes file
import api from './api';

// Express instance
const app = express();

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// API Middleware
api(app);

export default app;
