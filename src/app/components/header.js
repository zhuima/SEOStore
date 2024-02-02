import React from 'react'

export default function Header() {
    return (
        <>
            <nav className="fixed top-0 z-10 w-full border-b border-slate-900/5 bg-gray-50/90 backdrop-blur-xl backdrop-filter">
                <div className="mx-auto max-w-screen-2xl px-2 sm:px-4 lg:px-8">
                    <div className="md:h-18 flex h-16 justify-between">
                        <div className="flex px-2 lg:px-0">
                            <div className="flex flex-shrink-0 items-center">
                                <a className="font-display text-cool-indigo-800 inline-flex items-center text-xl font-black" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="375pt" height="374.999991pt" viewBox="0 0 375 374.999991" version="1.2" className="h-10 h-10 w-auto w-auto sm:h-9 sm:h-9 md:h-10 md:h-10 xl:h-8 xl:h-8">
                                        <defs>
                                            <clipPath id="clip1">
                                                <path d="M 0.425781 0 L 316.175781 0 L 316.175781 315.75 L 0.425781 315.75 Z M 0.425781 0 "></path>
                                            </clipPath>
                                            <clipPath id="clip2">
                                                <path d="M 59.164062 59.589844 L 374.914062 59.589844 L 374.914062 375 L 59.164062 375 Z M 59.164062 59.589844 "></path>
                                            </clipPath>
                                        </defs>
                                        <g id="surface1">
                                            <g clip-path="url(#clip1)" clip-rule="nonzero">
                                                <path className="text-cool-indigo-700 group-hover:text-cool-indigo-500" style={{ stroke: 'none', fillRule: 'nonzero', fill: 'currentColor', fillOpacity: 1 }} d="M 79.363281 0 L 237.238281 0 C 280.839844 0 316.175781 35.335938 316.175781 78.9375 L 316.175781 236.8125 C 316.175781 280.414062 280.839844 315.75 237.238281 315.75 L 79.363281 315.75 C 35.761719 315.75 0.425781 280.414062 0.425781 236.8125 L 0.425781 78.9375 C 0.425781 35.335938 35.761719 0 79.363281 0 Z M 79.363281 0 "></path>
                                            </g>
                                            <g clip-path="url(#clip2)" clip-rule="nonzero">
                                                <path className="text-cool-indigo-500 group-hover:text-cool-indigo-700" style={{ stroke: 'none', fillRule: 'nonzero', fill: 'currentColor', fillOpacity: 1 }} d="M 138.101562 59.589844 L 295.976562 59.589844 C 339.578125 59.589844 374.914062 94.929688 374.914062 138.527344 L 374.914062 296.402344 C 374.914062 340.003906 339.578125 375.339844 295.976562 375.339844 L 138.101562 375.339844 C 94.503906 375.339844 59.164062 340.003906 59.164062 296.402344 L 59.164062 138.527344 C 59.164062 94.929688 94.503906 59.589844 138.101562 59.589844 Z M 138.101562 59.589844 "></path>
                                            </g>
                                        </g>
                                    </svg>

                                    <span className="ml-3 hidden xl:inline-block">Tailwind <span className="text-cool-indigo-600"> Awesome </span></span>
                                </a>
                            </div>

                        </div>

                        <div className="flex items-center">
                            <div className="hidden lg:ml-6 lg:flex lg:space-x-8 xl:ml-8" data-turbo="false">
                                {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                                <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="/">Home</a>
                                <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="/?type=template">Templates</a>
                                <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="/?type=kit">UI kits</a>
                                <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="/?price=free">Freebies</a>
                            </div>
                            {/* <!-- Mobile menu button --> */}
                            <button type="button" className="focus:ring-cool-indigo-500 ml-3 inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset lg:hidden" aria-controls="mobile-menu" aria-expanded="false" data-controller="toggle" data-toggle-remote="#mobile-menu" data-action="click->toggle#toggleRemote">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-toggle-target="toggleable">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-toggle-target="toggleable">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="hidden bg-white/90 backdrop-blur-xl backdrop-filter lg:hidden" id="mobile-menu" data-controller="toggle" data-toggle-target="toggleable">
                    <div className="px-2 pb-3 pt-2">
                        <a className="rounded-md block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" href="/">Home</a>
                        <a className="rounded-md block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" href="/?type=template">Templates</a>
                        <a className="rounded-md block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" href="/?type=kit">UI kits</a>
                        <a className="rounded-md block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" href="/?price=free">Freebies</a>
                    </div>
                    <a className="text-cool-indigo-600 inline-flex w-full items-center justify-center bg-gray-50 px-5 py-3 text-center font-medium hover:bg-gray-100" href="https://twitter.com/intent/tweet?text=Check+out+Tailwind+Awesome&amp;url=https%3A%2F%2Fwww.tailwindawesome.com%2F&amp;via=tailwindawesome">
                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5 opacity-80" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                        </svg>
                        Tweet me
                    </a>
                </div>
            </nav>
        </>
    )
}

