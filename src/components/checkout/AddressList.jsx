/* eslint-disable no-unused-vars */
import editIcon from 'assets/pictures/Icon material-edit.svg';
import addIcon from 'assets/pictures/Icon-ionic-ios-add.svg';
import { Fragment, useState } from "react";
import AddressQuery from './AddressQuery';
import EditAddress from './EditAddress';
import { Modal, Button } from "react-bootstrap";
import AddressForm from './AddressForm';
import AddAddress from './AddAddress';

const AddressList = ({ idState }) => {
    const { data } = AddressQuery()
    const [show, setShow] = useState(false);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [id, setId] = idState

    const handleAdd = () => {
        setShowAddressModal(true)
    }
    const handleEdit = (id) => {
        setId(id)
        setShow(true)
    }

    return (
        <Fragment>
            <div className="address-section">
                <span><h3>Saved Address</h3></span>
                <button onClick={() => handleAdd()} ><span> <img style={{width:"10px", height:"10px"}} src= {addIcon} alt="" /> Add new address</span></button>
            </div>

            <div className="address-edit-section row">
                {data.length > 0 ? (
                    <Fragment>
                        {data.map((address, idx) => {
                            const item = JSON.parse(address?.address)
                            return (
                                <Fragment key={idx}>
                                    <div className='col-sm-4'>
                                        <div className="card-address mt-4 mb-5">
                                            <div className="card-address-edit">
                                                <h5>{address?.title}</h5>
                                                <button className='btn' onClick={() => handleEdit(address?.id)}>
                                                    <img src={editIcon} alt="" />
                                                </button>
                                            </div>
                                            <div className="mt-3">
                                                <span>
                                                    <h5>
                                                        {item?.address}, <br />
                                                        {item?.city}, {item?.state}, <br />
                                                        {item?.country}, {item?.zip}
                                                    </h5>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </Fragment>
                ) : (
                    <p className="text-center my-3">No Address Found</p>
                )}
            </div>
            <AddAddress modelState={[showAddressModal, setShowAddressModal]} />
            <EditAddress modelState={[show, setShow]} id={id} />
        </Fragment>
    )
}

export default AddressList