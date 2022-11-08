import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Visum`
    }, [title])
}

export default useTitle