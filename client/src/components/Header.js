import React, {Component } from 'react';
import { connect } from 'react-redux'

class Header extends Component {
    renderContent(){
        switch (this.props.auth) {
            case null:
                return 'still deciding'
            case false: 
                return "still deciding"
            default: 
                return 'im logged in'
        }
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a  className="left brand-logo">Emaily</a>
                    <ul className="right">
                       {this.renderContent}
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps( { auth }){
    return { 
        auth
    }
}
export default connect(mapStateToProps)(Header);