import { Modal, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { ModalBody, Overlay, Header, Form, Input } from './styles';
import { Platform } from 'react-native';
import { useState } from 'react';

const isAndroid = Platform.OS === 'android';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={setTable}
            />
            <Button disabled={table.length === 0} onPress={handleSave}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
