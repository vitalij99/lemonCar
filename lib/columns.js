import { Button, Link } from '@mui/material';
import Image from 'next/image';
import styled from '@/app/styles/columns.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';

export const newColumns = ({
  brands,
  handleAddImage,
  handleDeleteImage,
  handleDeleteCar,
}) => {
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
    { field: 'id', minWidth: 50 },
    {
      field: 'addImage',
      headerName: 'addImage',
      minWidth: 150,
      renderCell: params => {
        return (
          <div>
            <Button component="label" variant="contained">
              Upload file
              <input
                data-id={params.row.id}
                className={styled.fileUpload}
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
      headerName: 'Image',
      minWidth: 500,
      renderCell: params => {
        return (
          <div>
            {Array.isArray(params.row.image) &&
              params.row.image.map((elem, i) => {
                return (
                  <Button
                    className={styled.button}
                    key={elem + i}
                    onClick={() => handleDeleteImage(params.row.id, elem)}
                  >
                    <Image src={elem} alt="avatar" width={50} height={50} />
                    <div className={styled.delete_wrapp}>
                      <DeleteIcon sx={{ pointerEvents: 'none' }} />
                    </div>
                  </Button>
                );
              })}
          </div>
        );
      },
    },
    {
      field: 'actions',
      minWidth: 50,
      renderCell: params => {
        return (
          <div>
            <Button
              onClick={() => handleDeleteCar(params.row.id)}
              component="label"
              variant="contained"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
};

export const newColumnsMessage = ({ handleDeleteMessage, carList }) => {
  function getDate(params) {
    return params.row.dataFirst ? new Date(params.row.dataFirst) : null;
  }
  return [
    { field: 'phone', editable: true, minWidth: 170 },
    {
      field: 'comment',
      editable: true,
      minWidth: 200,
    },

    { field: 'checkRead', editable: true, type: 'boolean', minWidth: 50 },
    { field: 'id', minWidth: 50 },
    {
      field: 'carId',
      minWidth: 50,
      headerName: 'car',
      renderCell: params => {
        if (params.row.carId && carList) {
          const car = carList.find(car => car.id === params.row.carId);

          return (
            <Link target="_blank" href={`/carlist/${params.row.carId}`}>
              {car.name}
            </Link>
          );
        } else {
          return null;
        }
      },
    },
    {
      field: 'dataFirst',
      headerName: 'data first',
      type: 'date',
      minWidth: 50,
      valueGetter: getDate,
    },
    {
      field: 'dataLast',
      type: 'date',
      headerName: 'data last',
      minWidth: 50,
      valueGetter: getDate,
    },
    { field: 'diffInDays', headerName: 'diff', minWidth: 50 },
    { field: 'deposit', minWidth: 50 },
    { field: 'price', minWidth: 50 },
    { field: 'totalPrise', headerName: 'total prise', minWidth: 50 },
    {
      field: 'actions',
      minWidth: 50,
      renderCell: params => {
        return (
          <div>
            <Button
              onClick={() => handleDeleteMessage(params.row.id)}
              component="label"
              variant="contained"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
};
export const newColumnsBrand = () => {
  const handleAddImage = params => {};
  const handleDeleteBrand = params => {};
  return [
    { field: 'id', minWidth: 50 },
    { field: 'name', editable: true, headerName: 'Name' },

    {
      field: 'logo',
      headerName: 'Logo',

      renderCell: params => {
        return (
          <div>
            <Button component="label">
              <Image
                src={params.row.logo}
                alt="avatar"
                width={50}
                height={50}
              />
              <input
                data-id={params.row.id}
                className={styled.fileUpload}
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
      field: 'actions',
      headerName: 'Actions',
      minWidth: 50,
      renderCell: params => {
        return (
          <div>
            <Button
              onClick={() => handleDeleteBrand(params.row.id)}
              component="label"
              variant="contained"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
};
