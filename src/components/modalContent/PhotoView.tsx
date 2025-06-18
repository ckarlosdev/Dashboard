import { useEffect, useState } from "react";
import useHttpData from "../../hooks/useHttpData";
import { Photos } from "../../types";
import { searchPhotosByDrIdURL } from "../../hooks/urls";
import PhotoGallery from "./PhotoGallery";

type Props = {
  date: string;
  drId?: number;
};

function Photo({ drId }: Props) {
  const [photosDetails, setPhotosDetails] = useState<Photos[] | undefined>(
    undefined
  );

  const { data: photosData, search } = useHttpData<Photos[]>();

  const getData = () => {
    if (drId) {
      search(searchPhotosByDrIdURL(drId));
    }
  };

  useEffect(() => {
    if (drId) {
      getData();
    }
  }, [drId]);

  useEffect(() => {
    setPhotosDetails(photosData);
  }, [photosData]);

  return (
    <div>
      <PhotoGallery photos={photosDetails ? photosDetails : []} initialIndex={0} />
    </div>
  );
}

export default Photo;
