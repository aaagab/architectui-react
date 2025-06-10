import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import BasicPagination from "./Examples/Basic";

export default class PaginationExamples extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition nodeRef={this.ref} component="div" classNames="TabsAnimation" appear={true} timeout={1500} enter={false} exit={false}>
                        <div>
                            <PageTitle
                                heading="Pagination"
                                subheading="Basic and dynamic pagination for use in your next awesome application."
                                icon="pe-7s-notebook icon-gradient bg-mixed-hopes"
                            />
                            <BasicPagination />
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
