// portfolio-frontend/src/context/AppContext.js
import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

// Initial state
const initialState = {
  loading: false,
  error: null,
  contactForm: {
    isSubmitting: false,
    submitted: false,
    error: null,
  },
  portfolio: {
    selectedFilter: "all",
    projects: [],
    loading: false,
  },
  testimonials: {
    data: [],
    loading: false,
    currentIndex: 0,
  },
  analytics: {
    pageViews: 0,
    visitDuration: 0,
  },
};

// Action types
const ActionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",

  // Contact form actions
  SET_CONTACT_SUBMITTING: "SET_CONTACT_SUBMITTING",
  SET_CONTACT_SUBMITTED: "SET_CONTACT_SUBMITTED",
  SET_CONTACT_ERROR: "SET_CONTACT_ERROR",
  RESET_CONTACT_FORM: "RESET_CONTACT_FORM",

  // Portfolio actions
  SET_PORTFOLIO_FILTER: "SET_PORTFOLIO_FILTER",
  SET_PROJECTS: "SET_PROJECTS",
  SET_PROJECTS_LOADING: "SET_PROJECTS_LOADING",

  // Testimonials actions
  SET_TESTIMONIALS: "SET_TESTIMONIALS",
  SET_TESTIMONIALS_LOADING: "SET_TESTIMONIALS_LOADING",
  SET_TESTIMONIAL_INDEX: "SET_TESTIMONIAL_INDEX",

  // Analytics actions
  UPDATE_ANALYTICS: "UPDATE_ANALYTICS",
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };

    case ActionTypes.CLEAR_ERROR:
      return { ...state, error: null };

    // Contact form cases
    case ActionTypes.SET_CONTACT_SUBMITTING:
      return {
        ...state,
        contactForm: { ...state.contactForm, isSubmitting: action.payload },
      };

    case ActionTypes.SET_CONTACT_SUBMITTED:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          submitted: action.payload,
          isSubmitting: false,
          error: null,
        },
      };

    case ActionTypes.SET_CONTACT_ERROR:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          error: action.payload,
          isSubmitting: false,
        },
      };

    case ActionTypes.RESET_CONTACT_FORM:
      return {
        ...state,
        contactForm: initialState.contactForm,
      };

    // Portfolio cases
    case ActionTypes.SET_PORTFOLIO_FILTER:
      return {
        ...state,
        portfolio: { ...state.portfolio, selectedFilter: action.payload },
      };

    case ActionTypes.SET_PROJECTS:
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          projects: action.payload,
          loading: false,
        },
      };

    case ActionTypes.SET_PROJECTS_LOADING:
      return {
        ...state,
        portfolio: { ...state.portfolio, loading: action.payload },
      };

    // Testimonials cases
    case ActionTypes.SET_TESTIMONIALS:
      return {
        ...state,
        testimonials: {
          ...state.testimonials,
          data: action.payload,
          loading: false,
        },
      };

    case ActionTypes.SET_TESTIMONIALS_LOADING:
      return {
        ...state,
        testimonials: { ...state.testimonials, loading: action.payload },
      };

    case ActionTypes.SET_TESTIMONIAL_INDEX:
      return {
        ...state,
        testimonials: { ...state.testimonials, currentIndex: action.payload },
      };

    // Analytics cases
    case ActionTypes.UPDATE_ANALYTICS:
      return {
        ...state,
        analytics: { ...state.analytics, ...action.payload },
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const actions = {
    setLoading: (loading) =>
      dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
    setError: (error) =>
      dispatch({ type: ActionTypes.SET_ERROR, payload: error }),
    clearError: () => dispatch({ type: ActionTypes.CLEAR_ERROR }),

    // Contact form actions
    setContactSubmitting: (submitting) =>
      dispatch({
        type: ActionTypes.SET_CONTACT_SUBMITTING,
        payload: submitting,
      }),
    setContactSubmitted: (submitted) =>
      dispatch({ type: ActionTypes.SET_CONTACT_SUBMITTED, payload: submitted }),
    setContactError: (error) =>
      dispatch({ type: ActionTypes.SET_CONTACT_ERROR, payload: error }),
    resetContactForm: () => dispatch({ type: ActionTypes.RESET_CONTACT_FORM }),

    // Portfolio actions
    setPortfolioFilter: (filter) =>
      dispatch({ type: ActionTypes.SET_PORTFOLIO_FILTER, payload: filter }),
    setProjects: (projects) =>
      dispatch({ type: ActionTypes.SET_PROJECTS, payload: projects }),
    setProjectsLoading: (loading) =>
      dispatch({ type: ActionTypes.SET_PROJECTS_LOADING, payload: loading }),

    // Testimonials actions
    setTestimonials: (testimonials) =>
      dispatch({ type: ActionTypes.SET_TESTIMONIALS, payload: testimonials }),
    setTestimonialsLoading: (loading) =>
      dispatch({
        type: ActionTypes.SET_TESTIMONIALS_LOADING,
        payload: loading,
      }),
    setTestimonialIndex: (index) =>
      dispatch({ type: ActionTypes.SET_TESTIMONIAL_INDEX, payload: index }),

    // Analytics actions
    updateAnalytics: (data) =>
      dispatch({ type: ActionTypes.UPDATE_ANALYTICS, payload: data }),
  };

  const value = {
    state,
    ...actions,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
