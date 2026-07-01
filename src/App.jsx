import React, { useEffect, useState, useCallback, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*(){}~`'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numAllowed, charAllowed, setpassword])

  const passwordRef = useRef(null)

  const copyPassword = () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 32)
    window, navigator.clipboard.writeText(password)
  }
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md  bg-gray-700 rounded my-16  text-center p-3 text-white'>
        <h1 className='text-2xl '>Password Generator</h1>
        <div className='rounded m-4 text-center overflow-hidden'>
          <div className='flex justify-center item-center '>
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3 bg-white  text-orange-400 text-black'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPassword} className='bg-blue-600 px-5'>copy</button>
          </div>
          <div className='flex text-center gap-x-1 my-2'>
            <input
              type="range"
              max={32}
              min={8}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'
            />
            <label className='text-orange-400'>Length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={(e) => { setNumAllowed((prev) => !prev) }} />
            <label htmlFor='numberInput'>Number</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={(e) => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
