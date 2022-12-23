export const redirectPath = (pathname: string, id: string) => {
  switch (pathname) {
    case '/':
    case '/jobs/[id]':
      return `/jobs/${id}`;
    case '/admin':
      return `/admin/${id}`;
    case '/user':
      return `/user/${id}`;
    default:
      return '';
  }
};
