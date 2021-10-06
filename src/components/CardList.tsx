import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  id: string;
  title: string;
  description: string;
  url: string;
  ts: number;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState('');

  const handleViewImage = (url: string): void => {
    onOpen();
    setSelectedImage(url);
  };

  return (
    <>
      {cards && (
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          {cards.map(image => (
            <Card key={image.id} data={image} viewImage={handleViewImage} />
          ))}
        </SimpleGrid>
      )}

      <ModalViewImage
        isOpen={isOpen}
        imgUrl={selectedImage}
        onClose={onClose}
      />
    </>
  );
}
