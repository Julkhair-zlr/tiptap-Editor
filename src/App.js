import React from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./App.css";
// import CollaborationCursor from "@tiptap/extension-collaboration-cursor";

import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHeading,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaUndo,
  FaUnderline,
} from "react-icons/fa";
import { AiFillHighlight } from "react-icons/ai";
import { BsCode } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
// import { MdOutlineHorizontalRule } from "react-icons/md";
import { Underline } from "@tiptap/extension-underline";
import { Highlight } from "@tiptap/extension-highlight";
import { Mention } from "@tiptap/extension-mention";
// import GetMyTeam from "./GetMyTeam";
import suggestion from "./suggestion";
// const App = () => {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: "<p>Hello World!</p>",
//   });
//   return (
//     <div>
//       <EditorContent editor={editor} />
//     </div>
//   );
// };

// export default App;

const App = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="menu-bar">
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          disabled={!editor.can().chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlite") ? "is-active" : ""}
        >
          <AiFillHighlight />
        </button>

        {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        Clear Marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
        {/* <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        Paragraph
      </button> */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <FaHeading />
          <span>1</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          <FaHeading />
          <span>2</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          <FaHeading />
          <span>3</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          <FaHeading />
          <span>4</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          <FaHeading />
          <span>5</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          <FaHeading />
          <span>6</span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          <BsCode />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <BiCodeBlock />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <FaQuoteLeft />
        </button>
        {/* <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <MdOutlineHorizontalRule />
      </button> */}

        {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button> */}
      </div>
      <div>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <FaUndo />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <FaRedo />
        </button>
      </div>
      {/* <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </button> */}
    </div>
  );
};

// export default App;
export default () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Mention.configure({
        types: [ListItem.name],
        suggestion,
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      // CollaborationCursor.configure({
      //   // provider: provider,
      //   user: {
      //     name: "julkhair",
      //     color: "yellow",
      //   },
      // }),
    ],
    content: ` `,

    onUpdate: ({ editor }) => {
      // const html = editor.getHTML();
      // console.log("Html Code :: ", html);
      const json = editor.getJSON();

      // json.content.map((text) => {
      //   console.log(
      //     "map ::",
      //     text.content.map((da) => {
      //       // console.log("id", da.attrs.id);
      //       // console.log("text", da.text);
      //     })
      //   );
      // });
      console.log(json);
    },
  });

  const actionItemHandler = () => {
    // const text = editor.getText();
    // console.log("text :: ", text);
    let text = editor.getJSON().content;
    const actionItemText = [];
    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < text[i]?.content?.length; j++) {
        text[i]?.content[j]?.type === "mention"
          ? actionItemText.push({
              user: text[i]?.content[j]?.attrs.id,
              content: "",
            })
          : actionItemText.length > 0 && text[i]?.content[j]?.type === "text"
          ? (actionItemText[actionItemText.length - 1].content +=
              " " + text[i]?.content[j]?.text.trim())
          : console.log(
              editor.getJSON().content.map((data) => {
                data.content.flatMap((text) => {
                  console.log("Text Type :: ", text.type);
                  console.log("Text Attrs :: ", text.attrs);
                  console.log("Text Obj :: ", text);
                  console.log("Text Content :: ", text.text);
                });
              })
            );
        console.log("Getting data With HTML tag :: ", editor.getHTML());
        console.log("Getting Text :: ", editor.getText());
      }
    }
    return console.log(actionItemText);
  };
  return (
    <>
      <div className="text-editor">
        <App editor={editor} value={actionItemHandler} />

        <EditorContent editor={editor} />
        <button onClick={actionItemHandler}>Add Action Items</button>
      </div>
      {/* <div>
        <GetMyTeam />
      </div> */}
    </>
  );
};
