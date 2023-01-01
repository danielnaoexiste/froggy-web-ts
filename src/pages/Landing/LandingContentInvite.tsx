import type { FC } from "react";
import { useCallback } from "react";

import Icon from "../../assets/icon.png";

import { FaDiscord } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { Box, Button, Text } from "@danielnaoexiste/froggy-components";

export const LandingContentInvite: FC = () => {
  const redirect = useCallback(() => {
    window.location.href = import.meta.env.VITE_DISCORD_REDIRECT;
  }, []);

  const invite = useCallback(() => {
    window.open(
      import.meta.env.VITE_INVITE_URL,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <Box
      id="invite-section"
      height="96vh"
      display="flex"
      alignSelf="center"
      alignItems="center"
      width={{ _: "100%", web: "67%" }}
      flexDirection={{ _: "column", web: "row-reverse" }}
      justifyContent={{ _: "center", web: "space-around" }}
    >
      <Box
        mb={{ _: 11, web: 0 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={{ _: "8rem", mobile: "12rem", web: "19rem" }}
      >
        <img
          src={Icon}
          alt="icon"
          style={{ borderRadius: "9999px", width: "100%", height: "100%" }}
        />
      </Box>

      <Box style={{ minWidth: "256px" }} />

      <Box display="flex" flexDirection="column" width="90%" mb={4}>
        <Box
          display="flex"
          fontWeight="medium"
          justifyContent={{ _: "center", web: "flex-start" }}
        >
          <Text color="primary" fontSize={{ _: "24px", tablet: "48px" }}>
            Froggy
          </Text>
          <Text ml={8} fontSize={{ _: "24px", tablet: "48px" }}>
            Bot
          </Text>
        </Box>

        <Text
          pt={4}
          fontSize={{ _: "16px", tablet: "24px" }}
          px={{ _: 8, tablet: 0 }}
          textAlign={{ _: "center", web: "left" }}
        >
          customizable general purpose bot for moderators and anime fans.
        </Text>

        <Box
          display="flex"
          my={{ _: 11, web: 8 }}
          justifyContent={{ _: "center", web: "flex-start" }}
          style={{ gap: ".5rem" }}
        >
          <Button
            onClick={() => invite()}
            prefix={<FaDiscord />}
            label="invite"
            variant="outlined"
          />
          <Button
            onClick={() => redirect()}
            prefix={<MdSettings />}
            label="dashboard"
            variant="outlined"
          />
        </Box>
      </Box>
    </Box>
  );
};
