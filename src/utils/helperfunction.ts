export const getInitials = (name: string) => {
  const words = name.trim().split(' ');
  const first = words[0]?.charAt(0) || '';
  const second = words[1]?.charAt(0) || '';
  return (first + second).toUpperCase();
};
