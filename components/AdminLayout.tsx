import React from 'react';

export default function AdminLayout() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      return;
    }
    if (jobs && !checkDuplicated(url, jobs)) {
      setUrl('');
      setMessage('이미 존재하는 공고입니다.');
      return;
    }
    mutate(url, {
      onSuccess: () => {
        setMessage('');
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const { response } = error;
          if (response) {
            setMessage(response.data.message);
          }
        }
      },
      onSettled: () => {
        setUrl('');
      },
    });
  };

  return <div>AdminLayout</div>;
}
