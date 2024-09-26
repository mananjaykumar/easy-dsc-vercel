export default function useUser() {
  const userInfoString = localStorage.getItem('userInfo');
  if (userInfoString) {
    const userInfo = JSON.parse(userInfoString);
    return { userInfo };
  }
  return { userInfo: null };
}
