import {useContext} from "react"
import {Router, RouterContext} from ".."

export const useRouter = () => {
    return useContext(RouterContext)
}