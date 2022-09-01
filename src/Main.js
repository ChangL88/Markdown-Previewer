import { useState } from 'react'
import { marked } from 'marked'
import './main.css'






const Main = () => {
    const renderer = new marked.Renderer();

    marked.setOptions({
        breaks: true,
    })
    const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    `;

    const [editorValue, setValue] = useState(placeholder);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

        return ( 
            <div className="main">
                <div className="editor-wrapper">
                    <textarea name="editor" id="editor" cols="80" rows="20" value={editorValue} onChange={(e) => handleChange(e)}></textarea>
                </div>
                <div className="render-wrapper">
                    <div style={{backgroundColor: 'lightgray'}} id="preview" dangerouslySetInnerHTML={{__html: marked.parse(editorValue, { renderer: renderer })}}></div>
                </div>
            </div>
        );
    }

 
export default Main;