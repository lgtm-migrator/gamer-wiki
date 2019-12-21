/** @jsx jsx */
import { Header as ThemeHeader, jsx, useColorMode, Styled } from "theme-ui";
import { Link } from "gatsby";
import Navigation from "./navigation";
import SocialLinks from "./social-links";
import * as React from "react";
import WidgetBot from "@widgetbot/react-embed";
import Crate from "@widgetbot/crate";

type MetaType = {
  meta: {
    [key: string]: string;
  };
  nav: {
    title: string;
    slug: string;
  }[];
};

const Header = ({ meta, nav }: MetaType) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  const navEmpty = nav.length === 0;

  // const crate = new Crate({
  //   server: "223909216866402304",
  //   channel: "549976097996013574",
  //   shard: "https://disweb.dashflo.net"
  // });

  return (
    <React.Fragment>
      <ThemeHeader>
        {!navEmpty && <Navigation nav={nav} />}
        <div
          sx={{
            fontWeight: `bold`,
            fontSize: 4,
            display: `flex`,
            flex: navEmpty ? 1 : [`1 0 100%`, 1],
            justifyContent: navEmpty ? `flex-start` : `center`,
            order: [1, 2]
          }}
        >
          <Styled.a
            aria-label={`${meta.siteTitle}, Back to homepage`}
            as={Link}
            sx={{ color: `text`, ":hover": { color: `primary`, textDecoration: `none` } }}
            to="/"
          >
            {meta.siteTitle}
          </Styled.a>
        </div>
        <div
          sx={{
            a: {
              fontSize: 4,
              color: `text`,
              display: `flex`,
              alignItems: `center`,
              "&:hover": {
                color: `primary`
              },
              "&:not(:first-of-type)": {
                ml: 2
              }
            },
            justifyContent: `flex-end`,
            flex: 1,
            display: `flex`,
            order: 3
          }}
        >
          <SocialLinks />
          <button
            sx={{ variant: `buttons.toggle`, fontWeight: `semibold` }}
            onClick={toggleColorMode}
            type="button"
            aria-label="Toggle dark mode"
          >
            {isDark ? `Light` : `Dark`}
          </button>
        </div>
      </ThemeHeader>
      {typeof window === "undefined" ? null : (
        <WidgetBot
          server="223909216866402304"
          channel="328662219086888961"
          shard="https://disweb.dashflo.net"
          width="100%"
          style={{ height: 700 }}
        />
      )}
      <widgetbot server="223909216866402304" channel="549976097996013574" id="embed"></widgetbot>
    </React.Fragment>
  );
};

export default Header;
