/* eslint-disable jsx-a11y/anchor-is-valid */
import downArrow from 'assets/pictures/arrow-down.svg'
import cancelImg from 'assets/pictures/Cancel-icon.png'

const Sidebar = () => {
    return (
        <div className="scroll-div-side">
            <div className="category-filter ">
                <span onClick="openside()">
                    <img src={cancelImg} alt="" /></span>
                <ul className="nav flex-column">
                    <li>
                        <a ><img src={downArrow} alt="" />&nbsp;
                            <u className="cathead">Catogories</u></a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                        <a href="#">Fragnance</a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                        <a href="#">Skin Care & Beauty</a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                        <a href="#">Accessories</a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                        <a href="#">Home Fragrance </a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt' >
                        <a href="#">Apparels </a>
                    </li>
                </ul>
            </div>
            <div className="brands-filter">
                <ul className="nav flex-column">
                    <li className='mb-3' >
                        <a><img src={downArrow} alt="" />&nbsp;<u className="cathead">Brands</u></a>
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

            <div className="price-filter">
                <ul className="nav flex-column">
                    <li className='mb-3' >
                        <a><img src={downArrow} alt="" />&nbsp;<u className="cathead">Price</u></a>
                    </li>
                    <div className="scroll-div">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 0-499
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 500-999
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 1000-1999
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 2000-3999
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 4000-10000
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 10000-15000
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 15000-20000
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Rs. 20000 & above
                            </li>
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