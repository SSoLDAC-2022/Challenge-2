import React from 'react'
import { setSession } from '../../actions/setSession'
import { connect } from 'react-redux'

const SessionToggle = (props) => {

    return (
        <div className='session-management' onClick={() => {props.setSession(!props.isOpen)}}>
            <i className={props.isOpen?"lock open icon":"lock icon"}></i>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isOpen: state.session.isOpen
    }
}

export default connect(mapStateToProps, {setSession})(SessionToggle)