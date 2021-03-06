import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto w-full py-5 flex flex-row items-center justify-between px-3 lg:px-0 flex-wrap sm:flex-nowrap">
      {/* Logo Svg */}
      <div className="items-center justify-center flex w-full sm:w-auto">
        <Link to="/">
          <div className="items-center justify-center flex">
            <svg
              width="32"
              height="40"
              viewBox="0 0 32 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3487 20.3431C18.5517 25.8302 14.5914 28.1603 8.30732 32.2721C8.04697 32.4425 7.69869 32.3922 7.49921 32.1534L6.29878 30.7165C6.06901 30.4415 6.12461 30.0282 6.41643 29.8202C10.463 26.9351 12.7457 24.822 16.1801 20.7126C16.3699 20.4854 16.3688 20.1545 16.1783 19.9279L15.8039 19.4827C15.582 19.2188 15.1861 19.19 14.9283 19.419L10.5755 23.2851C8.05564 25.2791 6.94592 26.219 5.06063 27.7834C4.77639 28.0193 4.34912 27.9518 4.15188 27.6395L2.95248 25.7404C2.81635 25.5249 2.8281 25.2472 2.98218 25.0441C5.73291 21.4186 7.58052 19.28 11.1901 15.8499C11.4059 15.6449 11.4445 15.3145 11.2805 15.0661L10.9534 14.5705C10.752 14.2653 10.3285 14.2042 10.0492 14.4403C6.91367 17.0906 5.0174 18.9652 2.23522 22.1185C1.92165 22.4739 1.33882 22.3584 1.18894 21.9087L0.624075 20.2141C0.570009 20.0519 0.586573 19.8734 0.669911 19.7241C2.57651 16.3088 4.11365 14.5499 6.93564 11.8406C7.13753 11.6468 7.18427 11.3405 7.04741 11.0964L6.59147 10.2831C6.38577 9.91618 5.87993 9.861 5.59995 10.1749L1.16599 15.147C0.780187 15.5796 0.0851999 15.284 0.158356 14.709C1.13593 7.02514 5.65466 1.76594 12.4329 0.636231C23.3027 -1.1754 31.9593 8.25467 31.3058 17.2901C31.2596 17.9291 30.4053 17.9548 30.168 17.3596C28.7784 13.8745 26.1329 11.6015 21.4585 8.36115C21.2129 8.19088 20.8788 8.22303 20.6707 8.43755L19.0838 10.0733C17.1297 12.6416 18.0375 14.9717 21.3046 19.7216C21.4305 19.9046 21.4496 20.1452 21.3487 20.3431Z"
                fill="#8627E0"
              />
              <path
                d="M22.9995 18.6997C24.9138 21.5807 16.6555 29.1372 9.79133 33.5382C9.47783 33.7392 9.41578 34.1731 9.66974 34.4455C11.9272 36.8666 14.8222 39.3087 16.079 39.4013C18.8987 39.6091 28.4225 26.7906 29.5607 22.6487C29.5824 22.5694 29.5831 22.4906 29.569 22.4096C28.4194 15.8096 26.0125 13.5963 21.5789 10.1538C21.3588 9.9829 21.0449 9.98225 20.8459 10.1773C20.5559 10.4614 20.319 10.7788 19.9737 11.3298C18.8352 13.0375 21.0288 15.7338 22.9995 18.6997Z"
                fill="#8627E0"
              />
            </svg>
            <h5 className="ml-3 text-xl text-primary text">
              travel<span className="text-primary font-semibold">meet</span>
            </h5>
          </div>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center w-full sm:w-auto mt-7 sm:mt-0">
        <Link className="mr-10 sm:mr-7" to="/explore">
          <svg
            className="cursor-pointer"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.475 30.475L10 40L19.525 19.525L40 10L30.475 30.475ZM25 0C21.717 0 18.4661 0.646644 15.4329 1.90301C12.3998 3.15938 9.6438 5.00087 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C9.6438 44.9991 12.3998 46.8406 15.4329 48.097C18.4661 49.3534 21.717 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 21.717 49.3534 18.4661 48.097 15.4329C46.8406 12.3998 44.9991 9.6438 42.6777 7.32233C40.3562 5.00087 37.6002 3.15938 34.5671 1.90301C31.5339 0.646644 28.283 0 25 0ZM25 22.25C24.2707 22.25 23.5712 22.5397 23.0555 23.0555C22.5397 23.5712 22.25 24.2707 22.25 25C22.25 25.7293 22.5397 26.4288 23.0555 26.9445C23.5712 27.4603 24.2707 27.75 25 27.75C25.7293 27.75 26.4288 27.4603 26.9445 26.9445C27.4603 26.4288 27.75 25.7293 27.75 25C27.75 24.2707 27.4603 23.5712 26.9445 23.0555C26.4288 22.5397 25.7293 22.25 25 22.25Z"
              fill="#8627E0"
            />
          </svg>
        </Link>

        <Link className="mr-10 sm:mr-7" to="/messages">
          <svg
            className="cursor-pointer"
            width="30"
            height="30"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.834 0H5.83398C3.08398 0 0.858984 2.25 0.858984 5L0.833984 50L10.834 40H45.834C48.584 40 50.834 37.75 50.834 35V5C50.834 2.25 48.584 0 45.834 0ZM40.834 30H10.834V25H40.834V30ZM40.834 22.5H10.834V17.5H40.834V22.5ZM40.834 15H10.834V10H40.834V15Z"
              fill="#8627E0"
            />
          </svg>
        </Link>

        <Link className="mr-10 sm:mr-7" to="/people">
          <svg
            className="cursor-pointer"
            width="30"
            height="30"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6035 22.2222C19.5813 22.2222 21.5147 21.5706 23.1592 20.3497C24.8037 19.1288 26.0854 17.3934 26.8423 15.3632C27.5992 13.3329 27.7972 11.0988 27.4114 8.94344C27.0255 6.7881 26.0731 4.80829 24.6746 3.25437C23.2761 1.70046 21.4942 0.642226 19.5544 0.213502C17.6146 -0.215223 15.6039 0.00481423 13.7767 0.845788C11.9494 1.68676 10.3876 3.1109 9.28882 4.93811C8.19001 6.76533 7.60352 8.91355 7.60352 11.1111C7.60352 14.058 8.65708 16.8841 10.5324 18.9679C12.4078 21.0516 14.9514 22.2222 17.6035 22.2222ZM37.6035 27.7778C39.0869 27.7778 40.5369 27.289 41.7703 26.3734C43.0037 25.4577 43.965 24.1562 44.5326 22.6335C45.1003 21.1108 45.2488 19.4352 44.9594 17.8187C44.67 16.2022 43.9557 14.7173 42.9068 13.5519C41.8579 12.3865 40.5216 11.5928 39.0667 11.2712C37.6118 10.9497 36.1038 11.1147 34.7334 11.7455C33.3629 12.3762 32.1916 13.4443 31.3675 14.8147C30.5434 16.1851 30.1035 17.7963 30.1035 19.4444C30.1035 21.6546 30.8937 23.7742 32.3002 25.337C33.7067 26.8998 35.6144 27.7778 37.6035 27.7778ZM47.6035 47.2222C48.2666 47.2222 48.9024 46.9296 49.3713 46.4086C49.8401 45.8877 50.1035 45.1812 50.1035 44.4444C50.1015 41.8483 49.4447 39.3048 48.2075 37.1024C46.9704 34.9001 45.2025 33.1271 43.1044 31.9846C41.0063 30.8422 38.662 30.3759 36.3375 30.6389C34.013 30.9018 31.8014 31.8834 29.9535 33.4722C27.5048 30.7621 24.3887 28.9183 20.9981 28.1734C17.6075 27.4285 14.0943 27.8158 10.9016 29.2865C7.70885 30.7572 4.97955 33.2454 3.05787 36.4373C1.13619 39.6293 0.108191 43.382 0.103516 47.2222C0.103516 47.9589 0.366908 48.6655 0.835749 49.1864C1.30459 49.7073 1.94047 50 2.60352 50H32.6035C33.2666 50 33.9024 49.7073 34.3713 49.1864C34.8401 48.6655 35.1035 47.9589 35.1035 47.2222"
              fill="#8627E0"
            />
          </svg>
        </Link>

        {/* <svg className='cursor-pointer' width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
                </svg> */}

        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 0 }}>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link to="profile">
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
          </Link>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
