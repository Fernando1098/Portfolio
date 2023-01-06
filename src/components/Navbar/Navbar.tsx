import { linksNavbars } from "@/data/linksNavbar";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { SideBar } from "../SideBar";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const theme = useTheme();
  const isMatchMediaQuery = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#fff", color: "#000", top: 0, left: 0 }}
    >
      <Toolbar
        sx={{
          backgroundColor: "transparent",
          borderBottomColor: "1.5px solid #d0d0d0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {isMatchMediaQuery ? (
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginLeft: "auto",
            }}
          >
            <IconButton
              sx={{ color: "#144272" }}
              onClick={() => setOpenDrawer(true)}
            >
              <Menu sx={{ fontSize: 25 }} />
            </IconButton>
          </div>
        ) : (
          <>
            <Typography
              style={{ fontFamily: "Montserrat" }}
              variant="h6"
              sx={{ color: "#144272", fontWeight: "bold" }}
              component="div"
            >
              FeloDev
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "14px",
              }}
            >
              {linksNavbars.map((link: any) => (
                <ul
                  className="links-list"
                  style={{
                    display: "flex",
                    listStyle: "none",
                    fontFamily: "Montserrat",
                  }}
                  key={link.id}
                >
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    className="link"
                  >
                    {link.icon}{" "}
                    <h5
                      style={{ fontSize: 14, color: "#144272", marginLeft: 3 }}
                    >
                      {link.title}
                    </h5>
                  </li>
                </ul>
              ))}
            </Box>
          </>
        )}

        <SideBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
