import withRouter from "../../dev/withRouter.tsx";
import RouterLink from "../../dev/react-metismenu-router-link/RouterLink.tsx";

import MetisMenu from "react-metismenu";

import {
    UpgradeNav,
    MainNav,
    ComponentsNav,
    FormsNav,
    WidgetsNav,
    ChartsNav,
    PagesNav,
    ApplicationsNav,
} from "./NavItems";

export function Nav() {

    return (<>
        <h5 className="app-sidebar__heading">Pro Version</h5>
        <MetisMenu
            content={UpgradeNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu
            content={MainNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">UI Components</h5>
        <MetisMenu
            content={ComponentsNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">Dashboard Widgets</h5>
        <MetisMenu
            content={WidgetsNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">Forms</h5>
        <MetisMenu
            content={FormsNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">Charts</h5>
        <MetisMenu
            content={ChartsNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Pages</h5>
        <MetisMenu
            content={PagesNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Applications</h5>
        <MetisMenu
            content={ApplicationsNav}
            LinkComponent={RouterLink}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
        />
    </>
    );
}

// export default withRouter(Nav);
