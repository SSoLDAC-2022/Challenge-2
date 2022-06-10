import React, { useEffect, useState } from 'react'
import { setSession } from '../../actions/setSession'
import { connect } from 'react-redux'
import { setQuery } from '../../actions/queries/setQuery'

const SessionToggle = (props) => {

    const [wasOpen, setWasOpen] = useState(false);

    useEffect(() => {
        var firstOpen = true;
        if (wasOpen && !props.isOpen){
            props.setQuery(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ex: <https://example.com/>
PREFIX ifc: <http://ifcowl.openbimstandards.org/IFC2X3_Final#>
PREFIX inst: <https://web-bim/resources/>SELECT ?v1 ?v2 (GROUP_CONCAT(?item) AS ?items)
WHERE{
    ?item a ifc:IfcWall .
    ?item inst:isExternalPsetWallcommon ?v1 .
    ?item inst:loadBearingPsetWallcommon ?v2 .
} GROUP BY ?v1 ?v2
            `)
        }
        if (firstOpen && props.isOpen){
            setWasOpen(true);
        }

    },[props.isOpen])

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

export default connect(mapStateToProps, {setSession, setQuery})(SessionToggle)