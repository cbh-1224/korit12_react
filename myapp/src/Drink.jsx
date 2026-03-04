import HeaderText from "./HeaderText";  

export default function Drink({drink}) {

  return (
    <>
    <h1>Would you like to drink some {drink}?</h1>
    <HeaderText text='This is a header text' />
    </>
    
);

}