// functions/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiGitBranch,
    FiRepeat,
    FiZap,
    FiCornerDownRight,
    FiLink2,
    FiArrowRightCircle,
} from "react-icons/fi";

const Functions = () => {
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

                <span className="title">Functions</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        A function is a reusable block of code. In C++,
                        functions also support features like overloading,
                        default arguments, and references. Mastering functions
                        is important because most real programs are built using
                        small, well named functions.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiArrowRightCircle />
                        </span>
                        Function declaration and definition
                    </h3>
                    <p className="p">
                        A declaration tells the compiler the function name,
                        return type, and parameters. A definition contains the
                        actual body. In small programs they can be in the same
                        place, but in bigger projects declarations go into .h
                        headers and definitions into .cpp files.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - declaration vs definition
                        </div>
                        <pre className="code">
                            {`#include <iostream>

// declaration
int add(int a, int b);

int main() {
  std::cout << add(2, 3) << std::endl;
  // output - 5
  return 0;
}

// definition
int add(int a, int b) {
  return a + b;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiGitBranch />
                        </span>
                        Function overloading
                    </h3>
                    <p className="p">
                        Overloading means multiple functions can share the same
                        name, as long as their parameter types or count are
                        different. The compiler chooses the best match based on
                        the arguments you pass.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - overloaded functions
                        </div>
                        <pre className="code">
                            {`#include <iostream>

int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

int main() {
  std::cout << add(2, 3) << std::endl;       // output - 5
  std::cout << add(2.5, 3.1) << std::endl;   // output - 5.6
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiZap />
                        </span>
                        Inline functions
                    </h3>
                    <p className="p">
                        inline suggests the compiler to replace the function
                        call with the function body to reduce call overhead.
                        Modern compilers decide this automatically, but inline
                        is still used for small functions in headers.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - inline function</div>
                        <pre className="code">
                            {`#include <iostream>

inline int square(int x) { return x * x; }

int main() {
  std::cout << square(4) << std::endl;
  // output - 16
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Inline is not a guarantee. It is a hint. The compiler
                        may ignore it if the function is large or complex.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCornerDownRight />
                        </span>
                        Default arguments
                    </h3>
                    <p className="p">
                        Default arguments allow you to give a default value to a
                        parameter. If the caller does not pass that argument,
                        the default value is used.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - default parameter value
                        </div>
                        <pre className="code">
                            {`#include <iostream>

int greetCount(int times = 1) {
  return times;
}

int main() {
  std::cout << greetCount() << std::endl;   // output - 1
  std::cout << greetCount(5) << std::endl;  // output - 5
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Defaults are usually written in the declaration
                        (prototype), not repeated in the definition.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pass by value</h3>
                    <p className="p">
                        Pass by value means the function receives a copy.
                        Changes inside the function do not affect the original
                        variable. This is safe, but can be expensive for large
                        objects.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - pass by value</div>
                        <pre className="code">
                            {`#include <iostream>

void setToZero(int x) {
  x = 0;
}

int main() {
  int a = 10;
  setToZero(a);
  std::cout << a << std::endl;
  // output - 10 (unchanged)
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pass by reference</h3>
                    <p className="p">
                        Pass by reference means the function works on the
                        original variable. Changes inside the function affect
                        the caller. This is efficient for big values.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - pass by reference
                        </div>
                        <pre className="code">
                            {`#include <iostream>

void setToZero(int &x) {
  x = 0;
}

int main() {
  int a = 10;
  setToZero(a);
  std::cout << a << std::endl;
  // output - 0 (changed)
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use const reference when you only want to read and not
                        modify: const std::string &name
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pass by pointer</h3>
                    <p className="p">
                        Pass by pointer means you pass the memory address. The
                        function can modify the original value using dereference
                        (*). You must check for null pointers to avoid crashes.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - pass by pointer</div>
                        <pre className="code">
                            {`#include <iostream>

void setToZero(int *x) {
  if (x == nullptr) return;
  *x = 0;
}

int main() {
  int a = 10;
  setToZero(&a);
  std::cout << a << std::endl;
  // output - 0
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiRepeat />
                        </span>
                        Recursion
                    </h3>
                    <p className="p">
                        Recursion is when a function calls itself. It must have
                        a base case to stop, otherwise it will run forever and
                        crash due to stack overflow.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - factorial recursion
                        </div>
                        <pre className="code">
                            {`#include <iostream>

int factorial(int n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive call
}

int main() {
  std::cout << factorial(5) << std::endl;
  // output - 120
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLink2 />
                        </span>
                        Function prototypes
                    </h3>
                    <p className="p">
                        A function prototype is a declaration placed before main
                        so the compiler knows about the function before it is
                        used. This is required if the function definition comes
                        later in the file.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - prototype before main
                        </div>
                        <pre className="code">
                            {`#include <iostream>

int mul(int a, int b); // prototype

int main() {
  std::cout << mul(3, 4) << std::endl;
  // output - 12
  return 0;
}

int mul(int a, int b) {
  return a * b;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        In real projects, prototypes are usually placed in
                        header files and included where needed.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Functions;
