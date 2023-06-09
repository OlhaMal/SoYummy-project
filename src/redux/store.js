import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoriteRecipesReducer from './favoriteRecipes/favoriteRecipesSlice';
import { searchReducer } from './search/searchSlice';
import { authReducer } from './auth/auth-slice';
import { recipeReducer } from './recipes/recipe-slice';
import { ownRecipesReducer } from './ownRecipes/own-slice';
import { shopRecipesReducer } from './shoppingRecipes/shopping-slice';
import { themeReducer } from './theme/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'isLoggedIn'],
};
const recipePersistConfig = {
  key: 'recipe',
  storage,
  // whitelist: []
};
const favoritePersistConfig = {
  key: 'favoriteRecipes',
  storage,
  // whitelist: []
};

const ownPersistConfig = {
  key: 'ownRecipes',
  storage,
  // whitelist: []
};
const shoppingPersistConfig = {
  key: 'shoppingRecipes',
  storage,
  // whitelist: []
};
const searchPersistConfig = {
  key: 'searchRecipes',
  storage,
  // whitelist: []
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipeCommon: persistReducer(recipePersistConfig, recipeReducer),
    ownRecipes: persistReducer(ownPersistConfig, ownRecipesReducer),
    favoriteRecipes: persistReducer(
      favoritePersistConfig,
      favoriteRecipesReducer
    ),
    search: persistReducer(searchPersistConfig, searchReducer),
    shoppingRecipes: persistReducer(shoppingPersistConfig, shopRecipesReducer),
    theme: themeReducer,
  },
  middleware: getDefaultMiddelware =>
    getDefaultMiddelware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
