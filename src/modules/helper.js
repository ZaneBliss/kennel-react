export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
 }
 
 export function splitTypeArray(arr){
     return arr.join(" and ");
 }

 export function handleFieldChange = (evt, object, setItem) => {
    const stateToChange = { ...object };
    stateToChange[evt.target.id] = evt.target.value;
    setItem(stateToChange);
  };