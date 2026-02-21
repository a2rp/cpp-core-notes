// operators/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiHash,
    FiDivide,
    FiShuffle,
    FiAlertCircle,
    FiZap,
    FiCode,
} from "react-icons/fi";

const Operators = () => {
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

                <span className="title">Operators</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Operators are symbols that tell C++ to perform an action
                        on values - like add, compare, assign, or work with
                        bits. Learning operators properly makes your code
                        shorter and more readable, and it helps you understand
                        conditions, loops, and low level logic.
                    </p>
                </div>

                {/* Arithmetic */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiDivide />
                        </span>
                        Arithmetic operators
                    </h3>
                    <p className="p">
                        Used for basic math. Includes + - * / % and also
                        increment and decrement.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - arithmetic</div>
                        <pre className="code">
                            {`int a = 10;
int b = 3;

int sum = a + b;   // 13
int diff = a - b;  // 7
int mul = a * b;   // 30
int div = a / b;   // 3   (integer division)
int mod = a % b;   // 1

a++; // a becomes 11
b--; // b becomes 2

// output (values):
// sum=13 diff=7 mul=30 div=3 mod=1 a=11 b=2`}
                        </pre>
                    </div>

                    <div className="hint">
                        Note - integer division drops the decimal part. For
                        decimals use double or float.
                    </div>
                </div>

                {/* Relational */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertCircle />
                        </span>
                        Relational operators
                    </h3>
                    <p className="p">
                        Used to compare two values. Result is a boolean (true or
                        false).
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - comparison</div>
                        <pre className="code">
                            {`int x = 5;
int y = 8;

bool a = (x < y);   // true
bool b = (x > y);   // false
bool c = (x == y);  // false
bool d = (x != y);  // true
bool e = (x <= 5);  // true
bool f = (y >= 10); // false

// output:
// a=true b=false c=false d=true e=true f=false`}
                        </pre>
                    </div>
                </div>

                {/* Logical */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiZap />
                        </span>
                        Logical operators
                    </h3>
                    <p className="p">
                        Used to combine conditions. && means AND, || means OR,
                        and ! means NOT. These are common in if and loops.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - logical</div>
                        <pre className="code">
                            {`int age = 20;
bool hasId = true;

bool allowed = (age >= 18) && hasId; // true

bool weekend = false;
bool holiday = true;

bool free = weekend || holiday; // true

bool notHoliday = !holiday; // false

// output:
// allowed=true free=true notHoliday=false`}
                        </pre>
                    </div>

                    <div className="hint">
                        Short circuit behavior - in && if first is false, second
                        is not checked. In || if first is true, second is not
                        checked.
                    </div>
                </div>

                {/* Bitwise */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShuffle />
                        </span>
                        Bitwise operators
                    </h3>
                    <p className="p">
                        Works at the bit level. Useful for flags, masks, and
                        performance oriented logic. Common operators are & | ^ ~
                        and shifts &lt;&lt; &gt;&gt;.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - bitwise basics</div>
                        <pre className="code">
                            {`int a = 5; // 0101
int b = 3; // 0011

int andV = a & b; // 0001 -> 1
int orV  = a | b; // 0111 -> 7
int xorV = a ^ b; // 0110 -> 6
int shL  = a << 1; // 1010 -> 10
int shR  = a >> 1; // 0010 -> 2

// output:
// andV=1 orV=7 xorV=6 shL=10 shR=2`}
                        </pre>
                    </div>

                    <div className="hint">
                        Bitwise ops are different from logical ops. Use & | ^
                        for bits and use && || for boolean conditions.
                    </div>
                </div>

                {/* Assignment */}
                <div className="section">
                    <h3 className="h3">Assignment operators</h3>
                    <p className="p">
                        Used to assign values. Includes = and compound forms
                        like += -= *= /= %= and bit forms like &= |= ^=.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - assignment</div>
                        <pre className="code">
                            {`int n = 10;

n += 5;  // n = 15
n -= 3;  // n = 12
n *= 2;  // n = 24
n /= 4;  // n = 6
n %= 4;  // n = 2

// output:
// n=2`}
                        </pre>
                    </div>
                </div>

                {/* Ternary */}
                <div className="section">
                    <h3 className="h3">Ternary operator</h3>
                    <p className="p">
                        A short form of if else that returns a value. Syntax -
                        condition ? valueIfTrue : valueIfFalse
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - ternary</div>
                        <pre className="code">
                            {`int marks = 72;

const char* result = (marks >= 40) ? "pass" : "fail";

// output:
// result=pass`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use ternary for simple choices. For complex logic,
                        prefer if else for readability.
                    </div>
                </div>

                {/* sizeof */}
                <div className="section">
                    <h3 className="h3">sizeof operator</h3>
                    <p className="p">
                        sizeof gives the size in bytes of a type or a variable.
                        It is decided at compile time for most cases.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - sizeof</div>
                        <pre className="code">
                            {`int a = 10;
double d = 3.14;

int arr[5] = {1,2,3,4,5};

int s1 = sizeof(a);     // typically 4
int s2 = sizeof(d);     // typically 8
int s3 = sizeof(arr);   // 5 * sizeof(int) -> typically 20

// output (typical):
// s1=4 s2=8 s3=20`}
                        </pre>
                    </div>

                    <div className="hint">
                        Size can vary by system and compiler. Do not hardcode
                        assumptions.
                    </div>
                </div>

                {/* Scope resolution */}
                <div className="section">
                    <h3 className="h3">Scope resolution operator ::</h3>
                    <p className="p">
                        :: is used to access names inside a scope - like a
                        namespace, class, or global scope. Most common use is
                        std::cout and std::vector.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - namespace and global
                        </div>
                        <pre className="code">
                            {`#include <iostream>

int value = 10;

int main() {
  int value = 20;

  std::cout << value << std::endl;  // output - 20 (local)
  std::cout << ::value << std::endl; // output - 10 (global)

  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        ::value means global value. std::cout means cout inside
                        std namespace.
                    </div>
                </div>

                <div className="note">
                    Quick tip - avoid writing very complex expressions with many
                    operators in one line. Add parentheses for clarity.
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Operators;
