import { useState } from "react"


export default function Modal() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const ModalComponent = ({ title, content, onClosed }) => {

        return (
            <div className={`modal ${open ? 'open' : ''}`}>
                <div className="modal-glasspane" onClick={handleClose}></div>
                <div className="modal-card">
                    <div className="modal-header">
                        <label>{title}</label>
                    </div>
                    <div className="modal-body">
                        <p>{content}</p>
                    </div>
                    <div className="modal-footer">
                        <button className="primary" onClick={() => { 
                            handleClose()
                            onClosed()
                        }}>Ok</button>
                    </div>
                </div>
            </div>
        )
    }

    return {
        openDialog: handleOpen,
        closeDialog: handleClose,
        Dialog: ModalComponent
    }
}