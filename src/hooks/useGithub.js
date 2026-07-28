import { useEffect, useState } from "react";

const USERNAME = "whoami-sonu";

export default function useGithub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        const userData = await userRes.json();
        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(Array.isArray(repoData) ? repoData : []);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    user,
    repos,
    loading,
  };
}