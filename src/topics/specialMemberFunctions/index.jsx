// specialMemberFunctions/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCopy,
    FiRepeat,
    FiShuffle,
    FiLayers,
    FiShield,
    FiCode,
} from "react-icons/fi";

const SpecialMemberFunctions = () => {
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

                <span className="title">Special Member Functions</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        In C++, copying and moving objects is a big deal because
                        objects can own resources like heap memory, file
                        handles, or sockets. The compiler can generate special
                        functions for you, but when you manage resources
                        manually you must define the right ones to avoid leaks,
                        double free, and crashes.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCopy />
                        </span>
                        Copy constructor
                    </h3>
                    <p className="p">
                        Runs when you create a new object from an existing one.
                        It should perform a deep copy when your class owns a
                        resource.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - deep copy in copy constructor
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <cstring>

class Buffer {
  char *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new char[size];
    std::memset(data, 0, size);
  }

  // copy constructor
  Buffer(const Buffer &other) : size(other.size) {
    data = new char[size];
    std::memcpy(data, other.data, size);
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(5);
  Buffer b = a; // copy constructor

  std::cout << "Copied\\n";
  // output - Copied
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
                        Copy assignment operator
                    </h3>
                    <p className="p">
                        Runs when an existing object is assigned from another
                        existing object. It must handle self assignment and
                        should free old resources before copying new ones.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - copy assignment with self check
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <cstring>

class Buffer {
  char *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new char[size];
    std::memset(data, 0, size);
  }

  Buffer(const Buffer &other) : size(other.size) {
    data = new char[size];
    std::memcpy(data, other.data, size);
  }

  // copy assignment
  Buffer& operator=(const Buffer &other) {
    if (this == &other) return *this; // self assignment

    delete[] data; // free old

    size = other.size;
    data = new char[size];
    std::memcpy(data, other.data, size);

    return *this;
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(3);
  Buffer b(10);

  b = a; // copy assignment

  std::cout << "Assigned\\n";
  // output - Assigned
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Tip - a safer modern approach is "copy and swap", but
                        for beginners this direct version is easier to
                        understand.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShuffle />
                        </span>
                        Move constructor
                    </h3>
                    <p className="p">
                        Runs when you create a new object by taking resources
                        from a temporary or an object you do not need anymore.
                        It avoids deep copying by stealing the pointer and
                        nulling the source.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - move constructor steals resource
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <utility>

class Buffer {
  int *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new int[size];
    for (int i = 0; i < size; i++) data[i] = i;
  }

  // move constructor
  Buffer(Buffer &&other) noexcept {
    data = other.data;
    size = other.size;

    other.data = nullptr;
    other.size = 0;
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(5);

  Buffer b = std::move(a); // move constructor

  std::cout << "Moved\\n";
  // output - Moved
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Move assignment operator</h3>
                    <p className="p">
                        Runs when an existing object is assigned from a
                        temporary or movable object. It should free old
                        resources, then steal the new ones, and leave the source
                        in a safe empty state.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - move assignment steals resource
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <utility>

class Buffer {
  int *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new int[size];
  }

  // move assignment
  Buffer& operator=(Buffer &&other) noexcept {
    if (this == &other) return *this;

    delete[] data; // free old

    data = other.data;
    size = other.size;

    other.data = nullptr;
    other.size = 0;

    return *this;
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(2);
  Buffer b(10);

  b = std::move(a); // move assignment

  std::cout << "Move assigned\\n";
  // output - Move assigned
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
                        Rule of Three
                    </h3>
                    <p className="p">
                        If your class manages a resource manually and you define
                        any one of these, you probably need all three -
                        destructor, copy constructor, copy assignment operator.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Destructor
                        </li>
                        <li>
                            <span className="dot" />
                            Copy constructor
                        </li>
                        <li>
                            <span className="dot" />
                            Copy assignment operator
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Rule of Five</h3>
                    <p className="p">
                        In modern C++, if you manage resources manually and you
                        implement copy operations, you should also consider move
                        operations. That makes five special functions.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Destructor
                        </li>
                        <li>
                            <span className="dot" />
                            Copy constructor
                        </li>
                        <li>
                            <span className="dot" />
                            Copy assignment operator
                        </li>
                        <li>
                            <span className="dot" />
                            Move constructor
                        </li>
                        <li>
                            <span className="dot" />
                            Move assignment operator
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Rule of Zero</h3>
                    <p className="p">
                        Best modern practice - do not manually manage resources.
                        Use standard library types like std::vector,
                        std::string, and smart pointers. Then you usually do not
                        need to write any special member functions because the
                        defaults are safe.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - rule of zero with std::vector
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>

class Buffer {
  std::vector<int> data;

public:
  Buffer(int n) : data(n, 0) {}
  // no destructor, no copy, no move needed
};

int main() {
  Buffer a(5);
  Buffer b = a; // safe copy

  std::cout << "Safe\\n";
  // output - Safe
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you can follow Rule of Zero, your code becomes safer
                        and you avoid memory bugs automatically.
                    </div>
                </div>

                <div className="section last">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCode />
                        </span>
                        Quick mental checklist
                    </h3>
                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            If you use raw new or delete, be careful and follow
                            Rule of Three or Rule of Five
                        </li>
                        <li>
                            <span className="dot" />
                            Prefer std::vector, std::string, and smart pointers
                            whenever possible
                        </li>
                        <li>
                            <span className="dot" />
                            Moving steals resources and leaves the source valid
                            but empty
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SpecialMemberFunctions;
