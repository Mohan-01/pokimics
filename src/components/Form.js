// import FormInput from './FormInput';

function Form({ caption, handleSubmit }) {
  return (
    <form method="post" onSubmit={handleSubmit}>
      <table>
        <caption>{caption}</caption>
        <tbody>
          <tr>
            <td className="name">
              <label htmlFor="name">Name: </label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                required={caption !== 'Update'}
                id="name"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="author">Author: </label>
            </td>
            <td>
              <input
                type="text"
                name="author"
                required={caption !== 'Update'}
                id="author"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="type">Type: </label>
            </td>
            <td>
              <input
                type="text"
                name="type"
                required={caption !== 'Update'}
                id="type"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="country">Country: </label>
            </td>
            <td>
              <input
                type="text"
                name="country"
                required={caption !== 'Update'}
                id="country"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="language">Language: </label>
            </td>
            <td>
              <input
                type="text"
                name="language"
                required={caption !== 'Update'}
                id="language"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price: </label>
            </td>
            <td>
              <input type="number" name="price" id="price" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="photo">Photo: </label>
            </td>
            <td>
              <input type="file" name="photo" id="photo" />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default Form
