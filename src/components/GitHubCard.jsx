import { useEffect, useState } from "react";

const USERNAME = "whoami-sonu";

function GitHubCard() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGitHub() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (!userRes.ok) {
          throw new Error("Failed to fetch GitHub profile");
        }

        const userData = await userRes.json();
        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(Array.isArray(repoData) ? repoData : []);
      } catch (err) {
        console.error(err);
        setError("Unable to load GitHub profile.");
      } finally {
        setLoading(false);
      }
    }

    loadGitHub();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-card github">
        <h3>GitHub</h3>
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-card github">
        <h3>GitHub</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="dashboard-card github">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="github-avatar"
      />

      <h3>{user.name}</h3>

      <p>@{user.login}</p>

      <p>{user.bio}</p>

      <hr />

      <p>📦 Public Repositories: {user.public_repos}</p>
      <p>👥 Followers: {user.followers}</p>
      <p>➡ Following: {user.following}</p>

      {user.location && <p>📍 {user.location}</p>}

      <hr />

      <h4>Latest Repositories</h4>

      {repos.length > 0 ? (
        repos.map((repo) => (
          <p key={repo.id}>• {repo.name}</p>
        ))
      ) : (
        <p>No repositories found.</p>
      )}

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="dashboard-link"
      >
        View GitHub Profile →
      </a>
    </div>
  );
}

export default GitHubCard;