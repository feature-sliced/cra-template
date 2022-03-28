import React from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes';

export const PublicRoutes: React.FC = () => useRoutes(publicRoutes)
