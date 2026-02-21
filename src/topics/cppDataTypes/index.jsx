// dataTypesAndVariables/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiHash,
    FiEdit3,
    FiSliders,
    FiRepeat,
    FiLock,
    FiLayers,
    FiArchive,
    FiCode,
} from "react-icons/fi";

const DataTypesAndVariables = () => {
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
                    <FiHash />
                </span>

                <span className="title">Data Types and Variables</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        C++ is a strongly typed language. That means every
                        variable has a type, and the type decides how much
                        memory is used and what operations are allowed. Once you
                        understand types, initialization, and scope, your
                        programs become more predictable.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiHash />
                        </span>
                        Primitive data types
                    </h3>
                    <p className="p">
                        Primitive types are built in. They include integers,
                        floating point numbers, characters, and booleans. Size
                        can vary by system, but the idea stays the same.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            int, short, long, long long
                        </li>
                        <li>
                            <span className="dot" />
                            float, double, long double
                        </li>
                        <li>
                            <span className="dot" />
                            char, wchar_t, char16_t, char32_t
                        </li>
                        <li>
                            <span className="dot" />
                            bool
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - basic types
                        </div>
                        <pre className="code">
                            {`int age = 20;
double price = 99.50;
char grade = 'A';
bool ok = true;

// output - variables stored with their types`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiSliders />
                        </span>
                        Type modifiers
                    </h3>
                    <p className="p">
                        Modifiers change range and signedness. The most common
                        modifiers are signed, unsigned, short, and long.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - modifiers
                        </div>
                        <pre className="code">
                            {`unsigned int count = 10;
long long big = 9000000000LL;
short small = 12;

// output - types with different ranges`}
                        </pre>
                    </div>

                    <div className="hint">
                        unsigned types cannot store negative values, but they
                        can store bigger positive values for the same size.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiRepeat />
                        </span>
                        Type casting
                    </h3>
                    <p className="p">
                        Casting converts one type to another. In C++, prefer
                        explicit casts like static_cast to avoid accidental
                        bugs.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - casting int to double
                        </div>
                        <pre className="code">
                            {`int a = 5;
int b = 2;

double div1 = a / b; // integer division happens first
double div2 = static_cast<double>(a) / b;

 // div1 becomes 2
 // div2 becomes 2.5`}
                        </pre>
                    </div>

                    <div className="hint">
                        If both operands are int, division is integer division.
                        Cast at least one side to double for decimal results.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiEdit3 />
                        </span>
                        auto keyword
                    </h3>
                    <p className="p">
                        auto lets the compiler deduce the type from the value on
                        the right side. It is useful with long types like
                        iterators, but still keeps strong typing.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - auto type deduction
                        </div>
                        <pre className="code">
                            {`auto x = 10;      // x is int
auto y = 10.5;    // y is double
auto z = 'A';     // z is char

// output - types deduced at compile time`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLock />
                        </span>
                        const correctness
                    </h3>
                    <p className="p">
                        const means "cannot be changed". It makes your code
                        safer and clearer. Use const when a value should not
                        change. In C++, const is a big part of writing clean
                        APIs and avoiding accidental edits.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - const variable
                        </div>
                        <pre className="code">
                            {`const int maxUsers = 100;
// maxUsers = 200; // error

// output - maxUsers stays fixed`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - const reference
                        </div>
                        <pre className="code">
                            {`int n = 10;
const int& ref = n;
// ref = 20; // error, ref cannot change n through it

// output - safe read-only reference`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Variables and initialization styles</h3>
                    <p className="p">
                        C++ supports multiple ways to initialize variables. The
                        modern recommended style is brace initialization because
                        it avoids some narrowing conversions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - initialization styles
                        </div>
                        <pre className="code">
                            {`int a = 10;      // copy initialization
int b(10);        // direct initialization
int c{10};        // brace initialization (recommended)

// int d{10.5};   // error, prevents narrowing

// output - a, b, c are all 10`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Scope rules
                    </h3>
                    <p className="p">
                        Scope decides where a variable exists and can be used.
                        Common scopes are block scope, function scope, class
                        scope, and global scope.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - block scope
                        </div>
                        <pre className="code">
                            {`int main() {
  int x = 10;

  if (true) {
    int x = 99; // different x inside block
    // output - inside x is 99
  }

  // output - outside x is 10
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you declare the same name inside a block, it shadows
                        the outer variable.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiArchive />
                        </span>
                        Storage classes
                    </h3>
                    <p className="p">
                        Storage classes control lifetime and linkage. In modern
                        C++, some are less common, but still important to
                        understand for reading older code and system projects.
                    </p>

                    <div className="miniGrid">
                        <div className="miniCard">
                            <div className="miniTitle">static</div>
                            <p className="p">
                                static inside a function keeps the variable
                                alive across calls. static at global scope
                                restricts visibility to the same file.
                            </p>

                            <div className="codeBlock">
                                <div className="codeTop">Example - static</div>
                                <pre className="code">
                                    {`int counter() {
  static int c = 0;
  c++;
  return c;
}

// counter() returns 1, then 2, then 3`}
                                </pre>
                            </div>
                        </div>

                        <div className="miniCard">
                            <div className="miniTitle">extern</div>
                            <p className="p">
                                extern declares a variable that is defined in
                                another file. Used for sharing globals across
                                translation units.
                            </p>

                            <div className="codeBlock">
                                <div className="codeTop">Example - extern</div>
                                <pre className="code">
                                    {`// a.cpp
int g = 10;

// b.cpp
extern int g;
// g can be used here

// output - g is shared across files`}
                                </pre>
                            </div>
                        </div>

                        <div className="miniCard">
                            <div className="miniTitle">register</div>
                            <p className="p">
                                register was a hint to store a variable in a CPU
                                register for speed. Modern compilers ignore it
                                and optimize automatically.
                            </p>

                            <div className="codeBlock">
                                <div className="codeTop">
                                    Example - register
                                </div>
                                <pre className="code">
                                    {`register int i = 0;
// output - compiler decides best placement`}
                                </pre>
                            </div>
                        </div>

                        <div className="miniCard">
                            <div className="miniTitle">mutable</div>
                            <p className="p">
                                mutable is used inside classes. It allows a data
                                member to be modified even inside const member
                                functions. Common use is caching.
                            </p>

                            <div className="codeBlock">
                                <div className="codeTop">Example - mutable</div>
                                <pre className="code">
                                    {`class A {
  mutable int cache = 0;

public:
  int get() const {
    cache++; // allowed because cache is mutable
    return cache;
  }
};

// output - const object can update cache`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="hint">
                        In modern C++, focus most on const, static, and mutable.
                        register is mostly historical and extern is mainly for
                        multi-file programs.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DataTypesAndVariables;
