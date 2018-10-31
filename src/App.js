import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { Button } from 'react-bootstrap';
import './App.css'

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        code: "code"
      };
      this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    this.state.code = newValue;
    console.log('change', newValue);
  }

  /*
  formatCode() {
    var submit_code = this.refs.ace.editor.getValue();;
    var jsonString = JSON.stringify(submit_code);
    console.log(jsonString);
  }
  */

  render() {

    const defaultCode = `
    // 書き換えてみよう！
    console.log('Hello Online Judge');
    `;

    return (
      <div id="container">
        <h1>SFC Editor</h1>
        <Button bsStyle="primary" bsSize="large" onClick={this.formatCode}>
          実行
        </Button>
        <AceEditor
          ref="ace"
          defaultValue={defaultCode}
          mode="javascript"
          theme="monokai"
          fontSize={16}
          tabSize={2}
          wrapEnabled={true}
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{
              $blockScrolling: Infinity
          }}
          style={{marginTop: 10}}
        />
      </div>
    );
  }
}