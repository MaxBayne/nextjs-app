import * as React from "react";
import Link from "next/link";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import StyleIcon from "@mui/icons-material/Style";
import HotTubIcon from "@mui/icons-material/HotTub";
import InventoryIcon from "@mui/icons-material/Inventory";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import WebhookIcon from "@mui/icons-material/Webhook";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const COLLAPSED_WIDTH = "65px";

export default function DrawerComponent({ drawerWidth, isDrawerOpen, closeDrawerCallback }) {
  const [materialUIMenuOpen, setMaterialUIMenuOpen] = React.useState(false);
  const [tailwindcssMenuOpen, setTailwindcssMenuOpen] = React.useState(false);
  const [shadCNMenuOpen, setShadCNMenuOpen] = React.useState(false);
  const [useStateMenuOpen, setUseStateMenuOpen] = React.useState(false);
  const [useContextMenuOpen, setUseContextMenuOpen] = React.useState(false);
  const [useEffectMenuOpen, setUseEffectMenuOpen] = React.useState(false);
  const [useMemoMenuOpen, setUseMemoMenuOpen] = React.useState(false);
  const [useReducerMenuOpen, setUseReducerMenuOpen] = React.useState(false);
  const [apiMenuOpen, setApiMenuOpen] = React.useState(false);
  const [localizationMenuOpen, setLocalizationMenuOpen] = React.useState(false);
  const [reduxMenuOpen, setReduxMenuOpen] = React.useState(false);

  const renderMenuItem = (href, icon, text) => (
    <Link
      href={href}
      className={`flex items-center h-12 px-2.5 gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-sm ${
        !isDrawerOpen ? "justify-center" : ""
      }`}
    >
      <span className="flex-shrink-0 flex items-center justify-center w-6">{icon}</span>
      {isDrawerOpen && <span className="text-sm whitespace-nowrap">{text}</span>}
    </Link>
  );

  const renderCollapseMenu = (open, toggle, items, icon, text) => (
    <>
      <button
        onClick={() => toggle(!open)}
        className={`w-full flex items-center h-12 px-2.5 gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-sm ${
          !isDrawerOpen ? "justify-center" : ""
        }`}
      >
        <span className="flex-shrink-0 flex items-center justify-center w-6">{icon}</span>
        {isDrawerOpen && (
          <>
            <span className="flex-1 text-sm text-left whitespace-nowrap">{text}</span>
            {open ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
          </>
        )}
      </button>

      {open && isDrawerOpen && (
        <ul className="pl-4">
          {items.map((item) => (
            <li key={item.text}>
              <Link
                href={item.href}
                className="flex items-center h-10 pl-4 gap-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-sm"
              >
                <LabelImportantIcon fontSize="small" />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <nav
      className="fixed top-0 left-0 h-full z-[1200] flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-x-hidden transition-all duration-300 ease-in-out"
      style={{ width: isDrawerOpen ? `${drawerWidth}px` : COLLAPSED_WIDTH }}
    >
      {/* Header */}
      <div className="flex items-center justify-end h-16 px-2 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <button
          onClick={closeDrawerCallback}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="close drawer"
        >
          <ChevronLeftIcon />
        </button>
      </div>

      {/* Nav Items */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 px-1 space-y-0.5">
        {renderMenuItem("/", <HomeIcon fontSize="small" />, "Home")}
        {renderMenuItem("/css", <StyleIcon fontSize="small" />, "CSS")}
        {renderMenuItem("/javascript", <HotTubIcon fontSize="small" />, "JavaScript")}
        {renderMenuItem("/products", <InventoryIcon fontSize="small" />, "Products")}
        {renderCollapseMenu(materialUIMenuOpen, setMaterialUIMenuOpen, [{ href: "/materialUI", text: "Material UI" }], <AppsIcon fontSize="small" />, "Material UI")}
        {renderCollapseMenu(tailwindcssMenuOpen, setTailwindcssMenuOpen, [{ href: "/tailwindcss", text: "tailwind" }], <AppsIcon fontSize="small" />, "TailWind Css")}
        {renderCollapseMenu(shadCNMenuOpen, setShadCNMenuOpen, [{ href: "/shadCN", text: "ShadCN" }], <AppsIcon fontSize="small" />, "ShadCN Components")}
        {renderCollapseMenu(useStateMenuOpen, setUseStateMenuOpen, [{ href: "/useState", text: "useState" }, { href: "/useState/arrays", text: "With Arrays" }, { href: "/useState/forms", text: "With Forms" }, { href: "/useState/loanForm", text: "Loan Form" }], <WebhookIcon fontSize="small" />, "Hook (useState)")}
        {renderCollapseMenu(useContextMenuOpen, setUseContextMenuOpen, [{ href: "/useContext", text: "UseContext" }], <WebhookIcon fontSize="small" />, "Hook (useContext)")}
        {renderCollapseMenu(useEffectMenuOpen, setUseEffectMenuOpen, [{ href: "/useEffect", text: "UseEffect" }], <WebhookIcon fontSize="small" />, "Hook (useEffect)")}
        {renderCollapseMenu(useMemoMenuOpen, setUseMemoMenuOpen, [{ href: "/useMemo", text: "UseMemo" }], <WebhookIcon fontSize="small" />, "Hook (useMemo)")}
        {renderCollapseMenu(useReducerMenuOpen, setUseReducerMenuOpen, [{ href: "/useReducer", text: "UseReducer" }], <WebhookIcon fontSize="small" />, "Hook (useReducer)")}
        {renderCollapseMenu(apiMenuOpen, setApiMenuOpen, [{ href: "/api/weather", text: "Weather" }], <WebhookIcon fontSize="small" />, "API (Axios)")}
        {renderCollapseMenu(localizationMenuOpen, setLocalizationMenuOpen, [{ href: "/localization/i18n", text: "i18n" }], <WebhookIcon fontSize="small" />, "Localization")}
        {renderCollapseMenu(reduxMenuOpen, setReduxMenuOpen, [{ href: "/redux/counter", text: "Counter" }, { href: "/redux/weather", text: "Weather" }], <WebhookIcon fontSize="small" />, "Redux (State Mgmt)")}
      </div>
    </nav>
  );
}