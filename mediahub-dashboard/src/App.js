import React, { useEffect } from 'react';
import { getUsers, createUser, updateUser, patchUser, deleteUser } from './axiosAssignment';
// import { ThemeProvider } from './Contexts/ThemeContext';
// import { UserProvider } from './Contexts/UserContext';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <ThemeProvider>
//       <UserProvider>
//         <div className="app-container">
//           <Header />
//           <MainContent />
//           <Footer />
//         </div>
//       </UserProvider>
//     </ThemeProvider>
//   );
// };
function App() {
  useEffect(() => {
    // Run one by one or all together for testing
    getUsers();
    createUser();
    updateUser();
    patchUser();
    deleteUser();
  }, []);

  return <div>Open console to see Axios responses</div>;
}

export default App;
