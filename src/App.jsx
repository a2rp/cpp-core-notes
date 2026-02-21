// App.jsx
import React from "react";
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

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutCpp />

                    <CppFundamentals />
                    <CppDataTypes />
                    <Operators />
                    <ControlFlow />
                    <Functions />
                    <ArraysAndStrings />
                    <PointersAndReferences />
                    <OopBasics />
                    <SpecialMemberFunctions />
                    <TemplatesGenericProgramming />
                    <StlBasics />
                    <ExceptionHandling />
                    <FileHandling />
                    <AdvancedConcepts />
                    <ModernCppFeatures />
                    <ConcurrencyBasics />
                    <BestPractices />
                    <CompilationBuildSystems />
                    <CommonPitfalls />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
