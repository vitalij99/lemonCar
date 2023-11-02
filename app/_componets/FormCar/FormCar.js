import { Button } from '@mui/material';

const FormCar = ({ form, calendar }) => {
  const handleSubmit = () => {
    console.log('start');
    console.log(form, calendar);
  };
  return (
    <div>
      <Button onClick={handleSubmit}> Rental Car</Button>
    </div>
  );
};

export default FormCar;
