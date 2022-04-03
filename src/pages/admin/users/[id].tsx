import { useRouter } from "next/router";

const Users = () => {
  const router = useRouter();
  const { id } = router.query;
  return <p>Üye Id'si: {id}</p>;
};

export default Users;
