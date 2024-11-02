import React, { useEffect, useState } from 'react'
import "../styles/checkout.scss"
import { NavLink } from 'react-router-dom'

const Checkout = () => {
    const [emailConfirm, setEmailConfirm] = useState("")
    const [formValidated, setFormValidated] = useState(false)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    })

    const handleSubmit = () => {
        console.log(form)
        setFormValidated(false)

        if (form.firstName.length >= 3 && form.lastName.length >= 2 && form.email.includes("@" && ".") && form.phone.length >= 7 && emailConfirm === form.email) {
            console.log("pog ヾ(T(エ)Tヽ)")
            /*add here the endpurchase thingie (￣(oo)￣)ﾉ */

        } else {
            console.log("not pog (〜￣▽￣)〜")
            setFormValidated(true)
        }

        /*remember to set this 0 once it's done  */
    }
    




    return (
        <>
            <div className='modal-container'>
                <div className='modal'>
                    <button className='remove-icon' >x</button>
                    <h1>Billing info:</h1>
                    <form>
                        <div className='input-field'>
                            <h3>First name:</h3>
                            <input
                                type="text"
                                placeholder='First Name'
                                value={form.firstName}
                                onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                            {form.firstName.length < 3 && <span>It must be longer than 3 characters.</span>}
                        </div>

                        <div className='input-field'>
                            <h3>Last name:</h3>
                            <input
                                type="text"
                                placeholder='Last Name'
                                value={form.lastName}
                                onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                            {form.lastName.length < 2 && <span>It must be longer than 2 characters.</span>}
                        </div>
                        <div className='input-field'>
                            <h3>Phone Number:</h3>
                            <input
                                type="number"
                                placeholder='Phone number'
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                            {form.phone.length <= 7 && <span>Phones are a little longer, between 7 and 10 numbers.</span>}
                        </div>
                        <div>
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
                    {formValidated ? <h3>All info is requiered</h3> : null}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>

        </>
    )

}

export default Checkout