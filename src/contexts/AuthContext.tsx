// import {
//   PropsWithChildren,
//   createContext,
//   useState,
//   useContext,
//   useEffect,
// } from "react";
// import { User, Unsubscribe, onAuthStateChanged } from "firebase/auth";
// import { MessagingContext } from "./MessagingContext";
// import { useNavigate } from "react-router-dom";
// import { auth, signOutUser } from "../firebaseinit";

// type AuthContextType = {
//   authedUser: User | null;
//   signOut: () => {};
// };

// export const AuthContext = createContext({} as AuthContextType);

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const [authedUser, setAuthedUser] = useState<User | null>(null);
//   const navigate = useNavigate();
//   const { setMessage } = useContext(MessagingContext);

//   useEffect(() => {
//     let unsub: Unsubscribe | null;

//     unsub = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(user);
//         if (user.email && user.email.split("@")[1] === "aurora-schools.org") {
//           console.log("You're good here: ", user);
//           setAuthedUser(user);
//         } else {
//           signOut();
//           setMessage(
//             <p>
//               Only District-provided accounts can be used for RootCraft signin.
//             </p>,
//             "warning",
//             6000
//           );
//         }
//       } else {
//         setAuthedUser(null);
//       }
//     });
//     return () => {
//       if (unsub) {
//         unsub();
//         console.log("AuthContext is now clean!!!!");
//       }
//     };
//   }, []);

//   // As soon as the current user goes to null,
//   // the user will be redirected to the home page.
//   const signOut = async () => {
//     await signOutUser();
//     setAuthedUser(null);
//     navigate("/");
//   };

//   const value = {
//     authedUser,
//     signOut,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

//not sure if we use an adaptation of the code above, or the code below.

import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IAuthContextProps {}

const AuthContext: React.FunctionComponent<IAuthContextProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthorized");
      navigate("/LandingPage");
    }
  });
  if (loading) return <p>loading...</p>;

  return <div>{children}</div>;
};

export default AuthContext;
