import axios from "axios";

// Base URL of Spring Boot Backend
const API = axios.create({
  baseURL: "http://localhost:9090/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// Products API
// =========================
export const getProducts = () => API.get("/products");

export const getProductById = (id) =>
  API.get(`/products/${id}`);

export const addProduct = (product) =>
  API.post("/products", product);

export const updateProduct = (id, product) =>
  API.put(`/products/${id}`, product);

export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

// =========================
// Categories API
// =========================
export const getCategories = () =>
  API.get("/categories");

// =========================
// Cart API
// =========================
export const getCartItems = () =>
  API.get("/cart");

export const addToCart = (item) =>
  API.post("/cart", item);

export const updateCartItem = (id, item) =>
  API.put(`/cart/${id}`, item);

export const removeCartItem = (id) =>
  API.delete(`/cart/${id}`);

export const clearCart = () =>
  API.delete("/cart");

// =========================
// Wishlist API
// =========================
export const getWishlist = () =>
  API.get("/wishlist");

export const addToWishlist = (item) =>
  API.post("/wishlist", item);

export const removeWishlistItem = (id) =>
  API.delete(`/wishlist/${id}`);

// =========================
// Orders API
// =========================
export const getOrders = () =>
  API.get("/orders");

export const placeOrder = (order) =>
  API.post("/orders", order);

export const getOrderById = (id) =>
  API.get(`/orders/${id}`);

// =========================
// Contact API
// =========================
export const sendMessage = (contact) =>
  API.post("/contact", contact);

// =========================
// Authentication API
// =========================
export const register = (user) =>
  API.post("/auth/register", user);

export const login = (user) =>
  API.post("/auth/login", user);

// =========================
// Users API
// =========================
export const getUsers = () =>
  API.get("/users");

export const getUserById = (id) =>
  API.get(`/users/${id}`);

export const updateUser = (id, user) =>
  API.put(`/users/${id}`, user);

export default API;