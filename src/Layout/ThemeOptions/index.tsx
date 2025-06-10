import { useState } from 'react';
import cx from 'classnames';

import {
    Button, ListGroup, ListGroupItem, ButtonGroup,
    UncontrolledTooltip
} from 'reactstrap';

import sideBar1 from '../../assets/utils/images/sidebar/abstract1.jpg';
import sideBar2 from '../../assets/utils/images/sidebar/abstract2.jpg';
import sideBar3 from '../../assets/utils/images/sidebar/abstract3.jpg';
import sideBar4 from '../../assets/utils/images/sidebar/abstract4.jpg';
import sideBar5 from '../../assets/utils/images/sidebar/abstract5.jpg';

import sideBar6 from '../../assets/utils/images/sidebar/city1.jpg';
import sideBar7 from '../../assets/utils/images/sidebar/city2.jpg';
import sideBar8 from '../../assets/utils/images/sidebar/city3.jpg';
import sideBar9 from '../../assets/utils/images/sidebar/city4.jpg';
import sideBar10 from '../../assets/utils/images/sidebar/city5.jpg';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCog,
    faCheck
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActions, type ThemeOptions } from '../../reducers/ThemeOptions';
import type { RootState } from '../../config/configureStore';

const LayoutThemeOptions = () => {
    const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
    const dispatch = useDispatch();
    const [showing, setShowing] = useState<boolean>(false);

    const toggleEnableBackgroundImage = () => {
        dispatch(ThemeActions.setEnableBackgroundImage(!o.enableBackgroundImage));
    }

    const toggleEnableFixedHeader = () => {
        dispatch(ThemeActions.setEnableFixedHeader(!o.enableFixedHeader));
    }

    const toggleEnableHeaderShadow = () => {
        dispatch(ThemeActions.setEnableHeaderShadow(!o.enableHeaderShadow));
    }

    const toggleEnableSidebarShadow = () => {
        dispatch(ThemeActions.setEnableSidebarShadow(!o.enableSidebarShadow));
    }

    const toggleEnableFixedSidebar = () => {
        dispatch(ThemeActions.setEnableFixedSidebar(!o.enableFixedSidebar));
    }

    const toggleEnablePageTitleIcon = () => {
        dispatch(ThemeActions.setEnablePageTitleIcon(!o.enablePageTitleIcon));
    }

    const toggleEnablePageTitleSubheading = () => {
        dispatch(ThemeActions.setEnablePageTitleSubheading(!o.enablePageTitleSubheading));
    }

    const toggleEnablePageTabsAlt = () => {
        dispatch(ThemeActions.setEnablePageTabsAlt(!o.enablePageTabsAlt));
    }

    const toggleEnableFixedFooter = () => {
        dispatch(ThemeActions.setEnableFixedFooter(!o.enableFixedFooter));
    }

    // @ts-ignore
    const setEnableBackgroundImage = (enable) => { dispatch(ThemeActions.setEnableBackgroundImage(enable)) };
    // @ts-ignore
    const setEnableFixedHeader = (enable) => { dispatch(ThemeActions.setEnableFixedHeader(enable)) };
    // @ts-ignore
    const setEnableHeaderShadow = (enable) => { dispatch(ThemeActions.setEnableHeaderShadow(enable)) };
    // @ts-ignore
    const setEnableSidebarShadow = (enable) => { dispatch(ThemeActions.setEnableSidebarShadow(enable)) };
    // @ts-ignore
    const setEnableFixedFooter = (enable) => { dispatch(ThemeActions.setEnableFixedFooter(enable)) };
    // @ts-ignore
    const setEnableFixedSidebar = (enable) => { dispatch(ThemeActions.setEnableFixedSidebar(enable)) };
    // @ts-ignore
    const setEnablePageTitleIcon = (enable) => { dispatch(ThemeActions.setEnablePageTitleIcon(enable)) };
    // @ts-ignore
    const setEnablePageTitleSubheading = (enable) => { dispatch(ThemeActions.setEnablePageTitleSubheading(enable)) };
    // @ts-ignore
    const setEnablePageTabsAlt = (enable) => { dispatch(ThemeActions.setEnablePageTabsAlt(enable)) };

    const setBackgroundImage = (image) => { dispatch(ThemeActions.setBackgroundImage(image)) };
    const setColorScheme = (color) => { dispatch(ThemeActions.setColorScheme(color)) };
    const setBackgroundColor = (color) => { dispatch(ThemeActions.setBackgroundColor(color)) };
    const setHeaderBackgroundColor = (color) => { dispatch(ThemeActions.setHeaderBackgroundColor(color)) };
    const setBackgroundImageOpacity = (color) => { dispatch(ThemeActions.setBackgroundImageOpacity(color)) };

    return (
        <div className={"ui-theme-settings " + (showing ? 'settings-open' : '')}>
            <Button className="btn-open-options" id="TooltipDemo" color="warning" onClick={() => setShowing(!showing)}>
                <FontAwesomeIcon icon={faCog} spin color="#573a04" fixedWidth={false} size="2x" />
            </Button>
            <UncontrolledTooltip placement="left" target={'TooltipDemo'}>
                Open Layout Configurator
            </UncontrolledTooltip>
            <div className="theme-settings__inner">
                <PerfectScrollbar>
                    <div className="theme-settings__options-wrapper">
                        <h3 className="themeoptions-heading"> Layout Options</h3>
                        <div className="p-3">
                            <ListGroup>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnableFixedHeader}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enableFixedHeader,
                                                        'switch-off': !o.enableFixedHeader
                                                    })}>
                                                        <input type="checkbox" /><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                                className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Fixed Header
                                                </div>
                                                <div className="widget-subheading">
                                                    Makes the header top fixed, always visible!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enableFixedHeader,
                                                'd-none': !o.enableFixedHeader
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnableFixedSidebar}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enableFixedSidebar,
                                                        'switch-off': !o.enableFixedSidebar
                                                    })}>
                                                        <input type="checkbox" /><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                                className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Fixed Sidebar
                                                </div>
                                                <div className="widget-subheading">
                                                    Makes the sidebar left fixed, always visible!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enableFixedSidebar,
                                                'd-none': !o.enableFixedSidebar
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnableFixedFooter}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enableFixedFooter,
                                                        'switch-off': !o.enableFixedFooter
                                                    })}>
                                                        <input type="checkbox" /><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                                className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Fixed Footer
                                                </div>
                                                <div className="widget-subheading">
                                                    Makes the app footer bottom fixed, always visible!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enableFixedFooter,
                                                'd-none': !o.enableFixedFooter
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Header Options</div>
                            <Button size="sm" color="focus"
                                className={cx("btn-pill btn-shadow btn-wide ms-auto", { active: o.headerBackgroundColor === '' })}
                                onClick={() => setHeaderBackgroundColor("")}>
                                Restore Default
                            </Button>
                        </h3>
                        <div className="p-3">
                            <ListGroup>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnableHeaderShadow}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enableHeaderShadow,
                                                        'switch-off': !o.enableHeaderShadow
                                                    })}>
                                                        <input type="checkbox" /><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                                className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Header Shadow
                                                </div>
                                                <div className="widget-subheading">
                                                    Add a shadow for the header!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enableHeaderShadow,
                                                'd-none': !o.enableHeaderShadow
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5 className="pb-2">Choose Color Scheme</h5>
                                    <div className="theme-settings-swatches">
                                        <div className={cx("swatch-holder bg-primary", { active: o.headerBackgroundColor === 'bg-primary header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-primary header-text-light")} />
                                        <div className={cx("swatch-holder bg-secondary", { active: o.headerBackgroundColor === 'bg-secondary header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-secondary header-text-light")} />
                                        <div className={cx("swatch-holder bg-success", { active: o.headerBackgroundColor === 'bg-success header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-success header-text-light")} />
                                        <div className={cx("swatch-holder bg-info", { active: o.headerBackgroundColor === 'bg-info header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-info header-text-light")} />
                                        <div className={cx("swatch-holder bg-warning", { active: o.headerBackgroundColor === 'bg-warning header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-warning header-text-dark")} />
                                        <div className={cx("swatch-holder bg-danger", { active: o.headerBackgroundColor === 'bg-danger header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-danger header-text-light")} />
                                        <div className={cx("swatch-holder bg-light", { active: o.headerBackgroundColor === 'bg-light header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-light header-text-dark")} />
                                        <div className={cx("swatch-holder bg-dark", { active: o.headerBackgroundColor === 'bg-dark header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-dark header-text-light")} />
                                        <div className={cx("swatch-holder bg-focus", { active: o.headerBackgroundColor === 'bg-focus header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-focus header-text-light")} />
                                        <div className={cx("swatch-holder bg-alternate", { active: o.headerBackgroundColor === 'bg-alternate header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-alternate header-text-light")} />

                                        <div className="divider" />

                                        <div className={cx("swatch-holder bg-vicious-stance", { active: o.headerBackgroundColor === 'bg-vicious-stance header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-vicious-stance header-text-light")} />
                                        <div className={cx("swatch-holder bg-midnight-bloom", { active: o.headerBackgroundColor === 'bg-midnight-bloom header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-midnight-bloom header-text-light")} />
                                        <div className={cx("swatch-holder bg-night-sky", { active: o.headerBackgroundColor === 'bg-night-sky header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-night-sky header-text-light")} />
                                        <div className={cx("swatch-holder bg-slick-carbon", { active: o.headerBackgroundColor === 'bg-slick-carbon header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-slick-carbon header-text-light")} />
                                        <div className={cx("swatch-holder bg-asteroid", { active: o.headerBackgroundColor === 'bg-asteroid header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-asteroid header-text-light")} />
                                        <div className={cx("swatch-holder bg-royal", { active: o.headerBackgroundColor === 'bg-royal header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-royal header-text-light")} />
                                        <div className={cx("swatch-holder bg-warm-flame", { active: o.headerBackgroundColor === 'bg-warm-flame header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-warm-flame header-text-dark")} />
                                        <div className={cx("swatch-holder bg-night-fade", { active: o.headerBackgroundColor === 'bg-night-fade header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-night-fade header-text-dark")} />
                                        <div className={cx("swatch-holder bg-sunny-morning", { active: o.headerBackgroundColor === 'bg-sunny-morning header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-sunny-morning header-text-dark")} />
                                        <div className={cx("swatch-holder bg-tempting-azure", { active: o.headerBackgroundColor === 'bg-tempting-azure header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-tempting-azure header-text-dark")} />
                                        <div className={cx("swatch-holder bg-amy-crisp", { active: o.headerBackgroundColor === 'bg-amy-crisp header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-amy-crisp header-text-dark")} />
                                        <div className={cx("swatch-holder bg-heavy-rain", { active: o.headerBackgroundColor === 'bg-heavy-rain header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-heavy-rain header-text-dark")} />
                                        <div className={cx("swatch-holder bg-mean-fruit", { active: o.headerBackgroundColor === 'bg-mean-fruit header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-mean-fruit header-text-dark")} />
                                        <div className={cx("swatch-holder bg-malibu-beach", { active: o.headerBackgroundColor === 'bg-malibu-beach header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-malibu-beach header-text-dark")} />
                                        <div className={cx("swatch-holder bg-deep-blue", { active: o.headerBackgroundColor === 'bg-deep-blue header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-deep-blue header-text-dark")} />
                                        <div className={cx("swatch-holder bg-ripe-malin", { active: o.headerBackgroundColor === 'bg-ripe-malin header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-ripe-malin header-text-light")} />
                                        <div className={cx("swatch-holder bg-arielle-smile", { active: o.headerBackgroundColor === 'bg-arielle-smile header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-arielle-smile header-text-light")} />
                                        <div className={cx("swatch-holder bg-plum-plate", { active: o.headerBackgroundColor === 'bg-plum-plate header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-plum-plate header-text-light")} />
                                        <div className={cx("swatch-holder bg-happy-fisher", { active: o.headerBackgroundColor === 'bg-happy-fisher header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-happy-fisher header-text-dark")} />
                                        <div className={cx("swatch-holder bg-happy-itmeo", { active: o.headerBackgroundColor === 'bg-happy-itmeo header-text-dark' })}
                                            onClick={() => setHeaderBackgroundColor("bg-happy-itmeo header-text-dark")} />
                                        <div className={cx("swatch-holder bg-mixed-hopes", { active: o.headerBackgroundColor === 'bg-mixed-hopes header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-mixed-hopes header-text-light")} />
                                        <div className={cx("swatch-holder bg-strong-bliss", { active: o.headerBackgroundColor === 'bg-strong-bliss header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-strong-bliss header-text-light")} />
                                        <div className={cx("swatch-holder bg-grow-early", { active: o.headerBackgroundColor === 'bg-grow-early header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-grow-early header-text-light")} />
                                        <div className={cx("swatch-holder bg-love-kiss", { active: o.headerBackgroundColor === 'bg-love-kiss header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-love-kiss header-text-light")} />
                                        <div className={cx("swatch-holder bg-premium-dark", { active: o.headerBackgroundColor === 'bg-premium-dark header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-premium-dark header-text-light")} />
                                        <div className={cx("swatch-holder bg-happy-green", { active: o.headerBackgroundColor === 'bg-happy-green header-text-light' })}
                                            onClick={() => setHeaderBackgroundColor("bg-happy-green header-text-light")} />
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Sidebar Options</div>
                            <Button size="sm" color="focus"
                                className={cx("btn-pill btn-shadow btn-wide ms-auto", { active: o.backgroundColor === '' })}
                                onClick={() => setBackgroundColor("")}>
                                Restore Default
                            </Button>
                        </h3>
                        <div className="p-3">
                            <ListGroup>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnableBackgroundImage}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enableBackgroundImage,
                                                        'switch-off': !o.enableBackgroundImage
                                                    })}>
                                                        <input type="checkbox" />
                                                        <span className="switch-left bg-success">ON</span>
                                                        <label>&nbsp;</label>
                                                        <span className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Sidebar Background Image
                                                </div>
                                                <div className="widget-subheading">
                                                    Enable background images for sidebar!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enableBackgroundImage,
                                                'd-none': !o.enableBackgroundImage
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnableSidebarShadow}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enableSidebarShadow,
                                                        'switch-off': !o.enableSidebarShadow
                                                    })}>
                                                        <input type="checkbox" />
                                                        <span className="switch-left bg-success">ON</span>
                                                        <label>&nbsp;</label>
                                                        <span className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Sidebar Shadow
                                                </div>
                                                <div className="widget-subheading">
                                                    Add a shadow for the sidebar!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enableSidebarShadow,
                                                'd-none': !o.enableSidebarShadow
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5 className="pb-2">Choose Color Scheme</h5>
                                    <div className="theme-settings-swatches">
                                        <div className={cx("swatch-holder bg-primary", { active: o.backgroundColor === 'bg-primary sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-primary sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-secondary", { active: o.backgroundColor === 'bg-secondary sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-secondary sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-success", { active: o.backgroundColor === 'bg-success sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-success sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-info", { active: o.backgroundColor === 'bg-info sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-info sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-warning", { active: o.backgroundColor === 'bg-warning sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-warning sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-danger", { active: o.backgroundColor === 'bg-danger sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-danger sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-light", { active: o.backgroundColor === 'bg-light sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-light  sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-dark", { active: o.backgroundColor === 'bg-dark sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-dark sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-focus", { active: o.backgroundColor === 'bg-focus sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-focus sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-alternate", { active: o.backgroundColor === 'bg-alternate sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-alternate sidebar-text-light")} />

                                        <div className="divider" />

                                        <div className={cx("swatch-holder bg-vicious-stance", { active: o.backgroundColor === 'bg-vicious-stance sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-vicious-stance sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-midnight-bloom", { active: o.backgroundColor === 'bg-midnight-bloom sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-midnight-bloom sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-night-sky", { active: o.backgroundColor === 'bg-night-sky sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-night-sky sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-slick-carbon", { active: o.backgroundColor === 'bg-slick-carbon sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-slick-carbon sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-asteroid", { active: o.backgroundColor === 'bg-asteroid sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-asteroid sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-royal", { active: o.backgroundColor === 'bg-royal sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-royal sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-warm-flame", { active: o.backgroundColor === 'bg-warm-flame sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-warm-flame sidebar-text-dark")} />
                                        <div
                                            className={cx("swatch-holder bg-night-fade", { active: o.backgroundColor === 'bg-night-fade sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-night-fade sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-sunny-morning", { active: o.backgroundColor === 'bg-sunny-morning sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-sunny-morning sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-tempting-azure", { active: o.backgroundColor === 'bg-tempting-azure sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-tempting-azure sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-amy-crisp", { active: o.backgroundColor === 'bg-amy-crisp sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-amy-crisp sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-heavy-rain", { active: o.backgroundColor === 'bg-heavy-rain sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-heavy-rain sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-mean-fruit", { active: o.backgroundColor === 'bg-mean-fruit sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-mean-fruit sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-malibu-beach", { active: o.backgroundColor === 'bg-malibu-beach sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-malibu-beach sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-deep-blue", { active: o.backgroundColor === 'bg-deep-blue sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-deep-blue sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-ripe-malin", { active: o.backgroundColor === 'bg-ripe-malin sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-ripe-malin sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-arielle-smile", { active: o.backgroundColor === 'bg-arielle-smile sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-arielle-smile sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-plum-plate", { active: o.backgroundColor === 'bg-plum-plate sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-plum-plate sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-happy-fisher", { active: o.backgroundColor === 'bg-happy-fisher sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-happy-fisher sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-happy-itmeo", { active: o.backgroundColor === 'bg-happy-itmeo sidebar-text-dark' })}
                                            onClick={() => setBackgroundColor("bg-happy-itmeo sidebar-text-dark")} />
                                        <div className={cx("swatch-holder bg-mixed-hopes", { active: o.backgroundColor === 'bg-mixed-hopes sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-mixed-hopes sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-strong-bliss", { active: o.backgroundColor === 'bg-strong-bliss sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-strong-bliss sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-grow-early", { active: o.backgroundColor === 'bg-grow-early sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-grow-early sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-love-kiss", { active: o.backgroundColor === 'bg-love-kiss sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-love-kiss sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-premium-dark", { active: o.backgroundColor === 'bg-premium-dark sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-premium-dark sidebar-text-light")} />
                                        <div className={cx("swatch-holder bg-happy-green", { active: o.backgroundColor === 'bg-happy-green sidebar-text-light' })}
                                            onClick={() => setBackgroundColor("bg-happy-green sidebar-text-light")} />
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem
                                    className={cx("theme-settings-swatches", {
                                        'd-block': o.enableBackgroundImage,
                                        'd-none': !o.enableBackgroundImage
                                    })}>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Background Opacity
                                                </div>
                                            </div>
                                            <div className="widget-content-right">
                                                <ButtonGroup size="sm">
                                                    <Button className={cx("btn-shadow opacity-3", { active: o.backgroundImageOpacity === 'opacity-04' })}
                                                        color="primary"
                                                        onClick={() => setBackgroundImageOpacity("opacity-04")}>4%
                                                    </Button>
                                                    <Button className={cx("btn-shadow opacity-4", { active: o.backgroundImageOpacity === 'opacity-06' })}
                                                        color="primary"
                                                        onClick={() => setBackgroundImageOpacity("opacity-06")}>6%
                                                    </Button>
                                                    <Button className={cx("btn-shadow opacity-5", { active: o.backgroundImageOpacity === 'opacity-08' })}
                                                        color="primary"
                                                        onClick={() => setBackgroundImageOpacity("opacity-08")}>8%
                                                    </Button>
                                                    <Button className={cx("btn-shadow opacity-6", { active: o.backgroundImageOpacity === 'opacity-1' })}
                                                        color="primary"
                                                        onClick={() => setBackgroundImageOpacity("opacity-1")}>10%
                                                    </Button>
                                                    <Button className={cx("btn-shadow opacity-7", { active: o.backgroundImageOpacity === 'opacity-15' })}
                                                        color="primary"
                                                        onClick={() => setBackgroundImageOpacity("opacity-15")}>15%
                                                    </Button>
                                                    <Button className={cx("btn-shadow opacity-8", { active: o.backgroundImageOpacity === 'opacity-2' })}
                                                        color="primary"
                                                        onClick={() => setBackgroundImageOpacity("opacity-2")}
                                                    >20%</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem
                                    className={cx("theme-settings-swatches", {
                                        'd-block': o.enableBackgroundImage,
                                        'd-none': !o.enableBackgroundImage
                                    })}>
                                    <h5>Sidebar Image Background</h5>
                                    <div className="divider" />
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar6 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar6)}>
                                            <img alt=" " src={sideBar6} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar7 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar7)}>
                                            <img alt=" " src={sideBar7} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar8 })}>
                                        <button className="img-holder switch-trigger"
                                            onClick={() => setBackgroundImage(sideBar8)}>
                                            <img alt=" " src={sideBar8} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar9 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar9)}>
                                            <img alt=" " src={sideBar9} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar10 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar10)}>
                                            <img alt=" " src={sideBar10} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar1 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar1)}>
                                            <img alt=" " src={sideBar1} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar2 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar2)}>
                                            <img alt=" " src={sideBar2} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar3 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar3)}>
                                            <img alt=" " src={sideBar3} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar4 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar4)}>
                                            <img alt=" " src={sideBar4} />
                                        </button>
                                    </div>
                                    <div className={cx("swatch-holder swatch-holder-img", { active: o.backgroundImage === sideBar5 })}>
                                        <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar5)}>
                                            <img alt=" " src={sideBar5} />
                                        </button>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Main Content Options</div>
                            <Button size="sm" color="focus"
                                className={cx("btn-pill btn-shadow btn-wide ms-auto", { active: o.colorScheme === 'white' })}
                                onClick={() => setColorScheme("white")}>
                                Restore Default
                            </Button>
                        </h3>
                        <div className="p-3">
                            <ListGroup>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnablePageTitleIcon}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enablePageTitleIcon,
                                                        'switch-off': !o.enablePageTitleIcon
                                                    })}>
                                                        <input type="checkbox" />
                                                        <span className="switch-left bg-success">ON</span>
                                                        <label>&nbsp;</label>
                                                        <span className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Page Title Icon
                                                </div>
                                                <div className="widget-subheading">
                                                    Enable the icon box for page titles!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enablePageTitleIcon,
                                                'd-none': !o.enablePageTitleIcon
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnablePageTitleSubheading}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enablePageTitleSubheading,
                                                        'switch-off': !o.enablePageTitleSubheading
                                                    })}>
                                                        <input type="checkbox" />
                                                        <span className="switch-left bg-success">ON</span>
                                                        <label>&nbsp;</label>
                                                        <span className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Page Title Description
                                                </div>
                                                <div className="widget-subheading">
                                                    Enable the description below page title!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enablePageTitleSubheading,
                                                'd-none': !o.enablePageTitleSubheading
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left me-3">
                                                <div className="switch has-switch" data-on-label="ON"
                                                    data-off-label="OFF"
                                                    onClick={toggleEnablePageTabsAlt}>
                                                    <div className={cx("switch-animate", {
                                                        'switch-on': o.enablePageTabsAlt,
                                                        'switch-off': !o.enablePageTabsAlt
                                                    })}>
                                                        <input type="checkbox" />
                                                        <span className="switch-left bg-success">ON</span>
                                                        <label>&nbsp;</label>
                                                        <span className="switch-right bg-success">OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    Page Section Shadow Tabs
                                                </div>
                                                <div className="widget-subheading">
                                                    Enable an alternate style for the page sections tabs!
                                                </div>
                                            </div>
                                            <div className={cx("widget-content-right text-success opacity-6", {
                                                'd-block': o.enablePageTabsAlt,
                                                'd-none': !o.enablePageTabsAlt
                                            })}>
                                                <FontAwesomeIcon size="2x" icon={faCheck} />
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5 className="pb-2">Light Color Schemes</h5>
                                    <div className="theme-settings-swatches">
                                        <ButtonGroup className="mt-2">
                                            <Button className={cx("btn-wide btn-shadow btn-primary", { active: o.colorScheme === 'white' })}
                                                onClick={() => setColorScheme("white")}>White Theme
                                            </Button>
                                            <Button className={cx("btn-wide btn-shadow btn-primary", { active: o.colorScheme === 'gray' })}
                                                onClick={() => setColorScheme("gray")}>Gray Theme
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </div>
    );
}

export default LayoutThemeOptions;
