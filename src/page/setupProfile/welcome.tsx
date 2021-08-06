import React from "react";
import AuthDescription from "../../component/auth/authDescription";
import AuthTitle from "../../component/auth/authTitle";
import Adults from "../../component/setupProfile/adults";

const Welcome: React.FC = () => {
  return (
    <>
      <AuthTitle>Bienvenue, goodista!</AuthTitle>
      <div className="mt-2">
        <AuthDescription>
          Ta mission: planifier les meilleurs repas, pour ta santé et notre
          planète.
        </AuthDescription>
      </div>
      <Adults />
    </>
  );
};

export default Welcome;
