import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { form, formContent, searchButtomn, textFieldStyle } from './ExtensionCounter.style';
import Result from './ResultContent';
import Error from '../Common/errorComponent';

const ExtensionCounter = () => {
  const [owner, setOwner] = useState('');
  const [repository, setRepository] = useState('argo-site');
  const [files, setFiles] = useState();
  const [paths, setPaths] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let tempPaths = [];
    const checkFiles = (filesToCheck) => {
      filesToCheck?.map(file => {
        if (file.type !== 'tree' && file.path) {
          tempPaths.push(file.path.split('.').pop()); //This will return the extension without a dot prefix
        } else if (file.type === 'tree') {
          fetch(file.url)
            .then((res) => res.json())
            .then((json) => {
              checkFiles(json.tree)
            })
        }
        return tempPaths;
      });

      setPaths([...tempPaths]);
    }

    if (files) {
      checkFiles(files);
    }
  }, [files]);

  // REMOVE THIS PART (IT'S JUST FOR TEST)
  // In helper folder you can find and array called pathsExample to test the appalication.
  // You just need to import testF, uncomment the testF function in this code and call it inside the useEffect
  // const testF = () => {
  //   const test = [];
  //   pathsExample.map(path => {
  //     paths.push(path.split('.').pop())
  //   })
  // }

  const searchGitHub = () => {
    fetch(`https://api.github.com/repos/${owner}/${repository}/git/trees/master`, { // I'm using master as branch parameter 
      method: 'GET',
      headers: new Headers({
        'Authorization': 'token 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',
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if (json?.message) {
          setErrorMessage(`Something was wrong: ${json?.message}`);
          setPaths('');
        } else {
          setFiles(json.tree);
          setErrorMessage('')
        }
      })
      .catch(error => setErrorMessage(`Something was wrong: ${error}`));
  }

  return (
    <>
      <Box style={form}>
        <div style={formContent}>
          <TextField style={textFieldStyle} id="owner" label="Owner" variant="standard" value={owner} onInput={e => setOwner(e.target.value)} />
          <TextField style={textFieldStyle} id="repository" label="Repository" variant="standard" value={repository} onInput={e => setRepository(e.target.value)} />
          <Button style={searchButtomn} variant="contained" onClick={() => searchGitHub()}>Search</Button>
        </div>
      </Box>
      {
        paths && !errorMessage ?
          <Result paths={paths} /> :
          !paths && errorMessage ?
            <Error errorMessage={errorMessage} /> :
            ''
      }
    </>
  );
}

export default ExtensionCounter;