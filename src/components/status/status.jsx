import s from './status.module.css';
import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({ editMode: true })
    }
    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
        let a = this.state
        let b = this.props
    }

    render() {

        return (
            <div className={s.status}>
                <div >
                    {!this.state.editMode &&
                        <div onClick={this.activateEditMode}>{this.props.status || "------"}</div>
                    }
                    {this.state.editMode &&
                        <div >
                            <input
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                onBlur={this.deactivateEditMode}
                                value={this.state.status}
                            />
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default ProfileStatus