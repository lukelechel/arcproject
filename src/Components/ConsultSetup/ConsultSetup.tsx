import React from 'react'
import './ConsultSetup.css'

const ConsultSetup = (props:any) => (<div className="consultSetupContainer" id={`consultSetup-${props.id}`}>
    <div id="consultSetupLabel">
        <h1>Schedule a Free In-Home Consultation</h1>
        <h2>Fill out the form below and we’ll be in touch!</h2>
    </div>

    <div id="consultSetupForm">
    <form>
        <div className="formColumn">
            <input type="text" name="name" placeholder="Name" required></input>
            <input type="text" name="email" placeholder="Email" required></input>
        </div>

        <div className="formColumn">
            <input type="text" name="phone" placeholder="Phone" required></input>
            <input type="text" name="zip" placeholder="Zip/Postal Code" required></input>
        </div>
        
        <div className="formColumn">
            <input type="submit" id="consultSetupFormSubmit" value="Request Now!"></input>
            <p>All fields are required</p>
        </div>
    </form>
    </div>
</div>)

export default ConsultSetup