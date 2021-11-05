//going to have the url the radio buttons, submit button, body input field
import React from 'react';

export default function Controls({ 
    onSubmit,
    jsonValue,
    onInputChange,
    method
 }){
     return (
         <section>
            <form onSubmit={onSubmit}>
                <input className='url' role="textbox" type='text' name='url' placeholder='URL' onChange={onInputChange} />
                <section>
                    <div>
                        <input type='radio' role='radio' id='get' name='method' value='GET' onChange={onInputChange} checked={method === 'GET'} />
                        <label htmlFor='get'>GET</label>

                        <input type='radio' id='post' name='method' value='POST' onChange={onInputChange} checked={method === 'POST'} />
                        <label htmlFor='post'>POST</label>

                        <input type='radio' id='put' name='method' value='PUT' onChange={onInputChange} checked={method === 'PUT'} />
                        <label htmlFor='put'>PUT</label>

                        <input type='radio' id='patch' name='method' value='PATCH' onChange={onInputChange} checked={method === 'PATCH'} />
                        <label htmlFor='patch'>PATCH</label>

                        <input type='radio' id='delete' name='method' value='DELETE' onChange={onInputChange} checked={method === 'DELETE'} />
                        <label htmlFor='delete'>DELETE</label>
                    </div> 
                    <button aria-label='send-button'>Send</button>
                </section>
                <textarea placeholder='Raw JSON Body' name='body' value={jsonValue} onChange={onInputChange} ></textarea>
            </form>

         </section>
     )
 }