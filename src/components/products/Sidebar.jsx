/* eslint-disable jsx-a11y/anchor-is-valid */
import downArrow from 'assets/pictures/arrow-down.svg'
import cancelImg from 'assets/pictures/Cancel-icon.png'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { API_ENDPOINTS, useQuery } from 'utilities'
import BrandQuery from './BrandQuery'

const Sidebar = () => {
    const { data: categories } = useQuery(API_ENDPOINTS.CATEGORIES)
    let [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const { brands } = BrandQuery()


    const handleNavigate = (e, key, value) => {
        const Obj = {}
        for (const [key, value] of searchParams) {
            if (key === 'price') {
                Object.assign(Obj, { 'price_min': value[0] })
                Object.assign(Obj, { 'price_max': value[1] })
            } else {
                Object.assign(Obj, { [key]: value })
            }
        }
        if (key === 'price') {
            Object.assign(Obj, { 'price_min': value[0] })
            Object.assign(Obj, { 'price_max': value[1] })
        } else {
            Object.assign(Obj, { [key]: value })
        }
        // Object.assign(Obj, { [key]: value })
        const query = new URLSearchParams(Obj).toString()
        navigate(`/products?${query}`);
    }

    const priceList = [
        { label: '0-499', value: [0, 499] },
        { label: '500-999', value: [500, 999] },
        { label: '1000-2000', value: [1000, 2000] },
        { label: '2000-3999', value: [2000, 3999] },
        { label: '4000-10000', value: [4000, 10000] },
        { label: '10000-15000', value: [10000, 15000] },
        { label: '15000-20000', value: [15000, 20000] },
        { label: '20000 &', value: [20000] },
    ]

    return (
        <div className="scroll-div-side">
            <div className="category-filter ">
                <span onClick="openside()">
                    <img src={cancelImg} alt="" />
                </span>

                <ul className="nav flex-column">
                    <li>
                        <a ><img src={downArrow} alt="" />&nbsp;
                            <u className="cathead">Catogories</u></a>
                    </li>

                    {categories.map((category, idx) => (
                        <li className='mt-3 ps-3 cat-filt'>
                            <a onClick={(e) => handleNavigate(e, 'category', category?.id)}>
                                {category?.name}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>


            <div className="brands-filter">
                <ul className="nav flex-column">
                    <li className='mb-3' >
                        <a><img src={downArrow} alt="" />&nbsp;<u className="cathead">Brands</u></a>
                    </li>

                    <div className="scroll-div">
                        <ul className="list-group">

                            {brands.map((brand, idx) => (
                                <li className="list-group-item" key={idx}>
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        value={brand?.id}
                                        onChange={(e) => handleNavigate(e, 'brand', e.target.value)}
                                        id={`brand_${idx}`}
                                    />
                                    <label htmlFor={`brand_${idx}`}>
                                        {brand?.name}
                                    </label>
                                </li>
                            ))}


                        </ul>
                    </div>

                </ul>
            </div>

            <div className="price-filter">
                <ul className="nav flex-column">
                    <li className='mb-3' >
                        <a><img src={downArrow} alt="" />&nbsp;<u className="cathead">Price</u></a>
                    </li>
                    <div className="scroll-div">
                        <ul className="list-group">

                            {
                                priceList.map((price, idx) => (
                                    <li className="list-group-item" key={idx}>
                                        <input
                                            id={`price_${idx}`}
                                            className="form-check-input me-1"
                                            type="radio"
                                            name='price'
                                            value={price.value}
                                            onClick={(e) => handleNavigate(e, 'price', price.value)}
                                        />
                                        <label htmlFor={`price_${idx}`}>

                                            Rs. {price.label}
                                        </label>
                                    </li>
                                ))
                            }




                        </ul>
                    </div>
                </ul>
            </div>

            <div className="size-filter mb-5">
                <ul className="nav flex-column">
                    <li className='mb-3' >
                        <a><img src={downArrow} alt="" />&nbsp;<u className="cathead">Size</u></a>
                    </li>
                    <div className="scroll-div">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                4711
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Alyssa
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Ashley
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Aramis
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Aspen
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Bahama
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Baomi
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Bentley
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Betty
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Barclay
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar