const placeholder = 
`# Header 1
## Header 2
### Header 3
#### Header 4
  
Some text and \`<span>code</span>\`
**Bold text** and _italic text_ and **_bold italic_**
~~Strikethrough text ~~.

\`\`\`
// Multi-line code:

function example(a, b) {
  if (a > b) {
    return "A is bigger than B";
  }
}
\`\`\`
  
A link to [FCC](https://www.freecodecamp.com)

> Block Quote

![React Logo w/ Text](https://goo.gl/Umyytc)

A table

Header 1 | Header 2 | Header 3
------------ | ------------- | ------------- 
content 1 | content 2 | content 3
content 4 | content 5 | content 6

- Unordered list
  - bulleted
     - different levels
        - deeper
           - deepest


1. Ordered list
1. item
1. item
- item
* item`


marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}" title="${text}">${text}` + '</a>';
}

const Editor = (props) => {
  let classVar="editor", faVar="fas fa-expand", titleVar="maximize editor", text="EDITOR";
  if (props.max) {
    classVar += " maximized";
    faVar = "fas fa-compress";
    titleVar = "minimize editor";
    text += " (maximized)";
  };
  return (
    <div className={classVar}>
       <h1><i className={faVar} title={titleVar} onClick={props.onClick}></i>{text}</h1>
       <textarea id='editor' onChange={props.onChange}>{props.markdown}</textarea>
    </div>
   )
};

const Preview = (props) => {
  let classVar="preview", faVar="fas fa-expand", titleVar="maximize previewer", text="RESULT";
  if (props.max) {
    classVar += " maximized";
    faVar = "fas fa-compress";
    titleVar = "minimize previewer";
    text += " (maximized)";
  };
  let result = marked(props.markdown, { renderer: renderer });
  return (
    <div className={classVar}>
        <h1><i className={faVar} title={titleVar} onClick={props.onClick}></i>{text}</h1>
        <div id='preview' dangerouslySetInnerHTML={{ __html: result }}/>
      </div>
  )
};

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      markdown: placeholder,
      editMax: false,
      previewMax: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePreviewMax = this.handlePreviewMax.bind(this);

  }
  
  handleChange = (e) => {
    this.setState({ markdown: e.target.value });
  }
  
  handlePreviewMax = () => {
    this.setState({
      previewMax: !this.state.previewMax
    });
  }
  handleEditMax = () => {
    this.setState({
      editMax: !this.state.editMax
    });
  }
  
  render() {
    return (
      <div className="cont">
         <Editor markdown={this.state.markdown} onChange={this.handleChange} onClick={this.handleEditMax} max={this.state.editMax} />
         <Preview markdown={this.state.markdown} onClick={this.handlePreviewMax} max={this.state.previewMax} />
      </div>
    )
  }
  
};

ReactDOM.render(<App />, document.getElementById('app'));