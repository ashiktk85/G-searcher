'use client'

import { useState } from 'react'

export default function LocationSearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('[v0] Searching for location:', searchValue)
    onSearch(searchValue)
  }

  const handleClear = () => {
    setSearchValue('')
  }

  return (
    <div className="w-1/2">
      <form onSubmit={handleSearch} className="relative">
        <div
          className={`
            relative flex items-center bg-white rounded-full shadow-lg
            transition-all duration-300 ease-in-out
            ${isFocused ? 'shadow-xl ring-2 ring-blue-500/20' : 'shadow-lg'}
          `}
        >

          <div className="pl-6 pr-3 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for a location..."
            className="flex-1 py-4 px-2 bg-transparent outline-none text-slate-700 placeholder-slate-400 text-base"
          />

          {searchValue && (
            <button
              type="button"
              onClick={handleClear}
              className="mr-2 p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          <button
            type="submit"
            className="mr-2 px-6 py-2.5 bg-black text-white rounded-full hover:bg-black/80 transition-colors duration-200 font-medium cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>

      <p className="mt-3 text-center text-sm text-slate-500">
        Try searching for cities, addresses, or landmarks
      </p>
    </div>
  )
}
