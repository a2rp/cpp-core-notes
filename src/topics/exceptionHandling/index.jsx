// exceptionHandling/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiAlertTriangle,
    FiShield,
    FiCode,
    FiXCircle,
} from "react-icons/fi";

const ExceptionHandling = () => {
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
                    <FiAlertTriangle />
                </span>

                <span className="title">Exception Handling</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Exceptions are a way to handle runtime errors without
                        mixing error checks everywhere. Instead of returning
                        error codes, you can throw an error and handle it at a
                        higher level using try and catch.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        try
                    </h3>
                    <p className="p">
                        Put code that might fail inside a try block. If an
                        exception is thrown inside try, normal execution stops
                        and control moves to the matching catch block.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - try with safe flow
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  try {
    cout << "Inside try" << endl;
  } catch (...) {
    cout << "Caught something" << endl;
  }

  cout << "Program continues" << endl;
  // output -
  // Inside try
  // Program continues
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiXCircle />
                        </span>
                        throw
                    </h3>
                    <p className="p">
                        throw is used to raise an exception. You can throw built
                        in types like int or string, but in real projects you
                        usually throw exception objects.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - throw on invalid input
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int age = -1;

  try {
    if (age < 0) {
      throw "Age cannot be negative";
    }
    cout << "Age is valid" << endl;
  } catch (const char* msg) {
    cout << msg << endl;
  }

  // output - Age cannot be negative
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">catch</h3>
                    <p className="p">
                        catch handles the thrown exception. You can catch
                        specific types first, and optionally use catch(...) as a
                        fallback for unknown exceptions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - multiple catches
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  try {
    throw 404;
  } catch (int code) {
    cout << "Error code: " << code << endl;
  } catch (...) {
    cout << "Unknown error" << endl;
  }

  // output - Error code: 404
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Custom exceptions</h3>
                    <p className="p">
                        Custom exceptions make errors clearer. A common approach
                        is to derive from std::exception and override what().
                        Then you can catch by reference and print the message.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - custom exception class
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <exception>
using namespace std;

class AgeError : public exception {
public:
  const char* what() const noexcept override {
    return "Age must be 0 or above";
  }
};

int main() {
  int age = -5;

  try {
    if (age < 0) {
      throw AgeError();
    }
    cout << "Valid age" << endl;
  } catch (const exception& e) {
    cout << e.what() << endl;
  }

  // output - Age must be 0 or above
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Catch custom exceptions by reference like "catch (const
                        std::exception& e)" to avoid copying.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">noexcept</h3>
                    <p className="p">
                        noexcept tells the compiler that a function will not
                        throw exceptions. This can help optimizations and is
                        important for move operations. If a noexcept function
                        throws, the program will terminate.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - noexcept function
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

void logOk() noexcept {
  cout << "No exceptions here" << endl;
}

int main() {
  logOk();
  // output - No exceptions here
  return 0;
}`}
                        </pre>
                    </div>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use noexcept for functions that truly do not throw
                        </li>
                        <li>
                            <span className="dot" />
                            Helpful for move constructors and move assignment
                        </li>
                        <li>
                            <span className="dot" />
                            If it throws anyway, program terminates
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ExceptionHandling;
