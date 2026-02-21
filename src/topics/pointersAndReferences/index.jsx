// pointersAndReferences/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiTarget,
    FiCornerUpRight,
    FiAlertTriangle,
    FiTrash2,
    FiShield,
    FiLink,
    FiDatabase,
} from "react-icons/fi";

const PointersAndReferences = () => {
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
                    <FiLink />
                </span>

                <span className="title">Pointers and References</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Pointers and references are core to C++. They control
                        how you access memory and how you pass data efficiently.
                        If you understand these concepts, you understand how C++
                        programs really work under the hood.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiTarget />
                        </span>
                        Pointer basics
                    </h3>
                    <p className="p">
                        A pointer stores the memory address of another variable.
                        You can dereference a pointer using <code>*</code> to
                        access or modify the value at that address.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - pointer basics</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int x = 10;
  int* p = &x;       // p holds address of x

  cout << x << endl;   // output - 10
  cout << *p << endl;  // output - 10

  *p = 25;            // change x via pointer
  cout << x << endl;   // output - 25

  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pointer arithmetic</h3>
                    <p className="p">
                        Pointer arithmetic is mostly used with arrays. When you
                        increment a pointer, it moves by the size of the data
                        type, not by 1 byte.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - pointer arithmetic with array
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int arr[3] = {10, 20, 30};
  int* p = arr; // same as &arr[0]

  cout << *p << endl;      // output - 10
  cout << *(p + 1) << endl; // output - 20
  cout << *(p + 2) << endl; // output - 30

  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        In C++, pointer arithmetic is safe only within the same
                        array range. Going out of bounds causes undefined
                        behavior.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Null pointer
                    </h3>
                    <p className="p">
                        A null pointer means it points to nothing. In modern
                        C++, use <code>nullptr</code> instead of{" "}
                        <code>NULL</code>
                        or <code>0</code>. Always check before dereferencing.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - nullptr</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int* p = nullptr;

  if (p == nullptr) {
    cout << "No memory assigned" << endl; // output - No memory assigned
  }

  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCornerUpRight />
                        </span>
                        References
                    </h3>
                    <p className="p">
                        A reference is an alias for an existing variable. It
                        must be initialized and cannot be reseated to another
                        variable later. References are commonly used for passing
                        values without copying.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - reference alias</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int x = 10;
  int& r = x; // r is alias of x

  r = 99;
  cout << x << endl; // output - 99

  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiDatabase />
                        </span>
                        Dynamic memory allocation - new and delete
                    </h3>
                    <p className="p">
                        <code>new</code> allocates memory on the heap and
                        returns a pointer. <code>delete</code> frees that
                        memory. If you allocate an array with <code>new[]</code>
                        , you must free with <code>delete[]</code>.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - new and delete</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int* p = new int(50);

  cout << *p << endl; // output - 50

  delete p;           // free memory
  p = nullptr;        // good habit
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - new[] and delete[]
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int* arr = new int[3]{1, 2, 3};

  cout << arr[1] << endl; // output - 2

  delete[] arr;
  arr = nullptr;
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Dangling pointer
                    </h3>
                    <p className="p">
                        A dangling pointer points to memory that has already
                        been freed or is no longer valid. Accessing it can crash
                        your program or cause random bugs.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - dangling pointer problem
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int* p = new int(10);
  delete p;

  // p is now dangling
  // cout << *p << endl; // unsafe - undefined behavior

  p = nullptr; // fix - reset pointer
  cout << "Pointer cleared" << endl; // output - Pointer cleared
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiTrash2 />
                        </span>
                        Memory leaks
                    </h3>
                    <p className="p">
                        A memory leak happens when you allocate memory but never
                        free it. Over time, your program uses more and more RAM.
                        In C++, smart pointers solve most leak problems.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - leak</div>
                        <pre className="code">
                            {`int* p = new int(5);
// delete p; // missing delete causes leak

// output - memory stays allocated until program ends`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        Smart pointers
                    </h3>
                    <p className="p">
                        Smart pointers automatically manage memory using RAII.
                        That means memory is freed automatically when the smart
                        pointer goes out of scope.
                    </p>

                    <div className="sectionMini">
                        <h4 className="h4">unique_ptr</h4>
                        <p className="p">
                            Owns a resource exclusively. Cannot be copied. Can
                            be moved.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">Example - unique_ptr</div>
                            <pre className="code">
                                {`#include <iostream>
#include <memory>
using namespace std;

int main() {
  unique_ptr<int> p = make_unique<int>(42);
  cout << *p << endl; // output - 42
  // memory freed automatically
  return 0;
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="sectionMini">
                        <h4 className="h4">shared_ptr</h4>
                        <p className="p">
                            Shared ownership. Reference counting is used. Memory
                            is freed when the last shared_ptr is destroyed.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">Example - shared_ptr</div>
                            <pre className="code">
                                {`#include <iostream>
#include <memory>
using namespace std;

int main() {
  auto p1 = make_shared<int>(7);
  auto p2 = p1;

  cout << *p1 << endl; // output - 7
  cout << p1.use_count() << endl; // output - 2

  return 0;
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="sectionMini">
                        <h4 className="h4">weak_ptr</h4>
                        <p className="p">
                            Non owning reference to a shared_ptr managed object.
                            Used to avoid circular references.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">Example - weak_ptr</div>
                            <pre className="code">
                                {`#include <iostream>
#include <memory>
using namespace std;

int main() {
  auto sp = make_shared<int>(100);
  weak_ptr<int> wp = sp;

  if (auto locked = wp.lock()) {
    cout << *locked << endl; // output - 100
  }

  sp.reset();

  if (wp.expired()) {
    cout << "Expired" << endl; // output - Expired
  }

  return 0;
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="hint">
                        Rule of thumb - prefer unique_ptr by default. Use
                        shared_ptr only when multiple owners are truly needed.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PointersAndReferences;
