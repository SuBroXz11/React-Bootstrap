const Grid = () => {
    return (
        <>
            {/* ONE Basic grid */}
            <div className="container text-center mt-2">
                <div className="row">
                    <div className="col" style={{ border: '2px solid black' }}>
                        hello world
                    </div>
                    <div className="col" style={{ border: '2px solid black' }}>
                        bye world
                    </div>
                </div>
            </div>

            {/* TWO double grid in action */}
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col" style={{ border: '2px solid red' }}>
                        1 of 2
                    </div>
                    <div className="col" style={{ border: '2px solid red' }}>
                        2 of 2
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ border: '2px solid red' }}>
                        1 of 3
                    </div>
                    <div className="col" style={{ border: '2px solid red' }}>
                        2 of 3
                    </div>
                    <div className="col" style={{ border: '2px solid red' }}>
                        3 of 3
                    </div>
                </div>
            </div>

            {/* THREE different width grid */}
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col" style={{ border: '2px solid black' }}>
                        1 of 3
                    </div>
                    <div className="col-6" style={{ border: '2px solid black' }}>
                        2 of 3 (wider)
                    </div>
                    <div className="col" style={{ border: '2px solid black' }}>
                        3 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ border: '2px solid black' }}>
                        1 of 3
                    </div>
                    <div className="col-5" style={{ border: '2px solid black' }}>
                        2 of 3 (wider)
                    </div>
                    <div className="col" style={{ border: '2px solid black' }}>
                        3 of 3
                    </div>
                </div>
            </div>

        </>
    )
}

export default Grid
