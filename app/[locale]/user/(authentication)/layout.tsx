import React, { ReactNode } from "react";

const AuthenticationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>Header auth</div>
      {children}
    </div>
  );
};

export default AuthenticationLayout;
