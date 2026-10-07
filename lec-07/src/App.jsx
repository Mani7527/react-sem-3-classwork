// import { useState } from 'react';

// export default function MyInput() {
//   const [text, setText] = useState('hello');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={text} onChange={handleChange} />
//       <p>You typed: {text}</p>
//       <button onClick={() => setText('hello')}>
//         Reset
//       </button>
//     </>
//   );
// }
import { useState } from 'react';

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}
    