// commonPitfalls/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiAlertTriangle,
    FiTrash2,
    FiLink,
    FiLayers,
    FiHelpCircle,
    FiCopy,
    FiXCircle,
} from "react-icons/fi";

const CommonPitfalls = () => {
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

                <span className="title">Common Pitfalls</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        C++ is powerful, but it can punish careless code. These
                        are classic pitfalls that show up in interviews and real
                        projects. Learn the pattern, learn the fix, and you
                        avoid hours of debugging pain.
                    </p>
                </div>

                {/* Object slicing */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Object slicing
                    </h3>
                    <p className="p">
                        Object slicing happens when a derived object is copied
                        into a base object by value. Only the base part is kept,
                        and the derived part is "sliced off". Fix it by using
                        references or pointers for polymorphism.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - slicing vs no slicing
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Base {
public:
  virtual void who() { cout << "Base\\n"; }
};

class Derived : public Base {
public:
  void who() override { cout << "Derived\\n"; }
};

int main() {
  Derived d;

  Base b = d;   // slicing - copied by value
  b.who();      // output - Base

  Base &r = d;  // no slicing - reference
  r.who();      // output - Derived

  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you want runtime polymorphism, avoid passing or
                        storing polymorphic objects by value.
                    </div>
                </div>

                {/* Shallow copy vs deep copy */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCopy />
                        </span>
                        Shallow copy vs deep copy
                    </h3>
                    <p className="p">
                        Shallow copy copies pointer addresses, not the data they
                        point to. If two objects point to the same heap memory,
                        you can get double free or unexpected changes. Deep copy
                        allocates new memory and copies the actual content.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - shallow copy problem
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <cstring>
using namespace std;

class Name {
public:
  char *p;

  Name(const char *s) {
    p = new char[strlen(s) + 1];
    strcpy(p, s);
  }

  // shallow copy - default copy constructor would copy pointer only
  // deep copy - implement copy constructor
  Name(const Name &other) {
    p = new char[strlen(other.p) + 1];
    strcpy(p, other.p);
  }

  ~Name() {
    delete[] p;
  }
};

int main() {
  Name a("ash");
  Name b = a;  // deep copy now

  cout << a.p << "\\n"; // output - ash
  cout << b.p << "\\n"; // output - ash
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        If your class owns memory or resources, learn the Rule
                        of Three and Rule of Five.
                    </div>
                </div>

                {/* Memory leaks */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiTrash2 />
                        </span>
                        Memory leaks
                    </h3>
                    <p className="p">
                        A memory leak happens when you allocate memory but never
                        release it. Over time, your program consumes more
                        memory. Fix it by using delete, or better - use smart
                        pointers and RAII so memory is freed automatically.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - leak vs safe</div>
                        <pre className="code">
                            {`#include <iostream>
#include <memory>
using namespace std;

int main() {
  // leak (bad)
  // int *p = new int(10);
  // forgot delete p;

  // safe (good)
  unique_ptr<int> x = make_unique<int>(10);
  cout << *x << "\\n"; // output - 10

  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Prefer smart pointers for ownership. Use raw pointers
                        only for non-owning references.
                    </div>
                </div>

                {/* Dangling references */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLink />
                        </span>
                        Dangling references
                    </h3>
                    <p className="p">
                        A dangling reference happens when a reference or pointer
                        points to memory that is no longer valid. Common cause -
                        returning reference to a local variable.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - returning local reference (bad)
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int& bad() {
  int x = 5;
  return x; // x dies after function ends - dangling reference
}

int main() {
  // int &r = bad(); // undefined behavior
  // cout << r << "\\n";

  cout << "Do not return references to locals\\n";
  // output - Do not return references to locals
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Return by value when you can. Modern C++ optimizes
                        returns very well.
                    </div>
                </div>

                {/* Multiple inheritance diamond problem */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Multiple inheritance diamond problem
                    </h3>
                    <p className="p">
                        In multiple inheritance, a class can inherit the same
                        base through two paths, causing duplicate base members
                        and ambiguity. Use virtual inheritance to solve it.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - diamond and virtual inheritance
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class A {
public:
  int x = 1;
};

class B : virtual public A {};
class C : virtual public A {};

class D : public B, public C {};

int main() {
  D d;
  cout << d.x << "\\n"; // output - 1
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Multiple inheritance is rare in most codebases. Prefer
                        composition unless there is a strong reason.
                    </div>
                </div>

                {/* Undefined behavior */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiHelpCircle />
                        </span>
                        Undefined behavior
                    </h3>
                    <p className="p">
                        Undefined behavior means the C++ standard does not
                        define what happens. Your program may work, crash, or
                        behave differently on another machine. Common causes
                        include using uninitialized variables, out of bounds
                        access, double delete, and use-after-free.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - out of bounds access (bad)
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int a[3] = {1, 2, 3};

  // undefined behavior - out of bounds
  // cout << a[3] << "\\n";

  cout << "Avoid out of bounds access\\n";
  // output - Avoid out of bounds access
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use bounds checked containers when possible. Keep builds
                        with warnings enabled and use sanitizers during
                        learning.
                    </div>
                </div>

                <div className="endNote">
                    <span className="endIcon">
                        <FiXCircle />
                    </span>
                    Fixing these pitfalls makes your C++ code stable and
                    interview safe.
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CommonPitfalls;
