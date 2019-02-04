import React from 'react';


export default class Header extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        {this.props.dynamicTitle}
                    </div>
                </div>
            </div>
        )
    }
}


