import { Typewriter } from "react-simple-typewriter";

function Terminal() {
  return (
    <div className="terminal">

      <div className="terminal-header">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>

        <div className="terminal-title">
          sonu@M2-REDNODE
        </div>
      </div>

      <div className="terminal-content">

        <p>$ whoami</p>

        <p className="terminal-output">
          Sonu Kumar
        </p>

        <br />

        <p>$ role</p>

        <p className="terminal-output">
          <Typewriter
            words={[
              "Web Application Penetration Tester",
              "Red Team Operator",
              "Bug Bounty Researcher",
              "Active Directory Enthusiast",
              "API Security Tester",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={45}
            deleteSpeed={25}
            delaySpeed={1800}
          />
        </p>

        <br />

        <p>$ tools</p>

        <p className="terminal-output">
          Burp Suite
        </p>

        <p className="terminal-output">
          Nmap
        </p>

        <p className="terminal-output">
          BloodHound
        </p>

        <p className="terminal-output">
          NetExec
        </p>

        <p className="terminal-output">
          Impacket
        </p>

        <p className="terminal-output">
          ffuf
        </p>

        <p className="terminal-output">
          Nuclei
        </p>

        <p className="terminal-output">
          RustScan
        </p>

        <br />

        <p>$ status</p>

        <p className="online">

          ● ONLINE

        </p>

      </div>

    </div>
  );
}

export default Terminal;