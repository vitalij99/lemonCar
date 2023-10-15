import { Button } from '@mui/material';
import Image from 'next/image';

export const newColumns = ({ brands, handleAddImage }) => {
  return [
    { field: 'name', editable: true, headerName: 'Name', minWidth: 170 },
    {
      field: 'carBrand',
      editable: true,
      headerName: 'Brand',
      type: 'singleSelect',
      valueOptions: () => {
        return brands.map(brand => brand.name);
      },
      minWidth: 100,
    },
    { field: 'engine', editable: true, headerName: 'Engine', minWidth: 100 },
    { field: 'power', editable: true, headerName: 'Power', minWidth: 100 },
    { field: 'price', editable: true, headerName: 'Price', minWidth: 100 },
    { field: 'seats', editable: true, headerName: 'Seats', minWidth: 60 },
    { field: 'drive', editable: true, headerName: 'Drive', minWidth: 100 },
    {
      field: 'acceleration',
      editable: true,
      headerName: 'Acceleration',
      minWidth: 100,
    },
    { field: 'type', editable: true, headerName: 'Type', minWidth: 100 },
    {
      field: 'addImage',
      headerName: 'addImage',
      editable: true,
      minWidth: 150,
      renderCell: params => {
        return (
          <div>
            <Button component="label" variant="contained">
              Upload file
              <input
                data-id={params.row.id}
                className="fileUpload"
                type="file"
                multiple
                onChange={handleAddImage}
              />
            </Button>
          </div>
        );
      },
    },

    {
      field: 'image',
      editable: true,
      headerName: 'Image',
      minWidth: 40,
      renderCell: params => {
        return (
          <div>
            {Array.isArray(params.row.image) &&
              params.row.image.map((elem, i) => {
                return (
                  <Image
                    key={elem + i}
                    src={elem}
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                );
              })}
          </div>
        );
      },
    },
    { field: 'id', minWidth: 50 },
  ];
};
