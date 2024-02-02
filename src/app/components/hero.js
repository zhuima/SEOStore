"use client"
import React, { useState } from 'react';
import Link from "next/link"
export default function Hero() {
    const [selectedValue, setSelectedValue] = useState('Trending');

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isTechDropdownOpen, setTechDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
        console.log("isDropdownOpen ----<", isDropdownOpen, selectedValue)
    };


    const toggleTechDropdown = () => {
        setTechDropdownOpen(!isTechDropdownOpen);
        console.log("isTechDropdownOpen ----<", isTechDropdownOpen, selectedValue)
    };

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        toggleDropdown();
    };

    return (
        <div>
            <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-14">
                <div className="text-center">
                    <h1 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl xl:text-7xl">
                        <span className="block xl:inline">Discover the best</span>
                        <span className="text-cool-indigo-600 block">Tailwind templates &amp; SEO kits</span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">Tailwind Awesome is a curated list of the best Tailwind templates &amp; SEO kits in the internet. We are actively searching, and curating the coolest resources out there.</p>
                    <div className="relative mx-auto mt-10 max-w-3xl px-4 sm:px-6">
                        <form className="relative flex flex-1 flex-shrink-0  ">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="absolute left-3 top-1/2 -mt-2.5  text-gray-500 peer-focus:text-gray-900" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                            <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Press (CTRL + /) to searchs...." />
                        </form>
                    </div>
                </div>
            </div>




            <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 sm:pt-10 lg:max-w-screen-xl lg:px-8">
                <div className="flex flex-row flex-wrap items-center justify-between">
                    <div className="sm:w-1/2 lg:w-1/3">
                        <div className="relative inline-block text-left sm:w-52">
                            <div className="">
                                <button type="button" onClick={toggleDropdown} className="rounded-md focus:ring-cool-indigo-300 focus:border-cool-indigo-300 inline-flex w-full justify-between border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2">
                                    {selectedValue ? selectedValue : "Trending"}
                                    <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>



                            <div style={{ display: isDropdownOpen ? 'block' : 'none' }} className={`rounded-md absolute left-0 z-10 mt-2  w-56 origin-top-right divide-y divide-gray-100 overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5`} >
                                <div className="py-2">
                                    <Link className="text-cool-indigo-600 hover:text-cool-indigo-700 hover:bg-cool-indigo-100 relative block px-4 py-2 text-sm font-semibold" href="#" onClick={() => handleOptionClick('Trending')}>
                                        Trending
                                        <span className="text-cool-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link className="hover:bg-cool-indigo-100 relative block px-4 py-2 text-sm font-normal text-gray-700 hover:text-gray-900" href="#" onClick={() => handleOptionClick('Popular')}> Popular </Link>
                                    <Link className="hover:bg-cool-indigo-100 relative block px-4 py-2 text-sm font-normal text-gray-700 hover:text-gray-900" href="#" onClick={() => handleOptionClick('Newest')}> Newest </Link>
                                </div>
                                <div className="py-2">
                                    <Link className="hover:bg-cool-indigo-100 relative block px-4 py-2 text-sm font-normal text-gray-700 hover:text-gray-900" href="#" onClick={() => handleOptionClick('Price high')}> Price high </Link>
                                    <Link className="hover:bg-cool-indigo-100 relative block px-4 py-2 text-sm font-normal text-gray-700 hover:text-gray-900" href="#" onClick={() => handleOptionClick('Price low')}> Price low </Link>
                                    <Link className="hover:bg-cool-indigo-100 relative block px-4 py-2 text-sm font-normal text-gray-700 hover:text-gray-900" href="#" onClick={() => handleOptionClick('Free')}> Free </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:align-center order-last mt-4 w-full border-t border-gray-200 pt-4 sm:flex sm:flex-col lg:order-none lg:mt-0 lg:w-1/3 lg:border-0 lg:pt-0">
                        <div className="rounded-md relative flex self-center bg-gray-100 p-0.5">
                            <Link className="rounded-md focus:ring-cool-indigo-400 relative flex w-1/3 justify-center whitespace-nowrap border-gray-200 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm focus:z-10 focus:outline-none focus:ring-2 sm:w-1/3 sm:px-8" href="/?type=all">All</Link>
                            <Link className="rounded-md focus:ring-cool-indigo-300 relative ml-0.5 flex w-1/3 justify-center whitespace-nowrap border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-2 sm:w-1/3 sm:px-8" href="/?type=template">Templates</Link>
                            <Link className="rounded-md focus:ring-cool-indigo-300 relative ml-0.5 flex w-1/3 justify-center whitespace-nowrap border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-2 sm:w-1/3 sm:px-8" href="/?type=kit">SEO kits</Link>
                        </div>
                    </div>

                    <div className="sm:w-1/2 lg:w-1/3">
                        <div className="ml-auto sm:w-52">
                            <div className="relative" >
                                <button type="button" onClick={toggleTechDropdown} className="rounded-md focus:ring-cool-indigo-300 focus:border-cool-indigo-300 relative w-full cursor-default cursor-pointer border border-gray-300 bg-white py-2 pl-4 pr-10 text-left text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2" >
                                    <span className="flex items-center">
                                        <span className="block truncate"> Any technology </span>
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3">
                                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>

                                <div style={{ display: isTechDropdownOpen ? 'block' : 'none' }} className="rounded-md absolute z-10 mt-1 hidden w-full bg-white shadow-lg" >
                                    <div className="rounded-md max-h-56 overflow-auto py-2 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=any&amp;type=all">
                                            <div className="flex items-center">
                                                <span className="text-cool-indigo-600 hover:text-cool-indigo-700 block truncate font-semibold"> Any technology </span>
                                            </div>

                                            <span className="text-cool-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=5&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Alpine.js icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaElCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--92b3f094017cc980b3b0230b9ff772625210705f/Alpine.js" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Alpine.js </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=1&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Angular icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFFCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--32256b181f1ff1aea0bc6aa234d19c657b1ff586/Angular" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Angular </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=19&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Astro icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0143d0101bdd5428d3c69d2ff642b933bee0ebb5/Astro" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Astro </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=14&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Eleventy icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczRCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--aa48218843707a835cad09c430fc37ed7240c262/Eleventy" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Eleventy </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=11&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Gatsby icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaVVCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6f595293f793574b41f2ea9ac07176ddea78ba64/Gatsby" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Gatsby </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=2&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="HTML icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1lCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--22bf2d448b0fc5390a331bbbc47ba943a514b8b9/HTML" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> HTML </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=10&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Hugo icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaG9CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce73065ac0b9c22d0774222adb630f1ff928dd13/Hugo" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Hugo </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=13&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Jekyll icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0VCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a5c388361182afe189e1cec4b42bd7e2d9b6ab27/Jekyll" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Jekyll </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=12&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Laravel icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazBCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4ba3efdef1cd6b517d00ffc433d08729ab4244ef/Laravel" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Laravel </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=7&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Next.js icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEFCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d4cb537194eaa6e59ef077996f37ac122f25d8dc/Next.js" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Next.js </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=18&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="NuxtJS icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcjhDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4bc0862e243e3072972db75f701c82d8b459a9b4/NuxtJS" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> NuxtJS </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=3&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="React icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2NCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65e06e159185deb837f8242c75f749c29955dd7e/React" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> React </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=4&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Redux icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ3dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--83aa6a19260a4e41f0703ab74ed070ff41ce1655/Redux" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Redux </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=16&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Shopify icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWNDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--477a69d3f7e506384654981ae72ec0da14ee329d/Shopify" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Shopify </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=8&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="TypeScript icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0lCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--48bdfc3353cb94b40b6160865b1cebd83b439077/TypeScript" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> TypeScript </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=6&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="Vue.js icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1VCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9da47c903524ec2e781394c2b6cb613078249dbf/Vue.js" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> Vue.js </span>
                                            </div>
                                        </Link>
                                        <Link className="hover:bg-cool-indigo-100 relative block cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-sm hover:text-gray-900" href="/?technology=9&amp;type=all">
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded-sm bg-gray-100 transition duration-300 ease-in-out">
                                                    <img alt="WordPress icon" className="rounded-sm object-cover object-center opacity-0 transition duration-300 ease-in-out" data-src="/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--832f209dafcf0e7f907f4b897dfce97fa5d4f79d/WordPress" data-lazy-loader-target="entry" src="" />
                                                </div>

                                                <span className="ml-3 block truncate font-normal text-gray-700 hover:text-gray-900"> WordPress </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

