export default function Preloader() {
    return (
        <>

            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="I" className="letters-loading">
                            T
                        </span>
                        <span data-text-preloader="N" className="letters-loading">
                            H
                        </span>
                        <span data-text-preloader="F" className="letters-loading">
                            I
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            S
                        </span>
                        <span data-text-preloader="T" className="letters-loading">
                            B
                        </span>
                        <span data-text-preloader="E" className="letters-loading">
                            E
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
