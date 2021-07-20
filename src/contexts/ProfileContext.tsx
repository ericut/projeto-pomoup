import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { ProfileNameModal } from "../components/ProfileNameModal";

interface ProfileContextData {
  name: string;
  gitHub: string;
  closeProfileNameModal: (newName, gitHub) => void;
}

interface ProfileProviderProps {
  children: ReactNode;
  name: string;
  gitHub: string;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children, ...rest }: ProfileProviderProps) {
  const [name, setName] = useState(rest.name !== "undefined" ? rest.name : "");
  const [gitHub, setGitHub] = useState(
    rest.gitHub !== "undefined" ? rest.gitHub : ""
  );
  const [isProfileNameModalOpen, setIsProfileNameModalOpen] = useState(false);

  useEffect(() => {
    if (rest.name === "undefined" || rest.gitHub === "undefined") {
      setIsProfileNameModalOpen(true);
    }
  }, []);

  useEffect(() => {
    Cookies.set("name", String(name));
    Cookies.set("gitHub", String(gitHub));
  }, [name]);

  function closeProfileNameModal(newName, gitUser) {
    setName(newName);
    setGitHub(gitUser);
    setIsProfileNameModalOpen(false);
  }

  return (
    <ProfileContext.Provider
      value={{
        name,
        closeProfileNameModal,
        gitHub,
      }}
    >
      {children}
      {isProfileNameModalOpen && <ProfileNameModal />}
    </ProfileContext.Provider>
  );
}
