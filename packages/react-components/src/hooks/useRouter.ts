import {useContext} from "react"
import {Router, RouterContext} from "../context/Router"

export const useRouter = () => {
    return useContext(RouterContext)
}