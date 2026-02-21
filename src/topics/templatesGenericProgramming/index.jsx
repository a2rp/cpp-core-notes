// templatesGenericProgramming/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBox,
    FiCode,
    FiLayers,
    FiShuffle,
    FiSliders,
} from "react-icons/fi";

const TemplatesGenericProgramming = () => {
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
                    <FiLayers />
                </span>

                <span className="title">Templates and Generic Programming</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Templates let you write code once and reuse it for
                        multiple types. This is called generic programming.
                        Instead of writing separate functions for int, float,
                        and double, you write one template that works for all.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCode />
                        </span>
                        Function templates
                    </h3>
                    <p className="p">
                        A function template is a blueprint for a function. The
                        compiler creates the real function when you call it with
                        a specific type.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - function template
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

template <typename T>
T add(T a, T b) {
  return a + b;
}

int main() {
  cout << add<int>(2, 3) << endl;      // output - 5
  cout << add<double>(2.5, 1.2) << endl; // output - 3.7
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        You can usually skip &lt;int&gt; because the compiler
                        can deduce types from arguments.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiBox />
                        </span>
                        Class templates
                    </h3>
                    <p className="p">
                        A class template works the same way, but for classes.
                        This is how containers like vector and pair are built.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - class template</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

template <typename T>
class Box {
public:
  T value;

  Box(T v) : value(v) {}

  void show() {
    cout << value << endl;
  }
};

int main() {
  Box<int> b1(10);
  b1.show(); // output - 10

  Box<string> b2("hello");
  b2.show(); // output - hello

  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiSliders />
                        </span>
                        Template specialization
                    </h3>
                    <p className="p">
                        Specialization means you provide a custom version of a
                        template for a specific type. Use this when one type
                        needs different logic.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - specialization for bool
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

template <typename T>
void printValue(T v) {
  cout << v << endl;
}

// specialization for bool
template <>
void printValue<bool>(bool v) {
  cout << (v ? "true" : "false") << endl;
}

int main() {
  printValue<int>(7);   // output - 7
  printValue<bool>(true); // output - true
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Specialization is useful but can get complex. Keep it
                        limited to cases where you really need custom behavior.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShuffle />
                        </span>
                        Variadic templates
                    </h3>
                    <p className="p">
                        Variadic templates accept a variable number of template
                        arguments. This is used in modern C++ libraries and
                        helps create flexible utilities.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - print many values
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

void printAll() {
  cout << endl;
}

template <typename T, typename... Rest>
void printAll(T first, Rest... rest) {
  cout << first << " ";
  printAll(rest...);
}

int main() {
  printAll(1, 2, 3, "hi"); 
  // output - 1 2 3 hi
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        The "...rest" is called a parameter pack. It lets you
                        pass many values without manually writing overloads.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Concepts basics
                    </h3>
                    <p className="p">
                        Concepts (C++20) allow you to put rules on templates.
                        This makes errors clearer and prevents templates from
                        being used with invalid types.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - concept style check (simple)
                        </div>
                        <pre className="code">
                            {`// requires C++20
#include <iostream>
#include <concepts>
using namespace std;

template <typename T>
requires integral<T>
T addInt(T a, T b) {
  return a + b;
}

int main() {
  cout << addInt(2, 3) << endl; // output - 5
  // addInt(2.2, 1.1); // error - not integral
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Concepts make templates beginner friendly because errors
                        become readable. If you are not using C++20, skip this
                        part for now and come back later.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TemplatesGenericProgramming;
