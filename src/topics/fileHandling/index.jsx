// fileHandling/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiFileText,
    FiFolder,
    FiEdit3,
    FiBookOpen,
    FiCode,
} from "react-icons/fi";

const FileHandling = () => {
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
                    <FiFileText />
                </span>

                <span className="title">File Handling</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        File handling in C++ is done using stream classes from
                        the standard library. The main header is{" "}
                        <code>fstream</code>. You read files using{" "}
                        <code>ifstream</code> and write files using{" "}
                        <code>ofstream</code>. Always check if the file opened
                        successfully before reading or writing.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiBookOpen />
                        </span>
                        fstream
                    </h3>
                    <p className="p">
                        <code>fstream</code> is the header that provides file
                        stream classes. It contains <code>ifstream</code>,{" "}
                        <code>ofstream</code>, and <code>fstream</code>.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - include fstream</div>
                        <pre className="code">
                            {`#include <fstream>

// output - fstream included`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiFolder />
                        </span>
                        ifstream
                    </h3>
                    <p className="p">
                        <code>ifstream</code> is used for reading from files.
                        You open a file path and then read using{" "}
                        <code>getline</code> or stream extraction{" "}
                        <code>&gt;&gt;</code>.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - open file for reading
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::ifstream in("notes.txt");

  if (!in.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  std::cout << "File opened\\n";
  in.close();
  return 0;
}

// output - File opened (if notes.txt exists)`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiEdit3 />
                        </span>
                        ofstream
                    </h3>
                    <p className="p">
                        <code>ofstream</code> is used for writing to files. By
                        default it overwrites the file content. If you want to
                        append, use <code>std::ios::app</code>.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example - write to file</div>
                        <pre className="code">
                            {`#include <iostream>
#include <fstream>

int main() {
  std::ofstream out("log.txt");

  if (!out.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  out << "Hello from C++\\n";
  out.close();

  std::cout << "Written to file\\n";
  return 0;
}

// output - Written to file`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">Example - append mode</div>
                        <pre className="code">
                            {`#include <fstream>

int main() {
  std::ofstream out("log.txt", std::ios::app);
  out << "New line appended\\n";
  return 0;
}

// output - adds a new line at end of log.txt`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Reading files</h3>
                    <p className="p">
                        There are two common ways to read - line by line using{" "}
                        <code>getline</code> or word by word using{" "}
                        <code>&gt;&gt;</code>. For text files, line by line is
                        usually easiest.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - read line by line
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::ifstream in("notes.txt");
  if (!in.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  std::string line;
  while (std::getline(in, line)) {
    std::cout << line << "\\n";
  }

  in.close();
  return 0;
}

// output - prints full file line by line`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - read word by word
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::ifstream in("notes.txt");
  if (!in.is_open()) return 0;

  std::string word;
  while (in >> word) {
    std::cout << word << "\\n";
  }

  return 0;
}

// output - prints each word on a new line`}
                        </pre>
                    </div>

                    <div className="hint">
                        Tip - getline reads spaces too, so it is better for full
                        sentences. The &gt;&gt; operator splits by whitespace.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Writing files</h3>
                    <p className="p">
                        You can write text using <code>&lt;&lt;</code> just like
                        printing to console. Prefer adding <code>\\n</code> for
                        new lines. Always close the file when done.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            Example - write multiple lines
                        </div>
                        <pre className="code">
                            {`#include <iostream>
#include <fstream>

int main() {
  std::ofstream out("report.txt");
  if (!out.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  out << "C++ Report\\n";
  out << "Line 1\\n";
  out << "Line 2\\n";
  out.close();

  std::cout << "Report saved\\n";
  return 0;
}

// output - Report saved`}
                        </pre>
                    </div>

                    <div className="hint">
                        Tip - if you forget to close, the destructor closes it
                        when the stream object goes out of scope, but closing
                        explicitly is a good habit.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FileHandling;
