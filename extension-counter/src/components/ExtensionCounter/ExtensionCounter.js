import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { form, formContent } from './ExtensionCounter.style';
import Result from './ResultContent';
import { testPaths } from '../Helpers';

const ExtensionCounter = () => {
  const [owner, setOwner] = useState('');
  const [repository, setRepository] = useState('argo-site');
  const [files, setFiles] = useState();
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    testF()
    if (files) {
      checkFiles(files);
    }
  }, [files]);

  // REMOVE THIS PART (IT'S JUST FOR TEST)
  
  const testF = () => {
    const test = [];
    testPaths.map(path =>{
      paths.push(path.split('.').pop())
    })
  }
  

  const searchGitHub = () => {
    fetch(`https://api.github.com/repos/${owner}/${repository}/git/trees/master`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'token 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',
      })
    })
      .then((res) => res.json())
      .then((json) => {
        setFiles(json.tree);
      })
  }


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
    });

    setPaths([...tempPaths]);
  }

  return (
    <>
      {/* <h3>GitHub extension counter</h3> */}
      <div style={form}>
        <Box
          component="form"
          noValidate
          autoComplete="on"
          sx={formContent}
        >
          <TextField id="standard-basic" label="Owner" variant="standard" value={owner} onInput={e => setOwner(e.target.value)} />
          <TextField id="standard-basic" label="Repository" variant="standard" value={repository} onInput={e => setRepository(e.target.value)} />
          <Button variant="contained" onClick={() => searchGitHub()}>Buscar</Button>
        </Box>
      </div>
      <Result paths={paths} />
    </>
  );
}

export default ExtensionCounter;