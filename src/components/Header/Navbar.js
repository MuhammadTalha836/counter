import React from 'react'

export default function Navbar() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#023047" }}>
                    <div className="container">
                        <div className="navbar-brand text-white" aria-current="page" > Islamic Tasbi</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                    </div>
                </nav>

            </header>
        </div>
    )
}
