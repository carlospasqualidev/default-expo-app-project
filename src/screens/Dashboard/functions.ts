import { Api } from '../../hooks/api';

export const requestAnimalsData = async ({ setState }: { setState: any }) => {
  await Api.get('/animals/dashboard')
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => console.log(err));
};
