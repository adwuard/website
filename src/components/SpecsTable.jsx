import React from 'react';
import { clsx } from 'clsx';

/**
 * SpecsTable component renders a two-column table displaying specifications
 * @param {Object} props - Component props
 * @param {Array<{name: string, value: string|number|React.ReactNode}>} props.specs - Array of specification objects with name and value
 * @param {string} [props.className] - Optional additional CSS classes
 * @returns {JSX.Element} - Rendered component
 */
export default function SpecsTable({ specs, className, ...props }) {
  if (!specs || !specs.length) {
    return null;
  }

  return (
    <div className={clsx('tw-overflow-hidden tw-rounded-lg tw-border tw-border-solid tw-border-base-content tw-border-opacity-15 dark:tw-border-opacity-60', className)}>
      <table className="tw-w-full tw-border-collapse">
        <tbody>
          {specs.map((spec, index) => (
            <tr 
              key={index} 
              className={clsx(
                'tw-border-b tw-border-solid tw-border-base-content tw-border-opacity-15 dark:tw-border-opacity-60',
                index === specs.length - 1 && 'tw-border-b-0'
              )}
            >
              <td className="tw-p-3 tw-font-medium tw-bg-gray-50 dark:tw-bg-gray-800 tw-w-1/3">{spec.name}</td>
              <td className="tw-p-3">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}