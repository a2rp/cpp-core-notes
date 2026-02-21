// modernCppFeatures/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiCpu,
    FiCode,
    FiBox,
    FiLayers,
    FiGitMerge,
} from "react-icons/fi";

const ModernCppFeatures = () => {
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
                    <FiZap />
                </span>

                <span className="title">Modern C++ Features</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Modern C++ (C++11 and later) makes C++ safer and more
                        expressive. The big idea is simple - write less
                        boilerplate, avoid raw memory bugs, and let the compiler
                        help you. These features are very common in real
                        projects and interviews.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        auto
                    </h3>
                    <p className="p">
                        auto lets the compiler infer the type from the
                        initializer. It is useful with long STL types. Still,
                        keep code readable.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - auto with vector
                        </div>
                        <pre className="code">
                            {`#include <vector>
#include <iostream>

int main() {
  std::vector<int> a = {1, 2, 3};

  auto x = a[0]; // int
  std::cout << x << std::endl;

  // output - 1
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">decltype</h3>
                    <p className="p">
                        decltype gives you the type of an expression without
                        evaluating it. It is useful in templates and generic
                        code.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - decltype</div>
                        <pre className="code">
                            {`#include <iostream>

int main() {
  int a = 10;
  decltype(a) b = 20; // b is int

  std::cout << b << std::endl;
  // output - 20
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">nullptr</h3>
                    <p className="p">
                        nullptr is a dedicated null pointer value. It avoids
                        confusion with 0 or NULL, especially with function
                        overloading.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - nullptr</div>
                        <pre className="code">
                            {`#include <iostream>

int main() {
  int *p = nullptr;

  if (p == nullptr) {
    std::cout << "p is null" << std::endl;
  }

  // output - p is null
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Range based for</h3>
                    <p className="p">
                        Range based for is cleaner for iterating containers. Use
                        references when you want to avoid copies.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - range based for</div>
                        <pre className="code">
                            {`#include <vector>
#include <iostream>

int main() {
  std::vector<int> a = {2, 4, 6};

  for (int v : a) {
    std::cout << v << " ";
  }

  // output - 2 4 6
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiGitMerge />
                        </span>
                        Move semantics
                    </h3>
                    <p className="p">
                        Move semantics avoids expensive copies by transferring
                        ownership of resources. std::move converts an lvalue
                        into an rvalue so move operations can happen.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - std::move</div>
                        <pre className="code">
                            {`#include <string>
#include <iostream>
#include <utility>

int main() {
  std::string a = "hello";
  std::string b = std::move(a);

  std::cout << b << std::endl;
  // output - hello

  // a is now valid but unspecified state
  return 0;
}`}
                        </pre>
                    </div>
                    <div className="hint">
                        Move does not delete data magically. It just allows the
                        destination to "steal" resources from the source.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Smart pointers</h3>
                    <p className="p">
                        Smart pointers manage memory automatically. Prefer them
                        over raw new and delete. unique_ptr is single owner,
                        shared_ptr is shared ownership.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - unique_ptr</div>
                        <pre className="code">
                            {`#include <memory>
#include <iostream>

int main() {
  auto p = std::make_unique<int>(42);

  std::cout << *p << std::endl;
  // output - 42

  // memory is freed automatically
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Lambda expressions</h3>
                    <p className="p">
                        Lambdas are small inline functions, commonly used with
                        STL algorithms. Capture lets you use variables from
                        outer scope.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - lambda with sort
                        </div>
                        <pre className="code">
                            {`#include <vector>
#include <algorithm>
#include <iostream>

int main() {
  std::vector<int> a = {3, 1, 2};

  std::sort(a.begin(), a.end(), [](int x, int y) {
    return x < y;
  });

  for (int v : a) std::cout << v << " ";
  // output - 1 2 3

  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">constexpr</h3>
                    <p className="p">
                        constexpr means the value can be computed at compile
                        time. This enables faster code and safer constants.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - constexpr function
                        </div>
                        <pre className="code">
                            {`#include <iostream>

constexpr int square(int x) {
  return x * x;
}

int main() {
  constexpr int v = square(5);
  std::cout << v << std::endl;

  // output - 25
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Structured bindings</h3>
                    <p className="p">
                        Structured bindings unpack tuples, pairs, and structs
                        into named variables. It makes code cleaner and
                        readable.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - pair unpack</div>
                        <pre className="code">
                            {`#include <utility>
#include <iostream>

int main() {
  std::pair<int, int> p = {10, 20};

  auto [a, b] = p;
  std::cout << a << " " << b << std::endl;

  // output - 10 20
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">std::optional</h3>
                    <p className="p">
                        optional represents a value that may or may not exist.
                        It is safer than returning magic values like -1.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - optional return</div>
                        <pre className="code">
                            {`#include <optional>
#include <iostream>

std::optional<int> findEven(int x) {
  if (x % 2 == 0) return x;
  return std::nullopt;
}

int main() {
  auto r = findEven(7);

  if (!r.has_value()) {
    std::cout << "not found" << std::endl;
  }

  // output - not found
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">std::variant</h3>
                    <p className="p">
                        variant can hold one value from multiple types. It is a
                        type safe union. Use std::visit to handle the active
                        type.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - variant</div>
                        <pre className="code">
                            {`#include <variant>
#include <iostream>
#include <string>

int main() {
  std::variant<int, std::string> v;

  v = 5;
  std::cout << std::get<int>(v) << std::endl; // output - 5

  v = std::string("ok");
  std::cout << std::get<std::string>(v) << std::endl; // output - ok

  return 0;
}`}
                        </pre>
                    </div>
                    <div className="hint">
                        Use std::holds_alternative&lt;T&gt;(v) to check which
                        type is active.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        std::thread basics
                    </h3>
                    <p className="p">
                        std::thread allows running code in parallel. Always join
                        or detach a thread, otherwise your program may
                        terminate.
                    </p>
                    <div className="codeBlock">
                        <div className="codeTop">Example - thread + join</div>
                        <pre className="code">
                            {`#include <thread>
#include <iostream>

void work() {
  std::cout << "worker running" << std::endl;
}

int main() {
  std::thread t(work);
  t.join();

  // output - worker running
  return 0;
}`}
                        </pre>
                    </div>
                    <div className="hint">
                        Thread safety is a big topic. For shared data you will
                        need mutex or other synchronization tools.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ModernCppFeatures;
