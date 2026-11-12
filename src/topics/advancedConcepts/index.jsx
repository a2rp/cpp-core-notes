// advancedConcepts/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiShield,
    FiZap,
    FiHardDrive,
    FiLayers,
    FiClock,
    FiCode,
    FiBox,
} from "react-icons/fi";

const AdvancedConcepts = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-controls="cpp-advancedConcepts-panel" aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiZap />
                </span>

                <span className="title">Advanced Concepts</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div id="cpp-advancedConcepts-panel" aria-hidden={!open} className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        These concepts are what make C++ feel "serious". If you
                        understand const correctness, RAII, object lifetime, and
                        dispatch rules, you avoid most real world bugs and write
                        code that behaves predictably.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        Const correctness
                    </h3>
                    <p className="p">
                        const means "do not modify". It makes code safer and
                        easier to reason about. Use const for values that should
                        not change, and prefer const references to avoid
                        copying. Also mark member functions const when they do
                        not modify object state.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - const variables and const member function
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <string>

class User {
  std::string name;

public:
  User(const std::string& n) : name(n) {}

  // const member function - promises not to modify the object
  std::string getName() const {
    return name;
  }
};

int main() {
  const int x = 10;
  // x = 11; // error - cannot modify a const variable

  User u("Ash");
  std::cout << u.getName() << std::endl;

  // output - Ash
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you cannot call a method on a const object, that
                        method is missing const at the end.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiBox />
                        </span>
                        RAII concept
                    </h3>
                    <p className="p">
                        RAII means Resource Acquisition Is Initialization.
                        Simple idea - acquire resources in constructors and
                        release them in destructors. This guarantees cleanup
                        even when exceptions happen. Smart pointers and STL
                        containers follow RAII.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - RAII using unique_ptr
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <memory>

int main() {
  // memory is released automatically when ptr goes out of scope
  std::unique_ptr<int> ptr(new int(42));

  std::cout << *ptr << std::endl;

  // output - 42
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        RAII is the reason modern C++ avoids raw new and delete
                        in application code.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiHardDrive />
                        </span>
                        Memory model basics
                    </h3>
                    <p className="p">
                        C++ defines storage duration and object lifetime rather
                        than requiring a physical memory layout. Common
                        implementations use regions often called stack, heap,
                        static storage, and code. The C++ memory model also
                        defines how threads observe shared values.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Automatic storage - often implemented with a stack
                        </li>
                        <li>
                            <span className="dot" />
                            Dynamic storage - commonly called the heap; manage
                            it with RAII
                        </li>
                        <li>
                            <span className="dot" />
                            Static storage - globals and static variables
                        </li>
                        <li>
                            <span className="dot" />
                            Code segment - compiled instructions
                        </li>
                    </ul>
                    <div className="hint">
                        Stack, heap, and code segment are common implementation
                        terms, not required C++ storage regions.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Stack vs heap
                    </h3>
                    <p className="p">
                        Objects with automatic storage duration are destroyed
                        when their scope ends. Objects with dynamic storage
                        duration live until they are deallocated or their RAII
                        owner is destroyed. Implementations commonly place
                        these in stack and heap regions, respectively.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - stack vs heap allocation
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <memory>

int main() {
  int a = 5; // automatic storage duration

  // dynamic storage managed by an RAII smart pointer
  auto p = std::make_unique<int>(99);

  std::cout << a << " " << *p << std::endl;

  // output - 5 99
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you return a pointer or reference to a stack
                        variable, it becomes a dangling reference. Big bug.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiClock />
                        </span>
                        Object lifetime
                    </h3>
                    <p className="p">
                        Object lifetime is the time between construction and
                        destruction. Stack objects are destroyed automatically
                        when leaving scope. Heap objects live until deleted or
                        until their RAII owner is destroyed. Lifetime mistakes
                        cause dangling pointers, use after free, or leaks.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - scope based destruction
                        </div>
                        <pre className="code">
                            {`#include <iostream>

class Log {
public:
  Log() { std::cout << "start\\n"; }
  ~Log() { std::cout << "end\\n"; }
};

int main() {
  {
    Log x; // constructed here
    std::cout << "inside\\n";
  } // destroyed here

  // output
  // start
  // inside
  // end
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Inline vs virtual dispatch</h3>
                    <p className="p">
                        Inline means the compiler may replace a function call
                        with the function body for speed. Virtual dispatch means
                        the function is chosen at runtime based on the actual
                        object type. Virtual calls usually cannot be inlined in
                        the general case because the target may not be known at
                        compile time.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - virtual dispatch
                        </div>
                        <pre className="code">
                            {`#include <iostream>

class Base {
public:
  virtual void speak() { std::cout << "base\\n"; }
  virtual ~Base() = default;
};

class Derived : public Base {
public:
  void speak() override { std::cout << "derived\\n"; }
};

int main() {
  Base* p = new Derived();
  p->speak(); // runtime dispatch

  delete p;

  // output - derived
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use virtual only when you really need runtime
                        polymorphism. Otherwise prefer normal functions for
                        simplicity and performance.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Operator overloading</h3>
                    <p className="p">
                        C++ allows you to define behavior for operators like +,
                        -, == for your own types. Use it only when it makes code
                        clearer. Keep it predictable and consistent with normal
                        operator meaning.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - overload + for a small struct
                        </div>
                        <pre className="code">
                            {`#include <iostream>

struct Vec2 {
  int x;
  int y;

  Vec2 operator+(const Vec2& other) const {
    return { x + other.x, y + other.y };
  }
};

int main() {
  Vec2 a{2, 3};
  Vec2 b{5, 1};
  Vec2 c = a + b;

  std::cout << c.x << " " << c.y << std::endl;

  // output - 7 4
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Namespaces in depth</h3>
                    <p className="p">
                        Namespaces prevent naming conflicts. You can nest
                        namespaces, create alias names, and avoid global naming
                        collisions in large projects. Prefer std:: prefix in
                        real code instead of using namespace std globally.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - nested namespace and alias
                        </div>
                        <pre className="code">
                            {`#include <iostream>

namespace app {
  namespace utils {
    int add(int a, int b) { return a + b; }
  }
}

// alias
namespace u = app::utils;

int main() {
  std::cout << u::add(2, 5) << std::endl;

  // output - 7
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Avoid putting your code in the global namespace in big
                        projects. Namespaces keep things clean and modular.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AdvancedConcepts;
