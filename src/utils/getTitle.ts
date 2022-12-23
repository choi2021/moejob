const getTitle = (pathname: string) => {
  switch (pathname) {
    case '/admin':
      return '등록된 채용공고를 수정해보세요';
    case '/':
    case '/jobs/[id]':
      return '관심있는 채용공고를 추가해보세요';
    case '/user':
    case '/user/[id]':
      return '모은 채용공고를 관리해보세요';
    default:
      return '';
  }
};

export { getTitle };
