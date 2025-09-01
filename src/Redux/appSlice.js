import { createSlice } from "@reduxjs/toolkit";

const loadUserFromStorage = () => {
    try {
        const serializedUser = localStorage.getItem('user');
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (serializedUser && isAuthenticated) {
            return {
                user: JSON.parse(serializedUser),
                isAuthenticated: true
            };
        }
    } catch (err) {
        console.warn('Failed to load user from localStorage:', err);
    }
    return {
        user: null,
        isAuthenticated: false
    };
};

const saveUserToStorage = (user, isAuthenticated) => {
    try {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', isAuthenticated.toString());
    } catch (err) {
        console.warn('Failed to save user to localStorage:', err);
    }
};

const removeUserFromStorage = () => {
    try {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
    } catch (err) {
        console.warn('Failed to remove user from localStorage:', err);
    }
};

const userState = loadUserFromStorage();

const initialState = {
    products: [],
    favorites: [],
    addedItems: new Set(),
    theme: 'light',
    user: userState.user,
    isAuthenticated: userState.isAuthenticated,
};

export const appSlice = createSlice({
    name: "Ecommerce",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.products = [];
        },
        addToFavorites: (state, action) => {
            const item = state.favorites.find((item) => item.id === action.payload.id);
            if (!item) {
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((item) => item.id !== action.payload);
        },
        setItemAdded: (state, action) => {
            state.addedItems = new Set([...state.addedItems, action.payload]);
        },
        clearAddedItem: (state, action) => {
            const newSet = new Set(state.addedItems);
            newSet.delete(action.payload);
            state.addedItems = newSet;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        loginUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            saveUserToStorage(action.payload, true);
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            removeUserFromStorage();
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, addToFavorites, removeFromFavorites, setItemAdded, clearAddedItem, toggleTheme, setTheme, loginUser, logoutUser } = appSlice.actions; 
export default appSlice.reducer;