import React, { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutCpp from "./components/aboutCpp";
import CppFundamentals from "./topics/cppFundamentals";
import CppDataTypes from "./topics/cppDataTypes";
import Operators from "./topics/operators";
import ControlFlow from "./topics/controlFlow";
import Functions from "./topics/functions";
import ArraysAndStrings from "./topics/arraysAndStrings";
import PointersAndReferences from "./topics/pointersAndReferences";
import OopBasics from "./topics/oopBasics";
import SpecialMemberFunctions from "./topics/specialMemberFunctions";
import TemplatesGenericProgramming from "./topics/templatesGenericProgramming";
import StlBasics from "./topics/stlBasics";
import ExceptionHandling from "./topics/exceptionHandling";
import FileHandling from "./topics/fileHandling";
import AdvancedConcepts from "./topics/advancedConcepts";
import ModernCppFeatures from "./topics/modernCppFeatures";
import ConcurrencyBasics from "./topics/concurrencyBasics";
import BestPractices from "./topics/bestPractices";
import CompilationBuildSystems from "./topics/compilationBuildSystems";
import CommonPitfalls from "./topics/commonPitfalls";

const topics = [["about", "Overview", AboutCpp], ["fundamentals", "C++ Fundamentals", CppFundamentals], ["types", "Data Types", CppDataTypes], ["operators", "Operators", Operators], ["control", "Control Flow", ControlFlow], ["functions", "Functions", Functions], ["arrays", "Arrays and Strings", ArraysAndStrings], ["pointers", "Pointers and References", PointersAndReferences], ["oop", "OOP Basics", OopBasics], ["members", "Special Member Functions", SpecialMemberFunctions], ["templates", "Templates", TemplatesGenericProgramming], ["stl", "STL Basics", StlBasics], ["exceptions", "Exception Handling", ExceptionHandling], ["files", "File Handling", FileHandling], ["advanced", "Advanced Concepts", AdvancedConcepts], ["modern", "Modern C++", ModernCppFeatures], ["concurrency", "Concurrency", ConcurrencyBasics], ["best", "Best Practices", BestPractices], ["build", "Build Systems", CompilationBuildSystems], ["pitfalls", "Common Pitfalls", CommonPitfalls]];

const App = () => {
    const [activeTopic, setActiveTopic] = useState("about");
    const mainRef = useRef(null);
    const ActiveTopic = topics.find(([id]) => id === activeTopic)?.[2] || AboutCpp;
    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0, behavior: "auto" });
        requestAnimationFrame(() => mainRef.current?.querySelector('[aria-expanded="false"]')?.click());
    }, [activeTopic]);
    return <Styled.Wrapper><Styled.Header><Header /></Styled.Header><Styled.Main ref={mainRef}><div className="workspaceLayout"><aside className="sideMenu" aria-label="C++ topics"><p className="menuLabel">Study guide</p><nav>{topics.map(([id, label]) => <button key={id} type="button" className={activeTopic === id ? "active" : ""} onClick={() => setActiveTopic(id)}>{label}</button>)}</nav></aside><section className="contentWrapper" aria-live="polite"><ActiveTopic /></section></div><button type="button" className="scrollTopButton" aria-label="Scroll content to top" title="Scroll to top" onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })}><FiArrowUp /></button><div className="footerWrapper"><Footer /></div></Styled.Main></Styled.Wrapper>;
};

export default App;
