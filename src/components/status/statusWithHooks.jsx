import s from './status.module.css';
import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div className={s.status}>
            <div>
                {!editMode &&
                    <div onClick={activateEditMode} >{props.status || "------"}</div>
                }
                {editMode &&
                    <div>
                        <input
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            value={status}
                        />
                    </div>
                }
            </div>
        </div>
    )
}


export default ProfileStatusWithHooks