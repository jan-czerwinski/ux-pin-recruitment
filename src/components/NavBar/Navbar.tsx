import dropDownArrow from "./drop-down-arrow.svg";
import xplentyLogo from "./xplenty-logo.png";

const Navbar = () => {
  return (
    <div className="h-nav-bar sticky  px-15px  z-50 top-0 bg-white text-custom-grey flex justify-between text-md">
      <div className="flex space-x-5 lg:space-x-nav-bar-elements">
        <XplentyLogo />

        <MenuButton
          name="Product"
          action={() => console.log("Product clicked")}
        />
        <MenuButton
          name="Integration"
          action={() => console.log("Integration clicked")}
        />
        <MenuButton
          name="Solution"
          action={() => console.log("Solution clicked")}
          dropDown={true}
        />
        <MenuButton
          name="Resources"
          action={() => console.log("Resources clicked")}
          dropDown={true}
        />
      </div>
      <div className="flex space-x-5 lg:space-x-nav-bar-elements">
        <MenuButton
          name="English"
          action={() => console.log("English clicked")}
          dropDown={true}
        />
        <MenuButton
          name="Sign In"
          action={() => console.log("Sign In Clicked")}
        />
        <MenuButton
          name="GET STARTED"
          action={() => console.log("Sign In Clicked")}
          className="nav-bar-button rounded-base justify-center  bg-gradient-to-r  text-white from-custom-blue to-custom-blue-dark font-bold p-3 drop-shadow-2xl shadow-2xl "
        />
      </div>
    </div>
  );
};

const XplentyLogo = () => {
  return (
    <div className="flex items-center  space-x-1">
      <img
        className="m-2 w-logo h-logo"
        src={xplentyLogo}
        alt="xplenty logo circular"
      />
      <div className="font-bold text-base">Xplenty</div>
    </div>
  );
};

type MenuButtonProps = {
  name: string;
  action: () => any;
  dropDown?: boolean;
};
const MenuButton = (
  props: MenuButtonProps & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div
      className={`text-base my-auto flex space-x-1 items-center ${props.className}`}
      onClick={props.action}
    >
      {props.name}
      {props.dropDown && (
        <img
          className="w-2 h-2 mt-1 ml-1"
          src={dropDownArrow}
          alt="drop down arrow"
        />
      )}
    </div>
  );
};

export default Navbar;
