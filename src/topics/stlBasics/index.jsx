// stlBasics/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBox,
    FiLayers,
    FiRepeat,
    FiZap,
    FiCode,
} from "react-icons/fi";

const StlBasics = () => {
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

                <span className="title">Standard Template Library - STL</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        STL is a big part of modern C++. It gives you ready to
                        use data structures and algorithms. The main idea is
                        simple - you store data in containers, you access them
                        using iterators, and you process them using algorithms.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Containers
                    </h3>
                    <p className="p">
                        Containers store data. Choose the container based on how
                        you add, remove, and search elements.
                    </p>

                    <div className="grid2">
                        <div className="mini">
                            <div className="miniTitle">vector</div>
                            <div className="miniText">
                                Dynamic array. Fast random access. Good default
                                choice.
                            </div>
                        </div>

                        <div className="mini">
                            <div className="miniTitle">list</div>
                            <div className="miniText">
                                Doubly linked list. Fast insert delete in
                                middle. No random access.
                            </div>
                        </div>

                        <div className="mini">
                            <div className="miniTitle">deque</div>
                            <div className="miniText">
                                Double ended queue. Fast push front and back.
                                Random access supported.
                            </div>
                        </div>

                        <div className="mini">
                            <div className="miniTitle">set</div>
                            <div className="miniText">
                                Sorted unique values. Fast search. Usually tree
                                based.
                            </div>
                        </div>

                        <div className="mini">
                            <div className="miniTitle">map</div>
                            <div className="miniText">
                                Key value store. Sorted by key. Fast lookup.
                            </div>
                        </div>

                        <div className="mini">
                            <div className="miniTitle">unordered_map</div>
                            <div className="miniText">
                                Key value store using hashing. Average O(1)
                                lookup.
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - basic containers
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
#include <map>
#include <unordered_map>
using namespace std;

int main() {
  vector<int> v = {3, 1, 2};
  map<string, int> marks;
  unordered_map<string, int> freq;

  marks["ash"] = 95;
  freq["cpp"]++;

  cout << v.size() << endl;        // output - 3
  cout << marks["ash"] << endl;    // output - 95
  cout << freq["cpp"] << endl;     // output - 1
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
                        Iterators
                    </h3>
                    <p className="p">
                        Iterators are like pointers that help you traverse
                        containers. Most algorithms work with iterators instead
                        of specific containers.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - iterate a vector
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> v = {10, 20, 30};

  for (auto it = v.begin(); it != v.end(); it++) {
    cout << *it << " ";
  }

  // output - 10 20 30
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
                        Algorithms
                    </h3>
                    <p className="p">
                        Algorithms are reusable functions that work on iterator
                        ranges. Most live in the algorithm header.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">sort</div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {4, 1, 3, 2};
  sort(v.begin(), v.end());

  for (int x : v) cout << x << " ";
  // output - 1 2 3 4
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">find</div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {5, 7, 9};
  auto it = find(v.begin(), v.end(), 7);

  if (it != v.end()) cout << "found" << endl;
  else cout << "not found" << endl;

  // output - found
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">count</div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {1, 2, 2, 2, 3};
  int c = count(v.begin(), v.end(), 2);

  cout << c << endl;
  // output - 3
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">transform</div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {1, 2, 3};
  vector<int> out(v.size());

  transform(v.begin(), v.end(), out.begin(), [](int x) {
    return x * 2;
  });

  for (int x : out) cout << x << " ";
  // output - 2 4 6
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCode />
                        </span>
                        Lambda expressions
                    </h3>
                    <p className="p">
                        Lambdas are small anonymous functions. They are
                        extremely common with STL algorithms.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - custom sort using lambda
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {3, 10, 2, 7};

  // sort descending
  sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;
  });

  for (int x : v) cout << x << " ";
  // output - 10 7 3 2
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Functional utilities</h3>
                    <p className="p">
                        The functional header provides tools for function like
                        objects and helpers. You will often see std::function
                        and std::greater in real code.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            std::greater - comparator used in sorting
                        </li>
                        <li>
                            <span className="dot" />
                            std::function - store a callable in a variable
                        </li>
                        <li>
                            <span className="dot" />
                            std::bind - bind arguments to create a new callable
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">Example - std::function</div>
                        <pre className="code">
                            {`#include <iostream>
#include <functional>
using namespace std;

int add(int a, int b) { return a + b; }

int main() {
  function<int(int,int)> fn = add;
  cout << fn(2, 5) << endl;

  // output - 7
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        In competitive programming, STL helps you write shorter
                        and faster solutions. In real projects, STL improves
                        safety and readability.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default StlBasics;
