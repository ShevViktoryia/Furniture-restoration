import { configureStore } from "@reduxjs/toolkit";
import {productReducer} from "./productReducer"
import { serviceReducer } from "./serviceReducer";
import { worksReducer } from "./worksReducer";
import { timelineReducer } from "./timelineReducer";
import { furnitureRestorationReducer } from "./furnitureRestorationReducer";
import { advantagesReducer } from './advantagesReducer';
import { portfolioReducer } from './portfolioReducer';
import { productionStagesReducer } from './productionStagesReducer';
import { clientsReducer } from './clientsReducer';

export default configureStore({
  reducer: {
    products: productReducer,
    services: serviceReducer,
    works: worksReducer,
    timeline: timelineReducer,
    furnitureRestoration: furnitureRestorationReducer,
    advantages: advantagesReducer,
    portfolio: portfolioReducer,
    productionStages: productionStagesReducer,
    clients: clientsReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})