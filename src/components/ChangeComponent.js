import React, {Component} from 'react';

class ChangeComponent extends Component {


    render() {
        let {changeTxt} = this.props;
        return (
            <div className="changeTxt">
                <p>{changeTxt}</p>
            </div>
    )
        ;
    }
}


export default ChangeComponent;

