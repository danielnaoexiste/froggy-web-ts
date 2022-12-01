import type { FC } from "react";
import { Link } from "react-router-dom";

export const LandingContentFooter: FC = () => (
  <footer className="my-4 flex items-center justify-around xs:flex-col sm:flex-row">
    <Link to="/privacy-policy" className="hover:underline">
      privacy policy
    </Link>
    <Link to="/terms-of-use" className="hover:underline">
      terms of use
    </Link>
    <a
      target="_blank"
      rel="noreferrer"
      className="hover:underline"
      href="https://discord.gg/Dd4GyDVYTf"
    >
      support server
    </a>
  </footer>
);
