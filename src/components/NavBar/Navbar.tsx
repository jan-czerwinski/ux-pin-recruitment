import dropDownArrow from "./drop-down-arrow.svg";
import xplentyLogo from "./xplenty-logo.png";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 bg-white flex justify-between text-md">
      <div className="flex px-6 space-x-6">
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
      <div className="flex space-x-6 px-6">
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
          className="bg-gradient-to-r from-custom-blue to-custom-blue-dark rounded-md text-white font-bold p-2"
        />
      </div>
    </div>
  );
};

const XplentyLogo = () => {
  return (
    <div className="hidden lg:flex items-center mx-4 space-x-2">
      <img
        className="m-2 w-8 h-8"
        src={xplentyLogo}
        alt="xplenty logo circular"
      />
      <div className="font-bold  h-auto">xplenty</div>
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
      className={`text-sm lg:text-md my-4 flex space-x-1 items-center ${props.className}`}
      onClick={props.action}
    >
      <div>{props.name}</div>
      {props.dropDown && (
        <img
          className="w-2 h-2 mt-1"
          src={dropDownArrow}
          alt="drop down arrow"
        />
      )}
    </div>
  );
};

export default Navbar;
