import useSWR from "swr"
import fetcher from "./fetcher"

const useQuery = (url) => {
    const { data, error } = useSWR(url, fetcher)

    return {
        data: data?.data || [],
        isLoading: !data && !error,
        isError: error
    }
}

export default useQuery