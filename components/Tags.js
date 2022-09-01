import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto flex-wrap">
        {Object.keys(tags).map(key => {
          const selected = key === currentTag
          return (
            <li
              key={key}
              className={`mr-3 font-medium border whitespace-nowrap dark:text-gray-300 mb-2 ${
                selected
                  ? 'text-white bg-black border-black dark:bg-gray-600 dark:border-gray-600'
                  : 'bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800'
              }`}
            >
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
              >
                <a className="px-2 py-2 block text-xs font-normal">
                  {`${key} (${tags[key]})`}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tags
