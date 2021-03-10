import { useEffect, useState } from "react"

// let windowWidth
// if (typeof window !== `undefined`) {
//   windowWidth = window.innerWidth
// }

// export default function useWindowSize() {
//   const [size, setSize] = useState(windowWidth)

//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth)
//     }
//     window.addEventListener("resize", handleResize)
//     return () => {
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [])
//   return size
// }

export default function useWindowSize() {
  let windowWidth
  if (typeof window !== `undefined`) {
    windowWidth = window.innerWidth
  }
  const [windowSize, setWindowSize] = useState(
    !windowWidth ? 1200 : window.innerWidth
  )

  function changeWindowSize() {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    return () => {
      window.removeEventListener("resize", changeWindowSize)
    }
  }, [])

  return windowSize
}
