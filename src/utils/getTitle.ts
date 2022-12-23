const getTitle = (pathname: string) => {
  switch (pathname) {
    case '/admin':
      return '채용공고를 수정해보세요';
    case '/':
      return '관심있는 채용공고를 추가해보세요';
    case '/user':
      return '모은 채용공고를 관리해보세요';
    default:
      return '';
  }
};

export { getTitle };
