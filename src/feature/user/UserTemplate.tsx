import { useState } from "react";
import LoginTemplate from "./components/LoginTemplate";

const UserTemplate = () => {
  const [menu, setMenu] = useState("login");

  const handleMenuChange = (selectMenu: string) => {
    setMenu(selectMenu);
  };

  return (
    <>
      {menu === "login" && (<LoginTemplate onMenuChange={handleMenuChange} />)}
      {menu === "signup"}
    </>
  );
};

export default UserTemplate;