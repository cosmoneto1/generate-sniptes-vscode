import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Input, Textarea, Containe, Main, Title, Button } from "./components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box
  }

  body {
    color: white;
    background-color: #26353E;
  }
`;

function App() {
  const [description, setDescription] = useState("");
  const [tab, setTab] = useState("");
  const [code, setCode] = useState("");
  const [snippte, setSnippte] = useState();

  useEffect(() => {
    codeSnippte();
  });

  function codeSnippte() {
    let row = code.split("\n");
    let t = `"${description}": {
  "prefix": "${tab}",
  "body": [
    ${row.map((it, i) => `${i > 0 ? "\n    " : ""} "${it}"`).join(",")}
  ],
  "description": "${description}"
}`;

    setSnippte(t);
  }

  return (
    <Main>
      <GlobalStyle />
      <Containe center>
        <Title> Generate Snipptes Vscode </Title>
        <Button href="https://www.linkedin.com/in/cosmo-guedes-a3a64610b" target="_blank">
          Made by <b> Cosmo Guedes </b>
        </Button>
      </Containe>
      <Containe>
        <Input mr placeholder="Descrição" name="Description" onChange={(e) => setDescription(e.target.value)} />
        <Input placeholder="Tab" name="Tab" onChange={(e) => setTab(e.target.value)} />
      </Containe>
      <Containe>
        <Textarea mr placeholder="Code..." name="Code" onChange={(e) => setCode(e.target.value)} />
        <Textarea placeholder="Snippet..." name="Snippte" value={snippte} />
      </Containe>
    </Main>
  );
}

export default App;
