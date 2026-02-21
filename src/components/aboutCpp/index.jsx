import React from "react";
import { Styled } from "./styled";
import { FiCpu, FiLayers, FiBox, FiClock, FiCode } from "react-icons/fi";

const AboutCpp = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <div className="top">
                    <div className="badge">
                        <span className="badgeIcon">
                            <FiCode />
                        </span>
                        C++ core revision
                    </div>

                    <h2 className="heading">About C++ Programming</h2>

                    <p className="sub">
                        A powerful, compiled language that blends low level
                        memory control with object oriented and generic
                        programming.
                    </p>
                </div>

                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiCpu />
                            </span>
                            What is C++
                        </div>
                        <p className="p">
                            C++ is a general purpose programming language
                            created by Bjarne Stroustrup as an extension of C.
                            It adds object oriented programming, templates, and
                            a rich standard library while retaining low level
                            control.
                        </p>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiLayers />
                            </span>
                            Why C++ matters
                        </div>
                        <p className="p">
                            C++ is widely used in game engines, operating
                            systems, embedded systems, and performance critical
                            software. It allows precise memory control while
                            supporting abstraction through classes and
                            templates.
                        </p>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiBox />
                            </span>
                            About cpp-core-notes
                        </div>
                        <p className="p">
                            The cpp-core-notes project is designed as a focused
                            revision system. It organizes fundamentals, object
                            oriented concepts, templates, STL, memory
                            management, and modern C++ features into a
                            structured single page reference. The goal is strong
                            design thinking, resource safety, and deep
                            understanding of how C++ programs execute.
                        </p>

                        <div className="meta">
                            <span className="metaLeft">
                                <span className="metaIcon">
                                    <FiClock />
                                </span>
                                <span className="metaLabel">Last updated</span>
                            </span>
                            <span className="metaValue">
                                {formattedDateTime}
                            </span>
                        </div>
                    </div>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutCpp;
