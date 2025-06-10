import { Suspense } from "react";
import Loader from "react-loaders";
import { Outlet, useLocation } from "react-router-dom";

const CustomSuspense = ({ text }: { text: string }) => {
    const location = useLocation();
    return (
        <>

            <Suspense
                key={location.key}
                fallback={
                    <div className="custom-loader-container">
                        <div className="loader-container-inner">
                            <div className="text-center">
                                <Loader type="ball-beat" active={true} />
                            </div>
                            <h6 className="mt-3">
                                Please wait while we load all the {text}
                                examples
                                <small>
                                    Because this is a demonstration, we load at
                                    once all the {text} examples. This
                                    wouldn't happen in a real live app!
                                </small>
                            </h6>
                        </div>
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </>
    );
};

export default CustomSuspense;
