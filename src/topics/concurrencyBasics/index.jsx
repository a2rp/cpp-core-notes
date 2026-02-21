// concurrencyBasics/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCpu,
    FiShuffle,
    FiLock,
    FiShield,
    FiAlertTriangle,
    FiCode,
} from "react-icons/fi";

const ConcurrencyBasics = () => {
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

                <span className="title">Concurrency Basics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Concurrency means doing multiple tasks at the same time.
                        In C++, this usually means running code in multiple
                        threads. It can improve performance, but it also brings
                        new problems like race conditions and deadlocks.
                    </p>
                    <p className="p">
                        The main rule - if multiple threads touch the same data,
                        you must control access to that data.
                    </p>
                </div>

                {/* std::thread */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        std::thread
                    </h3>
                    <p className="p">
                        std::thread starts a new thread of execution. After
                        starting a thread, you should usually call join to wait
                        for it to finish. If you do not join or detach a thread,
                        the program can terminate.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - start and join a thread
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <thread>

void work() {
  std::cout << "Thread running\\n";
}

int main() {
  std::thread t(work);
  t.join(); // wait for thread to finish

  std::cout << "Main done\\n";
  // output -
  // Thread running
  // Main done
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                {/* Mutex */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLock />
                        </span>
                        Mutex
                    </h3>
                    <p className="p">
                        A mutex is a lock that ensures only one thread can enter
                        a critical section at a time. Use it when multiple
                        threads read and write the same shared variable.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - protect shared counter with mutex
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <thread>
#include <mutex>

std::mutex m;
int counter = 0;

void inc() {
  for (int i = 0; i < 10000; i++) {
    m.lock();
    counter++;
    m.unlock();
  }
}

int main() {
  std::thread a(inc);
  std::thread b(inc);

  a.join();
  b.join();

  std::cout << counter << "\\n";
  // output - 20000 (expected with proper locking)
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Manual lock and unlock works, but it is risky. If your
                        code returns early or throws, unlock might not happen.
                        That is why lock_guard is preferred.
                    </div>
                </div>

                {/* lock_guard */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        Lock guard
                    </h3>
                    <p className="p">
                        std::lock_guard automatically locks a mutex when created
                        and unlocks it when it goes out of scope. This is safer
                        because it prevents forgetting to unlock.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - safer locking using lock_guard
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <thread>
#include <mutex>

std::mutex m;
int counter = 0;

void inc() {
  for (int i = 0; i < 10000; i++) {
    std::lock_guard<std::mutex> guard(m);
    counter++;
    // auto unlock when guard goes out of scope
  }
}

int main() {
  std::thread a(inc);
  std::thread b(inc);

  a.join();
  b.join();

  std::cout << counter << "\\n";
  // output - 20000
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                {/* Atomic basics */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        Atomic basics
                    </h3>
                    <p className="p">
                        An atomic variable supports thread safe read and write
                        without a mutex for simple operations. Use atomics for
                        counters, flags, and small shared state. For complex
                        operations across multiple variables, a mutex is still
                        needed.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - atomic counter
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <thread>
#include <atomic>

std::atomic<int> counter(0);

void inc() {
  for (int i = 0; i < 10000; i++) {
    counter++; // atomic increment
  }
}

int main() {
  std::thread a(inc);
  std::thread b(inc);

  a.join();
  b.join();

  std::cout << counter.load() << "\\n";
  // output - 20000
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                {/* Deadlock concept */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Deadlock concept
                    </h3>
                    <p className="p">
                        A deadlock happens when two threads wait forever for
                        each other to release locks. Most deadlocks happen when
                        you lock multiple mutexes in different orders.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - common deadlock pattern
                        </div>
                        <pre className="code">
                            {`// Thread 1 locks A then B
// Thread 2 locks B then A
// both can wait forever

// output - program may hang (deadlock)`}
                        </pre>
                    </div>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Always lock mutexes in the same order
                        </li>
                        <li>
                            <span className="dot" />
                            Keep critical sections small
                        </li>
                        <li>
                            <span className="dot" />
                            Prefer lock_guard and scoped locking
                        </li>
                    </ul>

                    <div className="hint">
                        If you must lock multiple mutexes, use consistent lock
                        ordering or use utilities like std::scoped_lock.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ConcurrencyBasics;
