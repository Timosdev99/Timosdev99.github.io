'use client'
import { useEffect, useState } from "react"

const Counter = ({ className }) => {
  const [Counting, setCounting] = useState(10)

  useEffect(() => {
    if (Counting < 99) {
      const timer = setInterval(() => {
        setCounting((prevCount) => {
          const nextCount = prevCount + 10;
          if (nextCount > 99) {
            return 99;
          }
          return nextCount;
        });
      }, 500)
      return () => clearInterval(timer)
    }
  }, [Counting])

  return (
    <div className={`text-7xl font-serif ${className}`}>
      <h1>{Counting}</h1>
    </div>
  )
}

export default Counter
