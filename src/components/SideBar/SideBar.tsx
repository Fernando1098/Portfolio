import { linksNavbars } from "@/data/linksNavbar";
import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import React from "react";
export interface SideBarInterface {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarInterface> = ({ openDrawer, setOpenDrawer }) => {
  const closeDrawer = () => setOpenDrawer(false);
  return (
    <Drawer open={openDrawer}>
      <List sx={{ width: 250 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            mb: 1,
          }}
        >
          <Typography
            style={{ fontFamily: "Montserrat" }}
            variant="h6"
            sx={{ color: "#144272", fontWeight: "bold", marginLeft: 1.5 }}
            component="div"
          >
            FeloDev
          </Typography>

          <IconButton onClick={closeDrawer} sx={{ color: "#144272" }}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        {linksNavbars.map((link) => (
          <ListItemButton key={link.id}>
            <ListItemIcon sx={{ color: "#144272" }}>{link.icon}</ListItemIcon>
            <ListItemText primary={link.title} sx={{ color: "#144272" }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
