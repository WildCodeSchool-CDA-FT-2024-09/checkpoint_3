import { useRef } from "react";

export default function NewCountryForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const emoji = emojiRef.current?.value;
    const code = codeRef.current?.value;

    // console.log({name, emoji, code});
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const emojiRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">name</label>
      <input
        id="name-input"
        type="text"
        placeholder="country name"
        ref={nameRef}
      ></input>
      <label htmlFor="emoji-input">emoji</label>
      <input
        id="emoji-input"
        type="text"
        placeholder="emoji"
        ref={emojiRef}
      ></input>
      <label htmlFor="code-input">code</label>
      <input
        id="code-input"
        type="text"
        placeholder="country code"
        ref={codeRef}
      ></input>
      <button role="button">add</button>
    </form>
  );
}
