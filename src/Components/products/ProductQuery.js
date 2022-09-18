import { API_ENDPOINTS, useQuery } from "utilities";

const ProductQuery = () => {
    const { data, isLoading, isError } = useQuery(API_ENDPOINTS.PRODUCT_LIST)

    return {
        data: data,
        isLoading,
        isError
    }

}

export default ProductQuery

