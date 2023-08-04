import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'

function footer() {
  return (
    <footer className="mt-16 bg-white shadow dark:bg-gray-900">
      <div className="container md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center sm:mb-0"
          >
            <img src="logo.png" className="mr-3 h-8" alt="Flowbite Logo" />
          </a>
          <ul className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Button size="icon">
                <Instagram />
              </Button>
            </li>
            <li>
              <Button size="icon">
                <Youtube />
              </Button>
            </li>
            <li>
              <Button size="icon">
                <Facebook />
              </Button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Copyright ⓒ DAEWON MEDIA CO., LTD. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default footer
