import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

// Create context
const NewsContext = createContext();

// Initial state
const initialState = {
  loading: true,
  news: [],
};

// Reducer to handle state updates
const newsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_NEWS":
      return { ...state, news: action.payload, loading: true };
    case "SET_ERROR":
      return { ...state, loading: false }; // Stop loading on error
    default:
      return state;
  }
};

// NewsProvider component
const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  // Function to fetch news
  const fetchNews = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      // a142f40ed1d84248ae6ef25c6f3fb722;
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=a142f40ed1d84248ae6ef25c6f3fb722"
      );
      if (response.status === 200) {
        console.log(response.data);
        dispatch({
          type: "SET_NEWS",
          payload: response.data.articles,
        });
      }
    } catch (e) {
      if (e.response && e.response.status === 429) {
        console.log("Rate limit exceeded. Retrying in 5 seconds...");
        setTimeout(fetchNews, 5000); // Retry after 5 seconds
      } else {
        console.log(e);
        dispatch({ type: "SET_ERROR" }); // Handle the error
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  // Fetch news on mount
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ ...state, fetchNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
