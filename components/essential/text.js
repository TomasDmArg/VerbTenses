import React from "react";
export const Title = ({ children }) => {
  return (
    <React.Fragment>
      <h1 className="components__essential--title">{children}</h1>
    </React.Fragment>
  );
};
export const Subtitle = ({ children }) => {
  return (
    <React.Fragment>
      <h2 className="components__essential--subtitle">{children}</h2>
    </React.Fragment>
  );
};
export const Paragraph = ({ children }) => {
  return (
    <React.Fragment>
      <p className="components__essential--paragraph">{children}</p>
    </React.Fragment>
  );
};
