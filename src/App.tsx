import React, {useRef, useState} from 'react';

function CurrentCookie() {
  if (!document.cookie) {
    return <div><em>None</em></div>;
  }

  return <pre>{document.cookie}</pre>;
}

function App() {
  const [cookie, setCookie] = useState(document.cookie);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onClick = () => {
    if (!textareaRef.current) {
      return;
    }
    const cookie = textareaRef.current.value;
    setCookie(cookie);
    document.cookie = cookie;
  }

  return (
    <div className="App container">
      <h1><code>document.cookie</code></h1>
      <CurrentCookie />
      <textarea ref={textareaRef} className="form-control mb-2" defaultValue={cookie} />
      <small className="form-text text-muted mb-2">Note that you can only set/update a single cookie at a time.</small>
      <button onClick={onClick} type="submit" className="btn btn-primary btn-lg mb-2">Set Cookie</button>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie">MDN: Document.cookie</a></li>
      </ul>
    </div>
  );
}

export default App;
