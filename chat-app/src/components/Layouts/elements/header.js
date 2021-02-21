import { AppBar, Toolbar,Typography,makeStyles,Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import HeaderData from '../headerData.json'

const useStyles = makeStyles(() => ({
    headerStyle: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      }
 }));

const Header = () => {
    const { headerStyle,logo,menuButton,toolbar } = useStyles();


    const getMenuButtons = () => {
        return HeaderData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton

              }}
            >
              {label}
            </Button>
          );
        });
      };

    return (
        <header>
            <AppBar className={headerStyle}>
                <Toolbar className={toolbar}>
                    <Typography variant="h6" component="h1" className={logo}>
                        Rooms
                    </Typography>
                     <div>{getMenuButtons()}</div>  
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header