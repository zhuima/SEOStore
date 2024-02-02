import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white" aria-labelledby="footerHeading">
            <h2 id="footerHeading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <a href="https://twitter.com/tailwindawesome" className="flex items-center space-x-2 text-cool-indigo-600 hover:text-cool-indigo-500 transition-colors duration-75 font-semibold">
                            <svg width="20" height="20" fill="currentColor" className="opacity-80">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                            <p>
                                Follow us on twitter
                            </p>
                        </a>
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        © 2024 Tailwind Awesome, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>



    )
}

