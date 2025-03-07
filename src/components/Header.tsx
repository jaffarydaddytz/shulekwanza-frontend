import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

/* images */
import { profilepicture } from "../assets";

import { toggleSidebar } from "../utils";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { Box } from "@mui/joy";

export default function Header() {
  return (
    <Sheet
      sx={{
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "var(--Header-height)",
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: "1px solid",
        borderColor: "background.level1",
        boxShadow: "sm",
        backgroundColor: "background.surface",
        display: "flex",
      }}>
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "60px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "60px",
            },
          },
        })}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          width: "100%",
        }}>
        <IconButton
          onClick={() => toggleSidebar()}
          variant="outlined"
          color="neutral"
          size="sm">
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: "flex", gap: 1 }}>




        <Dropdown >
      <MenuButton sx={{width:'10px' ,height:'10px'}}>
      <img
              src={profilepicture}
              alt="shulekwanza-logo"
              height={32}
              width={33}
              style={{ borderRadius: "5px", border: "1px" }}
            />
      </MenuButton>
      <Menu sx={{mt:500}} disablePortal={true}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>

          <ColorSchemeToggle sx={{ ml: "auto" }} />
        </Box>
      </Box>
    </Sheet>
  );
}
