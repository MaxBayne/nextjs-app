"use client";

import { UserContext } from "@/contexts/UserContext.js";

export default function UserProvider({ children }) 
{
  return (
    <UserContext.Provider value={{ userName:"maxbayne", email:"maxbayne@gmail.com",address:"Egypt" }}>
      {children}
    </UserContext.Provider>
  );
}
