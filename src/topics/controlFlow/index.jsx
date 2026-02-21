// controlFlow/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiShuffle,
    FiGitBranch,
    FiRepeat,
    FiCornerDownRight,
    FiSkipForward,
    FiShield,
    FiCode,
} from "react-icons/fi";

const ControlFlow = () => {
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
                    <FiShuffle />
                </span>

                <span className="title">Control Flow</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Control flow decides how your program runs - which lines
                        execute, how many times, and when to stop. In C++, you
                        control decisions with if and switch, and repetition
                        with loops like for and while.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiGitBranch />
                        </span>
                        if else
                    </h3>
                    <p className="p">
                        Use if else when you want to run code based on a
                        condition that is true or false.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - basic if else</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int age = 18;

  if (age >= 18) {
    cout << "Adult" << endl;
  } else {
    cout << "Minor" << endl;
  }

  // output - Adult
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCornerDownRight />
                        </span>
                        switch
                    </h3>
                    <p className="p">
                        Use switch when you have many fixed options based on one
                        value. Do not forget break or execution will continue
                        into the next case.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - switch</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int day = 2;

  switch (day) {
    case 1:
      cout << "Mon" << endl;
      break;
    case 2:
      cout << "Tue" << endl;
      break;
    default:
      cout << "Unknown" << endl;
  }

  // output - Tue
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
                        for
                    </h3>
                    <p className="p">
                        Use for when you know how many times you want to repeat.
                        It has initialization, condition, and update in one
                        line.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - for loop</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 3; i++) {
    cout << i << " ";
  }

  // output - 1 2 3
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">while</h3>
                    <p className="p">
                        Use while when you want to repeat until a condition
                        becomes false. It checks condition before running the
                        loop body.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - while loop</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int n = 3;

  while (n > 0) {
    cout << n << " ";
    n--;
  }

  // output - 3 2 1
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">do while</h3>
                    <p className="p">
                        do while runs at least once because the condition is
                        checked after the loop body.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - do while</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  int x = 0;

  do {
    cout << "Runs once" << endl;
  } while (x != 0);

  // output - Runs once
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiSkipForward />
                        </span>
                        break
                    </h3>
                    <p className="p">
                        break exits the nearest loop or switch immediately.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - break</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3) break;
    cout << i << " ";
  }

  // output - 1 2
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">continue</h3>
                    <p className="p">
                        continue skips the current iteration and jumps to the
                        next iteration of the loop.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - continue</div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    cout << i << " ";
  }

  // output - 1 2 4 5
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Nested loops</h3>
                    <p className="p">
                        A nested loop is a loop inside another loop. It is used
                        for grid style problems, patterns, and comparisons.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - nested loops (2 x 3)
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  for (int row = 1; row <= 2; row++) {
    for (int col = 1; col <= 3; col++) {
      cout << "*";
    }
    cout << endl;
  }

  // output -
  // ***
  // ***
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Nested loops can become slow if both loops are big. If
                        you see two loops, think about O(n^2).
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiRepeat />
                        </span>
                        Range based for loop
                    </h3>
                    <p className="p">
                        Range based for is a clean way to loop through arrays
                        and containers like vector. It is safer and easier than
                        manual indexing.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - range based for</div>
                        <pre className="code">
                            {`#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> nums = {10, 20, 30};

  for (int x : nums) {
    cout << x << " ";
  }

  // output - 10 20 30
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - using reference (avoid copy)
                        </div>
                        <pre className="code">
                            {`for (const int& x : nums) {
  // use x without copying
}

// output - same result, but more efficient`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        Guard clauses
                    </h3>
                    <p className="p">
                        Guard clauses are early returns that handle invalid
                        cases at the top. This reduces nesting and keeps code
                        easier to read.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - guard clause vs nested if
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

void printAdultMessage(int age) {
  if (age < 18) {
    cout << "Not allowed" << endl;
    return; // guard clause
  }

  cout << "Welcome" << endl;
}

int main() {
  printAdultMessage(16); // output - Not allowed
  printAdultMessage(21); // output - Welcome
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Guard clauses are great for validation at the start of a
                        function. Less nesting, more clarity.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCode />
                        </span>
                        Quick mental checklist
                    </h3>
                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use if else for decision logic
                        </li>
                        <li>
                            <span className="dot" />
                            Use switch for many fixed cases
                        </li>
                        <li>
                            <span className="dot" />
                            Use for when count is known
                        </li>
                        <li>
                            <span className="dot" />
                            Use while when stopping condition is unknown
                        </li>
                        <li>
                            <span className="dot" />
                            Use do while for at least one run
                        </li>
                        <li>
                            <span className="dot" />
                            Use break and continue carefully
                        </li>
                        <li>
                            <span className="dot" />
                            Prefer range based for with containers
                        </li>
                        <li>
                            <span className="dot" />
                            Use guard clauses to avoid deep nesting
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ControlFlow;
