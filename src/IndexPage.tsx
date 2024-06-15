import { Section, Cell, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import "./IndexPage.css";

export const IndexPage: FC = () => {
  return (
    <List>
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
