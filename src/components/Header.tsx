import { useEffect, useRef, useState } from "react";
import styles from "../styles/Header.module.css";
import Button from "./forms/Button";
import { Settings, User } from "lucide-react";
import ReactSvg from "../assets/react.svg";

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
  className?: string;
}
export default function Header({
  title = "Untitled",
  actions,
}: {
  title?: string;
  actions: React.ReactNode;
}) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.actions}>{actions}</div>
      <ProfileDropdown />
    </header>
  );
}

function ProfileDropdown() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div ref={ref} className={`${styles.dropDown}`}>
      <div className={`${styles.toggleButton} ${isOpen && styles.show}`}>
        <Button
          icon={<img src={ReactSvg} />}
          className={styles.button}
          handleClick={() => openMenu()}
        />
      </div>
      <div className={`${styles.content} ${isOpen && styles.show}`}>
        <NavItem text="Profile" icon={<User />} />
        <NavItem text="Settings" icon={<Settings />} />
      </div>
    </div>
  );
}

function NavItem({ icon, text, link, className }: NavItemProps) {
  return (
    <a href={link} className={className ?? styles.navItem}>
      {icon} {text}
    </a>
  );
}
