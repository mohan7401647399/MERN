import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [blogLists, setBlogLists] = useState([]);
  const [pending, setPending] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        blogLists,
        setBlogLists,
        pending,
        setPending,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
