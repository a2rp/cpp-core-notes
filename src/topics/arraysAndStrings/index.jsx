// arraysAndStrings/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGrid,
    FiHash,
    FiType,
    FiLink,
    FiBox,
    FiCpu,
} from "react-icons/fi";

const ArraysAndStrings = () => {
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
                    <FiGrid />
                </span>

                <span className="title">Arrays and Strings</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Arrays store multiple values in contiguous memory.
                        Strings in C++ can be handled in two major ways - old
                        style C strings (char arrays) and modern std::string.
                        For dynamic arrays, you usually use std::vector. For
                        fixed size modern arrays, use std::array.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiHash />
                        </span>
                        Static arrays
                    </h3>
                    <p className="p">
                        Static arrays have fixed size decided at compile time.
                        They live on the stack (most common) and cannot grow or
                        shrink.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - int array</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int a[5] = {10, 20, 30, 40, 50};

  cout << a[0] << endl; // output - 10
  cout << a[4] << endl; // output - 50
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Arrays do not know their own length. You must track size
                        yourself or use std::array or std::vector.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiGrid />
                        </span>
                        Multidimensional arrays
                    </h3>
                    <p className="p">
                        A 2D array is like a table. Memory is still contiguous,
                        but indexed using row and column.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - 2D array</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };

  cout << m[0][1] << endl; // output - 2
  cout << m[1][2] << endl; // output - 6
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        In function parameters, you must provide the second
                        dimension size for raw 2D arrays.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiType />
                        </span>
                        Character arrays
                    </h3>
                    <p className="p">
                        A character array is an array of chars. If it represents
                        a C style string, it must end with a null character
                        '\\0'. That null character tells where the string ends.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - char array basics
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  char x[4] = {'c', 'a', 't', '\\0'};
  cout << x << endl; // output - cat
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLink />
                        </span>
                        C style strings
                    </h3>
                    <p className="p">
                        C strings are char arrays with '\\0' at the end. They
                        are fast but easy to mess up because you must manage
                        sizes, copying, and bounds yourself.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - C string using cstring
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <cstring>
using namespace std;

int main() {
  char name[20] = "Ashish";

  cout << strlen(name) << endl; // output - 6
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Avoid unsafe functions like gets or strcpy without size
                        checks. Prefer std::string in C++.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiBox />
                        </span>
                        std::string
                    </h3>
                    <p className="p">
                        std::string is the modern safe string type in C++. It
                        manages memory automatically and supports many useful
                        operations.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - std::string</div>
                        <pre className="code">
                            {`#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "hello";
  s += " world";

  cout << s << endl; // output - hello world
  cout << s.size() << endl; // output - 11
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">String operations</h3>
                    <p className="p">
                        Common operations include concatenation, length, access
                        by index, substring, and finding text.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - common string operations
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "abcdef";

  cout << s[0] << endl; // output - a
  cout << s.substr(2, 3) << endl; // output - cde

  size_t pos = s.find("cd");
  cout << pos << endl; // output - 2

  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        find returns string::npos if the text is not found.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        Vector basics
                    </h3>
                    <p className="p">
                        std::vector is a dynamic array. It grows automatically
                        and stores elements in contiguous memory. It is one of
                        the most used STL containers.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - vector</div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> v;

  v.push_back(10);
  v.push_back(20);

  cout << v.size() << endl; // output - 2
  cout << v[1] << endl; // output - 20

  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        push_back may reallocate memory when vector grows. Use
                        reserve if you know size in advance.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">std::array</h3>
                    <p className="p">
                        std::array is a fixed size container with array like
                        speed but safer features. It knows its size and supports
                        .size() and STL algorithms.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - std::array</div>
                        <pre className="code">
                            {`#include <iostream>
#include <array>
using namespace std;

int main() {
  array<int, 3> a = {1, 2, 3};

  cout << a.size() << endl; // output - 3
  cout << a[2] << endl; // output - 3

  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use std::array for fixed size and std::vector for
                        variable size.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ArraysAndStrings;
