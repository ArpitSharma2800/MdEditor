import React, { useState } from 'react'
import MDEditor from "@uiw/react-md-editor";
import useMediaQuery from '@material-ui/core/useMediaQuery';
const mkdStr = `# Markdown Editor for React

**Hello world!!!**

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`;

function Edit() {
    const matches = useMediaQuery('(min-width:600px)');
    const [value, setValue] = useState(mkdStr);
    return (
        <div>
            <div className="container">
                <MDEditor height="calc(100vh - 80px)" value={value} onChange={setValue} />
            </div>
        </div>
    );
}

export default Edit;
