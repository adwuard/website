import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import MDXContent from '@theme/MDXContent';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { clsx } from 'clsx';

/**
 * MarkdownSection component renders markdown content from a file path or raw string
 * @param {Object} props - Component props
 * @param {string} props.source - Path to markdown file or raw markdown string
 * @param {string} [props.className] - Optional additional CSS classes
 * @returns {JSX.Element} - Rendered component
 */
export default function MarkdownSection({ source, className, ...props }) {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function loadContent() {
      setIsLoading(true);
      setError(null);

      try {
        // Check if source is a file path or raw markdown
        if (source.startsWith('/') || source.includes('.md')) {
          // It's a file path, dynamically import it
          const module = await import(`@site${source}`);
          setContent(module.default);
        } else {
          // It's raw markdown content, we'll use a wrapper to render it
          // This is a placeholder as direct string rendering requires additional setup
          setContent(() => {
            // This is a simple wrapper component that would normally be processed by MDX
            // In a real implementation, you might need a runtime MDX processor
            return function RawContent() {
              return (
                <div dangerouslySetInnerHTML={{ __html: source }} />
              );
            };
          });
        }
      } catch (err) {
        console.error('Error loading markdown content:', err);
        setError(`Failed to load content: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, [source, location.pathname]);

  // Render loading state
  if (isLoading) {
    return <div className="tw-animate-pulse tw-h-32 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded-md" />;
  }

  // Render error state
  if (error) {
    return (
      <div className="tw-p-4 tw-border tw-border-red-300 tw-bg-red-50 dark:tw-bg-red-900/20 tw-rounded-md tw-text-red-700 dark:tw-text-red-300">
        {error}
      </div>
    );
  }

  // Render content only in browser to avoid SSR hydration issues with dynamic imports
  return (
    <BrowserOnly fallback={<div>Loading content...</div>}>
      {() => (
        <div className={clsx('markdown-section', className)} {...props}>
          {content && (
            <MDXContent>
              {React.createElement(content)}
            </MDXContent>
          )}
        </div>
      )}
    </BrowserOnly>
  );
}
