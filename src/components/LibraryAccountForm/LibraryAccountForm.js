import React from 'react';

const LibraryAccountForm = () => {
    return(
        <div>
            <form>
            <label>First Name
           <input type="text"/> 
           </label>
           <label> Last Name
           <input type="text"/> 
           </label>
           <label> Street Address
           <input type="text"/> 
           </label>
           <label>Street Address
           <input type="text"/> 
           </label>
           <label> City
           <input type="text"/> 
           </label>
           <label>
           <select>
               <option>IN</option>
           </select>
           </label>
           <label>Zip Code
           <input type="text"/> 
           </label>
           <label>Account Number
           <input type="text"/> 
           </label>
           <label>Driver License Number
               <input type="text" />
           </label>
           <label>County
               <select >
                   <option>Red</option>
                   <option>Orange</option>
               </select>
           </label>
           <label>Telephone Number
               <input type="text" />
           </label>
           <label>Email
               <input type="text" />
           </label>
           <label>Handle
               <input type="text" />
           </label>
           <label>Account type
               <select>
                   <option>Adult</option>
                   <option>Juvenile</option>
                   <option>Teacher</option>
               </select>
           </label>
           </form>
        </div>
    )
}

export default LibraryAccountForm;