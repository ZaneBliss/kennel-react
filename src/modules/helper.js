import AnimalManager from '../modules/AnimalManager'

export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
 }
 
 export function splitTypeArray(arr){
     return arr.join(" and ");
 }

 export const handleDelete = (id, props, apiManager, url) => {
    apiManager.delete(id).then(() =>
      props.history.push(`${url}`)
    );
};