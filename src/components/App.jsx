// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./filterContact/filterContact";
import css from './App.module.css'


function App() {
  return (
    <div className={css.conteiner}>
      <h1 >Phonebook</h1>
      <ContactForm />
      <h2 >Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}  

export default App;