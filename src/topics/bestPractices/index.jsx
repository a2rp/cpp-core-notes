// bestPractices/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiShield,
    FiLayers,
    FiLock,
    FiCheckCircle,
    FiAlertTriangle,
    FiFileText,
    FiCpu,
    FiCode,
} from "react-icons/fi";

const BestPractices = () => {
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
                    <FiShield />
                </span>

                <span className="title">Best Practices</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        C++ gives you power, but it also punishes careless code.
                        Best practices are basically rules that reduce bugs,
                        prevent memory leaks, and keep code readable. Think of
                        them as "defaults" you follow unless you have a strong
                        reason not to.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Rule of Three Five Zero
                    </h3>
                    <p className="p">
                        If your class manages a resource (memory, file handle,
                        socket), you must define the copy behavior properly.
                        Modern C++ pushes you toward Rule of Zero by using RAII
                        types like std::string and std::vector so you do not
                        write custom copy or destroy code.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Rule of Three - destructor, copy constructor, copy
                            assignment
                        </li>
                        <li>
                            <span className="dot" />
                            Rule of Five - add move constructor, move assignment
                        </li>
                        <li>
                            <span className="dot" />
                            Rule of Zero - use standard types, write none of
                            them
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - Rule of Zero using std::string
                        </div>
                        <pre className="code">
                            {`#include <string>
#include <iostream>

class User {
public:
  std::string name;
  int age;

  User(std::string n, int a) : name(n), age(a) {}
  // no custom destructor, copy, move needed
};

int main() {
  User u("Ash", 25);
  std::cout << u.name << "\\n";
  // output - Ash
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLock />
                        </span>
                        Avoid raw pointers
                    </h3>
                    <p className="p">
                        Raw pointers are fine for non owning references, but
                        owning raw pointers lead to leaks and double delete
                        problems. Prefer smart pointers for ownership and use
                        references when possible.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - unique_ptr for ownership
                        </div>
                        <pre className="code">
                            {`#include <memory>
#include <iostream>

int main() {
  auto p = std::make_unique<int>(42);
  std::cout << *p << "\\n";
  // output - 42
  // memory is freed automatically
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use raw pointers mainly for "view" usage, not ownership.
                        Ownership should be clear and automatic.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCheckCircle />
                        </span>
                        Use const correctly
                    </h3>
                    <p className="p">
                        const makes your code safer and clearer. It tells the
                        compiler and the reader "this will not change". Use it
                        for function parameters, member functions, and variables
                        that should not be modified.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - const reference and const member function
                        </div>
                        <pre className="code">
                            {`#include <string>
#include <iostream>

class Box {
  int w;
public:
  Box(int width) : w(width) {}

  int width() const { 
    return w; // const function does not modify object
  }
};

void printName(const std::string& name) {
  std::cout << name << "\\n";
}

int main() {
  Box b(10);
  std::cout << b.width() << "\\n"; // output - 10
  printName("cpp-core-notes");     // output - cpp-core-notes
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        Prefer RAII
                    </h3>
                    <p className="p">
                        RAII means Resource Acquisition Is Initialization. In
                        simple words - tie resource lifetime to object lifetime.
                        When an object is created it acquires the resource, and
                        when it goes out of scope it releases it automatically.
                        This prevents leaks even when exceptions happen.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - file closes automatically
                        </div>
                        <pre className="code">
                            {`#include <fstream>
#include <string>

int main() {
  std::ofstream out("notes.txt");
  out << "C++ RAII\\n";
  // output - file written
  // file closes automatically when out goes out of scope
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiFileText />
                        </span>
                        Header separation
                    </h3>
                    <p className="p">
                        Keep declarations in headers and implementations in .cpp
                        files. This improves compile structure and makes modules
                        reusable. Always use include guards or pragma once.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - header guard pattern
                        </div>
                        <pre className="code">
                            {`// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif

// output - prevents multiple include errors`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Defensive programming
                    </h3>
                    <p className="p">
                        Validate assumptions. Check pointers, indexes, and
                        return values. Fail fast when inputs are invalid. This
                        makes bugs easier to catch and prevents silent crashes.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - guard clause and bounds check
                        </div>
                        <pre className="code">
                            {`#include <vector>
#include <iostream>

int getAt(const std::vector<int>& v, int idx) {
  if (idx < 0 || idx >= (int)v.size()) return -1; // guard
  return v[idx];
}

int main() {
  std::vector<int> a = {10, 20, 30};
  std::cout << getAt(a, 2) << "\\n";  // output - 30
  std::cout << getAt(a, 5) << "\\n";  // output - -1
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Avoid undefined behavior</h3>
                    <p className="p">
                        Undefined behavior means the program can do anything -
                        crash, work sometimes, or produce weird output. Common
                        causes are out of bounds access, using freed memory,
                        uninitialized variables, invalid pointer dereference,
                        and signed integer overflow.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Never access array out of range
                        </li>
                        <li>
                            <span className="dot" />
                            Do not use deleted pointers
                        </li>
                        <li>
                            <span className="dot" />
                            Initialize variables before use
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid returning references to local variables
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - common UB and the safe fix
                        </div>
                        <pre className="code">
                            {`#include <iostream>

int main() {
  int x = 10;
  int* p = &x;

  std::cout << *p << "\\n"; // output - 10

  // UB example (do not do this)
  // int* bad;
  // std::cout << *bad << "\\n"; // uninitialized pointer

  // safe fix
  int* safe = nullptr;
  if (safe != nullptr) {
    std::cout << *safe << "\\n";
  }

  // output - safe path runs without crash
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Most C++ "random crashes" are actually undefined
                        behavior hiding somewhere. Fixing UB fixes stability.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BestPractices;
