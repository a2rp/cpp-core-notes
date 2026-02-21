// cppFundamentals/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiCpu,
    FiGitBranch,
    FiLayers,
    FiFileText,
    FiPackage,
} from "react-icons/fi";

const CppFundamentals = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiCode />
                </span>

                <span className="title">C++ Fundamentals</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        C++ is a compiled language that gives you performance
                        and control like C, but also adds modern features like
                        classes, templates, and the Standard Template Library
                        (STL). It is used for performance heavy software where
                        you want both speed and clean program structure.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        What is C++
                    </h3>
                    <p className="p">
                        C++ is a general purpose programming language created by
                        Bjarne Stroustrup. It extends C with object oriented
                        programming, generic programming using templates, and a
                        powerful standard library.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiGitBranch />
                        </span>
                        History of C++
                    </h3>
                    <p className="p">
                        C++ started as "C with Classes" in the early 1980s. Over
                        time it evolved into modern C++ with features like smart
                        pointers, move semantics, lambdas, and many improvements
                        in newer standards.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">C vs C++</h3>
                    <p className="p">
                        C is mostly procedural and minimal. C++ supports both
                        procedural and object oriented styles and provides more
                        abstraction tools. C++ also adds references, function
                        overloading, templates, exceptions, and STL containers.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />C focuses on functions and
                            manual patterns
                        </li>
                        <li>
                            <span className="dot" />
                            C++ adds classes, templates, and safer resource
                            management patterns
                        </li>
                        <li>
                            <span className="dot" />
                            C++ has STL containers and algorithms out of the box
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Compiled language concept
                    </h3>
                    <p className="p">
                        In C++, your source code is translated into machine code
                        before running. The compiler checks syntax and types,
                        generates object files, then the linker produces the
                        final executable.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - compile and run</div>
                        <pre className="code">
                            {`g++ main.cpp -o app
./app

// output - depends on your program`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Structure of a C++ program</h3>
                    <p className="p">
                        A basic C++ program includes headers, uses namespaces
                        (optional), has a main function, and contains statements
                        or function calls. As projects grow, code is split into
                        multiple .cpp and .h files.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - minimal C++ program
                        </div>
                        <pre className="code">
                            {`#include <iostream>

int main() {
  std::cout << "Hello C++" << std::endl;
  return 0;
}

// output - Hello C++`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">main function</h3>
                    <p className="p">
                        main is the entry point. Program execution starts from
                        main. Returning 0 indicates success.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - main return value
                        </div>
                        <pre className="code">
                            {`int main() {
  return 0; // success
}

// output - program exits successfully`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiFileText />
                        </span>
                        Header files
                    </h3>
                    <p className="p">
                        Header files provide declarations for functions,
                        classes, and constants. You include them using #include.
                        Standard headers like iostream, vector, and string are
                        part of the C++ library. Your own headers usually use
                        quotes.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - include standard and custom header
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include "math_utils.h"

// output - headers included`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Namespaces</h3>
                    <p className="p">
                        Namespaces group names to avoid conflicts. In C++, std
                        is the standard library namespace. You can also create
                        your own namespaces for your project code.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - namespace usage</div>
                        <pre className="code">
                            {`namespace myapp {
  int version = 1;
}

int main() {
  // access via scope resolution
  // myapp::version
  return 0;
}

// output - namespace keeps names organized`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Using namespace std</h3>
                    <p className="p">
                        using namespace std allows you to write cout instead of
                        std::cout. It is convenient in small examples, but in
                        bigger projects it can cause name conflicts. Prefer
                        std:: in real code or use specific using declarations.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - two common styles
                        </div>
                        <pre className="code">
                            {`// style 1 - recommended
std::cout << "Hi" << std::endl;

// style 2 - ok for small demos
using namespace std;
cout << "Hi" << endl;

// output - Hi`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiPackage />
                        </span>
                        Standard library overview
                    </h3>
                    <p className="p">
                        The C++ standard library provides containers,
                        algorithms, strings, streams, utilities, and more. STL
                        is a big part of it and helps you write clean and fast
                        code.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            iostream - input output streams
                        </li>
                        <li>
                            <span className="dot" />
                            vector - dynamic array
                        </li>
                        <li>
                            <span className="dot" />
                            string - std::string utilities
                        </li>
                        <li>
                            <span className="dot" />
                            algorithm - sort, find, count
                        </li>
                        <li>
                            <span className="dot" />
                            memory - smart pointers
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Compilation process</h3>
                    <p className="p">
                        C++ code goes through preprocess, compile, assemble, and
                        link steps. Headers are expanded in preprocessing, then
                        compilation produces object files, and linking produces
                        the final executable.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - see each step</div>
                        <pre className="code">
                            {`// 1 - preprocess
g++ -E main.cpp -o main.i

// 2 - compile
g++ -S main.i -o main.s

// 3 - assemble
g++ -c main.s -o main.o

// 4 - link
g++ main.o -o app

// 5 - execute
./app`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you see "undefined reference" errors, it is usually a
                        linking issue or missing object file or library.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CppFundamentals;
