import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import styles from "../styles/components/ProfileNameModal.module.css";

export function ProfileNameModal() {
  const [newName, setNewName] = useState("");
  const [newGitHub, setNewGitHub] = useState("");

  const { closeProfileNameModal } = useContext(ProfileContext);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <header>Bem-vindo ao PomoUp</header>
        <div>
          <p>Qual é o seu nome?</p>
          <input type="text" onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <p>Qual é o seu GitHub?</p>
          <input type="text" onChange={(e) => setNewGitHub(e.target.value)} />
        </div>

        <button
          type="button"
          onClick={() => closeProfileNameModal(newName, newGitHub)}
        >
          Comece a utilizar!
        </button>
      </div>
    </div>
  );
}
