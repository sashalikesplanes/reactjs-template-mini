import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import tonSvg from "./ton.svg";

import "./IndexPage.css";

export const IndexPage: FC = () => {
  return (
    <List>
      <Section
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <Cell
          before={<Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />}
          subtitle="Connect your TON wallet"
        >
          TON Connect
        </Cell>
      </Section>
      <Section
        header="Application Launch Data"
        footer="These pages help developer to learn more about current launch information"
      >
        <Cell subtitle="Platform identifier, Mini Apps version, etc.">
          Launch Parameters
        </Cell>
        <Cell subtitle="Telegram application palette information">
          Theme Parameters
        </Cell>
      </Section>
    </List>
  );
};
