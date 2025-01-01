import { useMutation } from '@tanstack/react-query';
import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';

export const useNotificationMutate = () => {
  return useMutation<void, Error, { phone?: string; email?: string }>({
    mutationFn: ({ phone, email }) => {
      return ky
        .post(`${SOKEY_API_URL.ALARM}`, {
          json: {
            phone: phone,
            email: email,
          },
        })
        .json();
    },
  });
};
