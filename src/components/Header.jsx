import React from "react";

function Header() {
  return (
    <div>
      <header className="headerStyle">
        <img
          className="icon"
          src="https://media-exp1.licdn.com/dms/image/C560BAQHKJ7bgUY5kjA/company-logo_200_200/0/1615143047817?e=2147483647&v=beta&t=QvGVaP8GxB8aHUb9Y887DfWNwXOQZZVjCaQAALUjo2c"
          alt="logo"
        />
        <div>
          <h1 className="title">YOUR SPOTTABL TEAM</h1>
          <p className="sub-title">Spottabl supports you all throughout</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
