import { useTheme } from '@material-ui/core/styles';
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../styles/theme";


const SidebarMenuItem = ({ menu, selected, setSelected }) => {

    const themes = useTheme();
    const color = tokens(themes.palette.mode);

    return (
        <MenuItem
            icon={<menu.icon />}
            active={selected === menu.path}
            onClick={() => setSelected(menu.path)}
            style={{ color: color.primary[100] }}
        >
            <Link to={menu.path}>{menu.title}</Link>
        </MenuItem>
    );
};

export default SidebarMenuItem