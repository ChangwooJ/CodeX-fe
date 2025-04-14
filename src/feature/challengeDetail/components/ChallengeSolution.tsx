import MonacoEditor from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";
import styled from "styled-components";

const SolutionType = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2%;
  width: 100%;
  height: 15%;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  border-bottom: 1px solid var(--primary-section-color);
`;

const ChallengeSolution = () => {
  const handleEditorChange = (value: string | undefined) => {
    console.log("코드 내용:", value);
  };

  const handleEditorDidMount = (
    editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor
  ) => {
    monaco.editor.defineTheme("custom-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#263747",
        "editor.foreground": "#FFFFFF",
        "editorLineNumber.foreground": "#8b9bb4",
      },
    });

    monaco.editor.setTheme("custom-theme");
  };

  return (
    <>
      <SolutionType>solution.py</SolutionType>
      <div
        style={{ height: "100%", backgroundColor: "#263747", padding: "3%" }}
      >
        <MonacoEditor
          height="85%"
          defaultLanguage="python"
          defaultValue="# 여기에 코드를 작성하세요"
          theme="custom-theme"
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>
    </>
  );
};

export default ChallengeSolution;