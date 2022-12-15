import { useLocalStorage } from '@ugrc/utilities/hooks';
import { useState } from 'react';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import config from '../services/config';

/*
  This component throws react warnings as console errors because of an upstream bug in reactstrap
  https://github.com/reactstrap/reactstrap/issues/1289
*/
export default function SplashScreen() {
  const [showOnLoad, setShowOnLoad] = useLocalStorage('wfrc-rtp-show-splash', true, true);
  const [isOpen, setIsOpen] = useState(showOnLoad);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>{config.splashScreen.title}</ModalHeader>
      <ModalBody>
        <div dangerouslySetInnerHTML={{ __html: config.splashScreen.content }}></div>
      </ModalBody>
      <ModalFooter className="d-flex flex-direction-row justify-content-between">
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" onChange={(event) => setShowOnLoad(!event.target.checked)} checked={!showOnLoad} />
            Don&apos;t Show This Again
          </Label>
        </FormGroup>
        <Button color="primary" onClick={toggle}>
          Dismiss
        </Button>
      </ModalFooter>
    </Modal>
  );
}
