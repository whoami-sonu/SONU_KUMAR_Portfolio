import GitHubCard from "../components/GitHubCard";
import { dashboard } from "../data/dashboard";

function Dashboard() {
  return (
    <section id="dashboard" className="dashboard">
      <div className="container">

        <h2 className="section-title">
          LIVE CYBER PROFILE
        </h2>

        <div className="dashboard-grid">

          {/* LIVE GITHUB */}
          <GitHubCard />

          {/* TRYHACKME */}
          <div className="dashboard-card thm">

            <h3>TryHackMe</h3>

            <p>👤 {dashboard.tryhackme.username}</p>

            <p>🏆 Rank : {dashboard.tryhackme.rank}</p>

            <p>📚 Rooms : {dashboard.tryhackme.rooms}</p>

            <p>🎖 Badges : {dashboard.tryhackme.badges}</p>

            <p>🔥 Streak : {dashboard.tryhackme.streak}</p>

            <a
              href="https://tryhackme.com/p/WH0AMI"
              target="_blank"
              rel="noreferrer"
              className="dashboard-link"
            >
              View Profile →
            </a>

          </div>

          {/* HACK THE BOX */}

          <div className="dashboard-card htb">

            <h3>Hack The Box</h3>

            <p>👤 {dashboard.htb.username}</p>

            <p>🏅 Rank : {dashboard.htb.rank}</p>

            <p>🖥 Machines : {dashboard.htb.machines}</p>

            <p>🎯 Challenges : {dashboard.htb.challenges}</p>

            <p>⭐ Respect : {dashboard.htb.respect}</p>

            <a
              href="https://ctf.hackthebox.com/user/profile/997501"
              target="_blank"
              rel="noreferrer"
              className="dashboard-link"
            >
              View Profile →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;