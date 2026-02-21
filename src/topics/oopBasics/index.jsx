// oopBasics/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBox,
    FiLock,
    FiKey,
    FiLayers,
    FiGitBranch,
    FiRefreshCw,
    FiZap,
    FiUsers,
    FiShield,
    FiCpu,
} from "react-icons/fi";

const OopBasics = () => {
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
                    <FiBox />
                </span>

                <span className="title">Object Oriented Programming</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Object Oriented Programming (OOP) is a way to design
                        programs using "objects" that bundle data and behavior
                        together. In C++, OOP helps you write structured,
                        reusable code by modeling real world entities as
                        classes.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiBox />
                        </span>
                        Classes and objects
                    </h3>
                    <p className="p">
                        A class is a blueprint. An object is an instance of a
                        class. The class defines what data an object has and
                        what it can do using member functions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - class and object
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Car {
public:
  void start() {
    cout << "Engine started" << endl;
  }
};

int main() {
  Car c;
  c.start();
  // output - Engine started
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLock />
                        </span>
                        Access specifiers
                    </h3>
                    <p className="p">
                        Access specifiers control what is visible outside the
                        class. They are used to protect internal data and expose
                        only what is needed.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            public - accessible from anywhere
                        </li>
                        <li>
                            <span className="dot" />
                            private - accessible only inside the class
                        </li>
                        <li>
                            <span className="dot" />
                            protected - accessible inside class and derived
                            classes
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - public private protected
                        </div>
                        <pre className="code">
                            {`class Demo {
public:
  int a = 1;

private:
  int b = 2;

protected:
  int c = 3;
};

// output - outside code can access only a`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiKey />
                        </span>
                        Constructors
                    </h3>
                    <p className="p">
                        A constructor runs automatically when an object is
                        created. It is used to initialize data members.
                        Constructor name is same as class name and it has no
                        return type.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - constructor</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class User {
public:
  int id;

  User(int x) {
    id = x;
  }
};

int main() {
  User u(7);
  cout << u.id << endl;
  // output - 7
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiRefreshCw />
                        </span>
                        Destructors
                    </h3>
                    <p className="p">
                        A destructor runs automatically when an object is
                        destroyed. It is used for cleanup, like releasing
                        resources. Destructor name is ~ClassName.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - destructor</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Demo {
public:
  Demo() { cout << "Created" << endl; }
  ~Demo() { cout << "Destroyed" << endl; }
};

int main() {
  Demo d;
  // output - Created
  // output - Destroyed (at end of main)
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        this pointer
                    </h3>
                    <p className="p">
                        this is a pointer inside member functions that points to
                        the current object. It is useful when parameter names
                        match member names or for chaining.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - this pointer</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Box {
public:
  int size;

  void setSize(int size) {
    this->size = size;
  }
};

int main() {
  Box b;
  b.setSize(5);
  cout << b.size << endl;
  // output - 5
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        Encapsulation
                    </h3>
                    <p className="p">
                        Encapsulation means hiding internal data and exposing
                        controlled access through public methods. It prevents
                        accidental misuse and keeps class logic consistent.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - encapsulation</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class BankAccount {
private:
  int balance = 0;

public:
  void deposit(int amount) {
    if (amount > 0) balance += amount;
  }

  int getBalance() {
    return balance;
  }
};

int main() {
  BankAccount a;
  a.deposit(100);
  cout << a.getBalance() << endl;
  // output - 100
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Abstraction</h3>
                    <p className="p">
                        Abstraction means showing only the necessary features
                        and hiding the internal details. Users of a class care
                        about what it does, not how it does it.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Public methods = interface
                        </li>
                        <li>
                            <span className="dot" />
                            Private data = hidden implementation details
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiGitBranch />
                        </span>
                        Inheritance
                    </h3>
                    <p className="p">
                        Inheritance allows a class to reuse and extend features
                        of another class. The derived class "is a" specialized
                        version of the base class.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - inheritance</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Animal {
public:
  void eat() { cout << "Eating" << endl; }
};

class Dog : public Animal {
public:
  void bark() { cout << "Bark" << endl; }
};

int main() {
  Dog d;
  d.eat();
  d.bark();
  // output - Eating
  // output - Bark
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Types of inheritance</h3>
                    <p className="p">
                        C++ supports multiple inheritance types. The most common
                        is single inheritance. Multiple inheritance exists but
                        should be used carefully.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Single - one base, one derived
                        </li>
                        <li>
                            <span className="dot" />
                            Multilevel - A -&gt; B -&gt; C chain
                        </li>
                        <li>
                            <span className="dot" />
                            Hierarchical - one base, many derived
                        </li>
                        <li>
                            <span className="dot" />
                            Multiple - derived from multiple bases
                        </li>
                        <li>
                            <span className="dot" />
                            Hybrid - combination of above
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Function overriding</h3>
                    <p className="p">
                        Overriding happens when a derived class provides its own
                        implementation of a base class method. For runtime
                        polymorphism, the base method should be virtual.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - overriding</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Base {
public:
  void show() { cout << "Base show" << endl; }
};

class Derived : public Base {
public:
  void show() { cout << "Derived show" << endl; }
};

int main() {
  Derived d;
  d.show();
  // output - Derived show
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        This example uses compile time dispatch. For runtime
                        dispatch, use virtual functions.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiZap />
                        </span>
                        Virtual functions
                    </h3>
                    <p className="p">
                        virtual enables runtime polymorphism. When you call a
                        virtual function using a base pointer or reference, C++
                        chooses the derived implementation at runtime.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - virtual function
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Base {
public:
  virtual void show() { cout << "Base show" << endl; }
};

class Derived : public Base {
public:
  void show() override { cout << "Derived show" << endl; }
};

int main() {
  Base* ptr = new Derived();
  ptr->show();
  // output - Derived show
  delete ptr;
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Polymorphism</h3>
                    <p className="p">
                        Polymorphism means "many forms". In C++, it appears in
                        two common ways:
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Compile time polymorphism - function overloading,
                            operator overloading
                        </li>
                        <li>
                            <span className="dot" />
                            Runtime polymorphism - virtual functions and
                            overriding
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiUsers />
                        </span>
                        Friend functions
                    </h3>
                    <p className="p">
                        A friend function can access private and protected
                        members of a class. Use it only when needed, because it
                        breaks strict encapsulation.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - friend function</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Secret {
private:
  int value = 42;

public:
  friend void reveal(Secret s);
};

void reveal(Secret s) {
  cout << s.value << endl;
}

int main() {
  Secret s;
  reveal(s);
  // output - 42
  return 0;
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default OopBasics;
