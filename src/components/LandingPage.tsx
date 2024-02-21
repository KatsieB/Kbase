import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

const LandingPage = () => {
  const { authedUser } = useContext(AuthContext);
  const [isRegDialogOpen, setIsRegDialogOpen] = useState(false);

  return (
    <>
      <h3>This is the landing page!!</h3>
    </>
  );
};

export default LandingPage;
