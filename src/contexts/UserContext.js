import { createContext } from "react";

export const UserContext = createContext(
{
    userName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    isLogin:false,
    isAdmin: false,
    isVendor: false,
    isCustomer: true,
    isEmployee: false,
    isManager: false,
    isOwner: false,
    isSuperAdmin: false,
    isGuest: false,
}
);