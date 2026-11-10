import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// items: [{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]
// The last item has no `to`, so it renders as the current page (plain text).
const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label='Breadcrumb' className='text-sm'>
      <ol className='flex flex-wrap items-center gap-1 list-none p-0 m-0'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className='flex items-center gap-1'>
              {isLast || !item.to ? (
                <span aria-current='page' className='font-semibold text-[#41445D]'>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className='text-gray-500 hover:text-[#ff5a1f] hover:underline transition-colors'
                >
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight size={14} className='text-gray-400' />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb