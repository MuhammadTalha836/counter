import React, { useState } from 'react'

export default function Hero() {

    const [count, setCount] = useState(0);



    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="main">
                        <div id="tasbi">

                            <div class="row">
                                <div class="col">
                                    <div className='input'>
                                        <p className='num'>{count}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="d-grid gap-2 col-6 mx-auto py-5">
                                        <button className="btn btn-primary btn-lg mt-4" type="button" onClick={() => setCount(count + 1)} >Add</button>
                                        <button className="btn btn-danger btn-lg mt-4 " type="button" onClick={() => setCount(0)}>Reset</button>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
