import * as React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File


const htmlWithTable2 = `<center >
          <img border="0" bEditID="r1sp1" bLabel="headerImage" id="r1sp1" src="https://force-nosoftware-10552-dev-ed.cs92.my.salesforce.com/servlet/servlet.ImageServer?id=0153F000000iJ3g&oid=00D3F000000JUyg" ></img>
        <img border="0" bEditID="r5sp1" bLabel="footerImage" id="r5sp1" src="https://force-nosoftware-10552-dev-ed.cs92.my.salesforce.com/servlet/servlet.ImageServer?id=0153F000000iJ45&oid=00D3F000000JUyg" ></img>
</center>`;


const defaultFonts = [
  "Arial",
  "Comic Sans MS",
  "Courier New",
  "Impact",
  "Georgia",
  "Tahoma",
  "Trebuchet MS",
  "Verdana"
];
export default function App() {
  const [value, setValue] = React.useState(htmlWithTable2);
  const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
    console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
  }
  const sortedFontOptions = [
    "Logical",
    "Salesforce Sans",
    "Garamond",
    "Sans-Serif",
    "Serif",
    "Times New Roman",
    "Helvetica",
    ...defaultFonts
  ].sort();

  React.useEffect(() => {
  }, [])
  

  return (
    <div className="App">
      <SunEditor
        plugin=""
        setContents={value}
        onChange={setValue}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            // ['paragraphStyle', 'blockquote'],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript"
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],

            ["table", "horizontalRule", "link", "image", "video"],
            // ['math'] //You must add the 'katex' library at options to use the 'math' plugin.
            // ['imageGallery'], // You must add the "imageGalleryUrl".
            // ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print","save"],
            ["removeFormat"]

            // ['save', 'template'],
            // '/', Line break
          ], // Or Array of button list, eg. [['font', 'align'], ['image']]
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          font: sortedFontOptions
        }}
        onImageUpload={handleImageUpload}
      />
      <hr />
      <h2>Example value output:</h2>
      <textarea
        disabled
        value={JSON.stringify(value, null, 2)}
        style={{ width: "100%", resize: "none", height: "600px" }}
      />
    </div>
  );
}
