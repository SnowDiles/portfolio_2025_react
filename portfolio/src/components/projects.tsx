'use client';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

const Projects = ({ username = 'SnowDiles' }: { username?: string }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);

        if (!response.ok) {
          throw new Error(`Erreur GitHub API: ${response.status}`);
        }

        const data: Repo[] = await response.json();

        const filteredRepos = data
          .filter(repo => !repo.fork && !repo.archived)
          .slice(0, 6);

        setRepos(filteredRepos);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Une erreur inconnue est survenue';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
      
    };

    fetchRepos();
  }, [username]);

  const renderRepoCard = (repo: Repo) => {
    return (
      <div
        key={repo.id}
        className="bg-[#112240] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:cursor-pointer"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="text-[#63edd1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le projet ${repo.name}`}
            className="text-[#63edd1] hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#63edd1] transition-colors"
          >
            {repo.name}
          </a>
        </h3>

        <p className="text-gray-300 mb-4">
          {repo.description || "Aucune description disponible."}
        </p>

        <div className="flex flex-wrap gap-2">
          {repo.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs text-[#63edd1] bg-[#173250] px-2 py-1 rounded"
            >
              {topic}
            </span>
          ))}

          {repo.language && (
            <span className="text-xs text-[#63edd1] bg-[#173250] px-2 py-1 rounded">
              {repo.language}
            </span>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-[#0a1930] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">
            <span className="text-[#63edd1] font-mono">02. </span>
            <span className="text-2xl font-semibold">Autres réalisations pertinentes</span>
          </h2>
          <div className="text-gray-300">Chargement des projets...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0a1930] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">
            <span className="text-[#63edd1] font-mono">02. </span>
            <span className="text-2xl font-semibold">Autres réalisations pertinentes</span>
          </h2>
          <div className="text-red-400">Erreur lors du chargement des projets: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a1930] text-white p-8 pt-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8">
          <span className="text-[#63edd1] font-mono">02. </span>
          <span className="text-2xl font-semibold">Autres réalisations pertinentes</span>
        </h2>

        {repos.length === 0 ? (
          <div className="text-gray-300">Aucun projet trouvé.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map(repo => renderRepoCard(repo))}
          </div>
        )}

        <div className="mt-8 text-center flex justify-center items-center">
          <motion.div className="h-auto bg-[#63edd1] rounded-sm mt-14">
            <motion.div whileHover={{ y: -5, x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="https://github.com/SnowDiles" target="_blank" rel="noopener noreferrer" className="rounded-sm w-auto bg-[#0a1930] border border-[#63edd1] p-3 pl-7 pr-7 md:p-4 md:pr-4 md:pl-4 text-[#63edd1] flex flex-row items-center hover:cursor-pointer">
          Mes autres projets <img src="/images/redirect.png" alt="redirect github" className="h-7 w-7 ml-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
