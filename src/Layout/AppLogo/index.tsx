import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Slider } from "react-burgers";

import AppMobileMenu from "../AppMobileMenu";

import {
    ThemeActions,
    type ThemeOptions,
} from "../../reducers/ThemeOptions";
import type { RootState } from "../../config/configureStore";

const HeaderLogo = () => {
    const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
    const dispatch = useDispatch();
    const [active, setActive] = useState<Boolean>(true);

    const toggleEnableClosedSidebar = () => {
        dispatch(ThemeActions.setEnableClosedSidebar(!o.enableClosedSidebar));
    };

    return (
        <>
            <div className="app-header__logo">
                <div className="logo-src" />
                <div className="header__pane ms-auto">
                    <div
                        onClick={toggleEnableClosedSidebar}
                    >
                        <Slider
                            width={26}
                            lineHeight={2}
                            lineSpacing={5}
                            color="#6c757d"
                            active={active}
                            onClick={() => setActive(!active)}
                        />
                    </div>
                </div>
            </div>
            <AppMobileMenu />
        </>
    );
}

export default HeaderLogo;
