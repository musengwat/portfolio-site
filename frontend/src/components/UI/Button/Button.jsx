// portfolio-frontend/src/components/UI/Button/Button.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const buttonClass = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    disabled && "btn--disabled",
    loading && "btn--loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <motion.button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      <span className="btn__content">
        {loading && (
          <span className="btn__spinner">
            <svg viewBox="0 0 24 24" className="btn__spinner-icon">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="31.416"
              >
                <animate
                  attributeName="stroke-dasharray"
                  dur="2s"
                  values="0 31.416;15.708 15.708;0 31.416;0 31.416"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  dur="2s"
                  values="0;-15.708;-31.416;-31.416"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </span>
        )}
        {children}
      </span>
      <span className="btn__ripple"></span>
    </motion.button>
  );
};

export default Button;
