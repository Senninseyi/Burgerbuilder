import React from 'react';
import { Modal } from './theme';
import Aux from '../../../auxillary/auxillary.js';
import Backdrop from '../backdrop/backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <Modal style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </Modal>
    </Aux>
);

export default modal