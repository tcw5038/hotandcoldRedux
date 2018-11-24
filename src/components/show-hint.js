import React from 'react';
import {connect} from 'react-redux';

export function ShowHint(props) {
    return (
        <div>
            <h2>
            {props.resultHint}
            </h2>
        </div>
      );
}

const mapStateToProps = state => ({
    resultHint:state.resultHint
})

export default connect(mapStateToProps)(ShowHint);