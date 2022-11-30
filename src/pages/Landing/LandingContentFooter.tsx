import type { FC } from "react";

export const LandingContentFooter: FC = () => (
  <div className="my-4 flex items-center justify-around xs:flex-col sm:flex-row">
    <a href="/privacy-policy" className="hover:underline">
      privacy policy
    </a>
    <a href="/terms-of-use" className="hover:underline">
      terms of use
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      className="hover:underline"
      href="https://discord.gg/Dd4GyDVYTf"
    >
      support server
    </a>
  </div>
);
