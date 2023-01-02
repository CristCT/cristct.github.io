import React from "react";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="fab fa-html5"></i>
                        <div className="skills__name">
                            <h4>HTML</h4>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="fab fa-css3-alt"></i>
                        <div className="skills_name">
                            <h4>CSS</h4>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className="fab fa-js-square"></i>
                        <div className="skills_name">
                            <h4>JavaScript</h4>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className="bx bxl-typescript"></i>
                        <div className="skills_name">
                            <h4>TypeScript</h4>
                        </div>
                    </div>
                    <div className="skills__data">
                    {/* react icon */}
                    <i className="fab fa-react"></i>
                        <div className="skills_name">
                            <h4>React</h4>
                        </div>
                    </div>
                    <div className="skills__data">
                    {/* angular */}
                    <i className="fab fa-angular"></i>
                        <div className="skills_name">
                            <h4>Angular</h4>
                        </div>
                    </div>
                    <div className="skills__data">
                    {/* bootstrap */}
                    <i className="fab fa-bootstrap"></i>
                        <div className="skills__name">
                            <h4>Bootstrap</h4>
                        </div>
                    </div>
                    <div className="skills__data">
                    {/* git */}
                    <i className="bx bxl-git"></i>
                        <div className="skills__name">
                            <h4>Git</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend;