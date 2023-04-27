// @flow
import * as React from 'react';
type Props = {};
const AddProject = (props: Props) => {
  return (
    <main>
      <div className='row'>
        <h3>Add project</h3>
        <form action=''>
          <div className='form-container'>
            <div className='form-item'>
              <label htmlFor='email'>Title *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Slug *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Excerpt *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Is Featured *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Github Link *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Website Link *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Cover Image *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='email'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='message'>Content *</label>
              <textarea placeholder='Type your content...' id='message' />
            </div>
          </div>
          <div className='form-item'>
            <div className='u-center-text'>
              <button className='btn btn-primary'>Add project</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddProject;
