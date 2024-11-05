import React, { useContext, useState } from 'react'
import "../styles/checkout.scss"
import endPurchase from '../services/endPurchase'
import { Cart } from '../contexts/CartProvider'


const Checkout = ({ viewModal }) => {
    const { totalPrice, hanlderClearer, cartList } = useContext(Cart)
    const [emailConfirm, setEmailConfirm] = useState("")
    const [formValidated, setFormValidated] = useState(false)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    })
    const [showMessage, setShowMessage] = useState(false)


    const handleSubmit = () => {

        if (form.firstName.length >= 3 && form.lastName.length >= 2 && form.email.includes("@" && ".") && form.phone.length >= 7 && emailConfirm === form.email) {
            setShowMessage(true)
            endPurchase(cartList, totalPrice, form)
        } else {
            setFormValidated(true)
        }
    }

    const purchaseOver = ()=>{
        const order = JSON.parse(sessionStorage.getItem('orderID'))
        if(order){
            hanlderClearer()
            viewModal()

        }else{
            viewModal()
        }
    }



    return (
        <>
            <div className='modal-container'>
                <div className='modal'>
                    {showMessage ?
                        (
                            <div className='modal-message' >
                                <div id='orderStatus'>
                                    <h1>Working on it! (。-`ω´-)</h1>
                                </div>
                                <button onClick={purchaseOver} id='checkOutBtn'>Accept</button>
                            </div>
                        )
                        :
                        (
                            <div className='modal-form'>
                                <button className='remove-icon' onClick={viewModal}>x</button>
                                <h1>Billing info:</h1>
                                <form>
                                    <div className='input-field'>
                                        <h3>First name:</h3>
                                        <input
                                            type="text"
                                            placeholder='First Name...'
                                            value={form.firstName}
                                            onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                                        {form.firstName.length < 3 && <span>Must be longer than 3 characters.</span>}
                                    </div>
                                    <div className='input-field'>
                                        <h3>Last name:</h3>
                                        <input
                                            type="text"
                                            placeholder='Last Name'
                                            value={form.lastName}
                                            onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                                        {form.lastName.length < 2 && <span>Must be longer than 2 characters.</span>}
                                    </div>
                                    <div className='input-field'>
                                        <h3>Phone Number:</h3>
                                        <input
                                            type="number"
                                            placeholder='Phone number'
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                                        {form.phone.length <= 7 && <span>Must be 7 digits or longer</span>}
                                    </div>
                                    <div className='input-field'>
                                        <h3>Email:</h3>
                                        <input
                                            type="email"
                                            placeholder='Email'
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                        {!form.email.includes("@" && ".") && <span>That doesn't look like an email adress.</span>}
                                    </div>
                                    <div className='input-field'>
                                        <h3>Confirm Email:</h3>
                                        <input
                                            type="email"
                                            placeholder='Confirm Email'
                                            value={emailConfirm}
                                            onChange={(e) => setEmailConfirm(e.target.value)} />
                                        {emailConfirm != form.email && <span>Email addresses don't match.</span>}
                                    </div>
                                </form>
                                {formValidated ? <h3>All info is required</h3> : null}
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Checkout