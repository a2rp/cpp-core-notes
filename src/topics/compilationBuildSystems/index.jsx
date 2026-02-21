// compilationBuildSystems/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiTool,
    FiCpu,
    FiSliders,
    FiZap,
    FiLink2,
    FiFileText,
    FiLayers,
} from "react-icons/fi";
import { FaBug } from "react-icons/fa";

const CompilationBuildSystems = () => {
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
                    <FiTool />
                </span>

                <span className="title">Compilation and Build Systems</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        In C++, writing code is only half the story. The other
                        half is building it correctly. You compile source files,
                        link libraries, and produce an executable. Build tools
                        like Make and CMake help you automate this, especially
                        when projects grow.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        g++
                    </h3>
                    <p className="p">
                        g++ is the GNU C++ compiler. It compiles your .cpp files
                        into an executable. For small programs you can compile
                        in one command. For multiple files, you typically
                        compile each file into an object file, then link them.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - compile and run</div>
                        <pre className="code">
                            {`g++ main.cpp -o app
./app

// output - depends on your program`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - multiple files build
                        </div>
                        <pre className="code">
                            {`g++ -c main.cpp -o main.o
g++ -c utils.cpp -o utils.o
g++ main.o utils.o -o app

// output - executable created from multiple objects`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiSliders />
                        </span>
                        Compilation flags
                    </h3>
                    <p className="p">
                        Flags change how your code is compiled. Some flags
                        enable warnings, some optimize performance, and some
                        include debug info. Good defaults help you catch bugs
                        early.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            -Wall -Wextra -Wpedantic - better warnings
                        </li>
                        <li>
                            <span className="dot" />
                            -O0 -O1 -O2 -O3 - optimization level
                        </li>
                        <li>
                            <span className="dot" />
                            -g - add debug symbols (for gdb)
                        </li>
                        <li>
                            <span className="dot" />
                            -std=c++17 or -std=c++20 - choose language standard
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - solid beginner friendly build
                        </div>
                        <pre className="code">
                            {`g++ -std=c++17 -Wall -Wextra -Wpedantic -O0 -g main.cpp -o app

// output - app built with warnings + debug info`}
                        </pre>
                    </div>

                    <div className="hint">
                        Using warnings is not optional. Warnings are the
                        compiler trying to save you from future pain.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FaBug />
                        </span>
                        Debug vs Release
                    </h3>
                    <p className="p">
                        Debug builds are made for development. They include
                        debug symbols and usually no optimization, so stepping
                        through code is easy. Release builds are optimized for
                        speed and smaller binaries, used for final deployment.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - debug build</div>
                        <pre className="code">
                            {`g++ -std=c++17 -O0 -g main.cpp -o app_debug
// output - easier debugging, slower runtime`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">Example - release build</div>
                        <pre className="code">
                            {`g++ -std=c++17 -O2 main.cpp -o app_release
// output - faster runtime, harder debugging`}
                        </pre>
                    </div>

                    <div className="hint">
                        Typical habit - develop in Debug, test and ship in
                        Release.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLink2 />
                        </span>
                        Static vs dynamic linking
                    </h3>
                    <p className="p">
                        Linking means connecting your object files with library
                        code. Static linking copies library code into your
                        executable. Dynamic linking keeps libraries separate and
                        loads them at runtime.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Static linking - bigger executable, fewer runtime
                            dependencies
                        </li>
                        <li>
                            <span className="dot" />
                            Dynamic linking - smaller executable, needs shared
                            libraries installed
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - static linking idea
                        </div>
                        <pre className="code">
                            {`// concept example (flags differ by system and libraries)
// g++ main.cpp -static -o app

// output - binary tries to include needed libs inside`}
                        </pre>
                    </div>

                    <div className="hint">
                        In real projects, you decide this based on deployment
                        needs - portability vs size and updates.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiFileText />
                        </span>
                        Makefile basics
                    </h3>
                    <p className="p">
                        Make is a build tool that uses a Makefile to automate
                        compilation. It rebuilds only what changed. You define
                        targets, dependencies, and commands. This saves time for
                        multi file projects.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - tiny Makefile</div>
                        <pre className="code">
                            {`# Makefile
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -O0 -g

app: main.o utils.o
\t$(CXX) main.o utils.o -o app

main.o: main.cpp
\t$(CXX) $(CXXFLAGS) -c main.cpp -o main.o

utils.o: utils.cpp
\t$(CXX) $(CXXFLAGS) -c utils.cpp -o utils.o

clean:
\trm -f *.o app

# output - run "make" to build, "make clean" to cleanup`}
                        </pre>
                    </div>

                    <div className="hint">
                        Tabs matter in Makefiles. Commands under targets usually
                        must start with a tab.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        CMake basics
                    </h3>
                    <p className="p">
                        CMake is a cross platform build system generator. You
                        write a CMakeLists.txt file describing your project.
                        CMake then generates platform specific build files like
                        Makefiles or Visual Studio projects.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - minimal CMakeLists.txt
                        </div>
                        <pre className="code">
                            {`# CMakeLists.txt
cmake_minimum_required(VERSION 3.16)
project(MyApp)

set(CMAKE_CXX_STANDARD 17)
add_executable(app main.cpp utils.cpp)

# output - generates build config for your platform`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - build with CMake
                        </div>
                        <pre className="code">
                            {`mkdir build
cd build
cmake ..
cmake --build .

# output - app built inside build folder`}
                        </pre>
                    </div>

                    <div className="hint">
                        Real world C++ projects commonly use CMake because it
                        scales well and works across OS and IDEs.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CompilationBuildSystems;
