import React from "react";

const Mobile = ({ home }) => {
  const userName = "Leander";

  const CURRENT_USER_LOGIN = true;

  return (
    <>
      <img
        src={home.backgroundImage.fields.file.url}
        alt="logo"
        className="bg-image"
      />
      <div className="bg-header">
        <h3>
          Hello, {CURRENT_USER_LOGIN ? userName : "friend"}!{" "}
          {CURRENT_USER_LOGIN ? home.welcomeMessage2 : home.welcomeMessage}{" "}
        </h3>
        <img src={home.logo.fields.file.url} alt="logo" className="logo" />
        <h4>{home.slogan}</h4>
      </div>
    </>
  );
};

export default Mobile;
